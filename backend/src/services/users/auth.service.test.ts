// This replaces the entire DB module (which creates the prisma client)
const mockFindUnique = jest.fn();
const mockCreate = jest.fn();

jest.mock("../../config/database.ts", () => ({
    prisma: {
        user: {
            findUnique: mockFindUnique,
            create: mockCreate,
        },
    },
}));

import type { User } from "../../generated/prisma/index.js";
import type { ISignupRequest } from "../../types/auth.ts";
import {
    AuthenticationError,
    ConflictError,
    ValidationError,
} from "../../utils/errors.utils.ts";
import { AuthService } from "./auth.service.ts";
describe("AuthService", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe("hashPassword", () => {
        it("Should hash password correctly", async () => {
            // Setup data
            const rawPassword = "WeWork441$";

            // Act
            const res = await AuthService.hashPassword(rawPassword);

            expect(res).toBeDefined();
            expect(res).not.toBe(rawPassword);
            expect(res.length).toBe(60);
        });
    });
    describe("Validate password", () => {
        it("Should validate given password agains a hashed password", async () => {
            const storedPass = "WeWork441$";
            const storedHash = await AuthService.hashPassword(storedPass);

            const givenPassword = "WeWork441$";
            const isPasswordValid = await AuthService.validatePassword(
                givenPassword,
                storedHash
            );

            expect(isPasswordValid).toBe(true);
        });

        it("Should return false for an invalid password", async () => {
            const storedPass = "WeWork441$";
            const storedHash = await AuthService.hashPassword(storedPass);

            const givenPassword = "DifferentPass$";
            const isPasswordValid = await AuthService.validatePassword(
                givenPassword,
                storedHash
            );

            expect(isPasswordValid).toBe(false);
        });
    });

    describe("validateEmail", () => {
        it("Should return true for a valid email", () => {
            const emailAttempt = "myEmail@test.com";

            expect(AuthService.validateEmail(emailAttempt)).toBe(true);
        });

        it("Should return false for an invalid email", () => {
            const emailAttempt = "abc123";

            expect(AuthService.validateEmail(emailAttempt)).toBe(false);
        });
    });

    describe("validatePasswordStrength", () => {
        it("Should return true for a valid password", () => {
            const strongPass = "MyPass123!@#";

            const isValid = AuthService.validatePasswordStrength(strongPass);
            expect(isValid).toBe(true);
        });

        it("Should return false for a weak password", () => {
            const weakPass = "mypass";

            const isValid = AuthService.validatePasswordStrength(weakPass);
            expect(isValid).toBe(false);
        });
    });

    describe("checkUserConflicts", () => {
        it("Should return True for a user that already exists in DB", async () => {
            const mockUser = {
                id: "some-uuid",
                email: "existing@mail.com",
                name: "Existing user",
            } as User;
            mockFindUnique.mockResolvedValue(mockUser);

            const existingMail = "existing@mail.com";
            const res = await AuthService.checkUserConflicts(existingMail);

            expect(res.exists).toBe(true);
            if (res.exists) {
                expect(res.message).toBeDefined();
                expect(res.message).toBe("User with this email already exists");
            }
        });

        it("Should return False for a user that does not exist in DB", async () => {
            // Mock our service layer to return null (no user exists)
            mockFindUnique.mockResolvedValue(null);

            const res = await AuthService.checkUserConflicts("user@email.com");

            expect(res.exists).toBe(false);
            expect(mockFindUnique).toHaveBeenCalledWith({
                where: { email: "user@email.com" },
            });
        });
    });

    describe("createUser", () => {
        it("Should successfully create a new user", async () => {
            const userToBeCreated = {
                name: "Toby",
                email: "toby@mail.com",
                password: "WeWork441$",
            } as ISignupRequest;
            const userCreated = {
                name: "Toby",
                email: "toby@mail.com",
                aiEnabled: false,
                createdAt: new Date(),
                defaultCurrency: "MXN",
                id: "some-uuid",
                language: "en",
                password: "hash-password-should-be-here",
                profilePictureUrl: null,
                twoFactorEnabled: false,
                twoFactorSecret: null,
                updatedAt: new Date(),
                // ... Rest of props
                // password: "hash",
            } as User;
            mockCreate.mockResolvedValue(userCreated);

            const res = await AuthService.createUser(userToBeCreated);

            expect(res).toBeDefined();
            expect(res).not.toHaveProperty("password");
            expect(res.id).toBeDefined();
            expect(res.name).toEqual(userToBeCreated.name);
            expect(res.email).toEqual(userToBeCreated.email);

            expect(mockFindUnique).toHaveBeenCalledWith({
                where: { email: userCreated.email.toLowerCase() },
            });
            expect(mockCreate).toHaveBeenCalledWith({
                data: expect.objectContaining({
                    name: userToBeCreated.name,
                    email: userToBeCreated.email.toLowerCase(), // normalized
                    password: expect.any(String), // hashed, we don't know exact value
                }),
            });
        });

        it("Should throw ValidationError when email format is not correct", async () => {
            const invalidEmail = "this.com";
            const userToBeCreated = {
                name: "Toby",
                email: invalidEmail,
                password: "WeWork441$",
            } as ISignupRequest;

            await expect(
                AuthService.createUser(userToBeCreated)
            ).rejects.toThrow(ValidationError);
            await expect(
                AuthService.createUser(userToBeCreated)
            ).rejects.toThrow("Invalid email format");
        });

        it("Should throw ValidationError when password is not valid", async () => {
            const invalidUser = {
                name: "Toby",
                email: "tobyEmail@mail.com",
                password: "123",
            } as ISignupRequest;

            await expect(AuthService.createUser(invalidUser)).rejects.toThrow(
                ValidationError
            );
            await expect(AuthService.createUser(invalidUser)).rejects.toThrow(
                "Password is not valid, must be at least 8 characters long, must contain alpha numeric characters and at least one uppercase and lowercase character"
            );
        });

        it("Should throw ConflictError when user already exists", async () => {
            const existingUser = {
                id: "existing-uuid",
                email: "existing@mail.com",
                name: "Existing User",
            } as User;
            mockFindUnique.mockResolvedValue(existingUser);

            const userToCreate = {
                name: "New User",
                email: "existing@mail.com",
                password: "ValidPass123!",
            } as ISignupRequest;

            await expect(AuthService.createUser(userToCreate)).rejects.toThrow(
                ConflictError
            );
            await expect(AuthService.createUser(userToCreate)).rejects.toThrow(
                "User with this email already exists"
            );
        });
    });

    describe("generateToken", () => {
        it("Should generate a valid JWT token", () => {
            const payload = {
                userId: "test-user-id",
                email: "test@mail.com",
            };

            const token = AuthService.generateToken(payload);

            expect(token).toBeDefined();
            expect(typeof token).toBe("string");
            // JWT tokens have 3 parts separated by dots
            expect(token.split(".").length).toBe(3);
        });
    });

    describe("verifyToken", () => {
        it("Should return valid: true with payload for a valid token", () => {
            const payload = {
                userId: "test-user-id",
                email: "test@mail.com",
            };
            const token = AuthService.generateToken(payload);

            const result = AuthService.verifyToken(token);

            expect(result.valid).toBe(true);
            if (result.valid) {
                expect(result.payload.userId).toBe(payload.userId);
                expect(result.payload.email).toBe(payload.email);
            }
        });

        it("Should return valid: false for an invalid token", () => {
            const invalidToken = "invalid.token.here";

            const result = AuthService.verifyToken(invalidToken);

            expect(result.valid).toBe(false);
            if (!result.valid) {
                expect(result.error).toBe("Invalid token");
            }
        });

        it("Should return valid: false for a malformed token", () => {
            const malformedToken = "not-even-a-jwt";

            const result = AuthService.verifyToken(malformedToken);

            expect(result.valid).toBe(false);
            if (!result.valid) {
                expect(result.error).toBe("Invalid token");
            }
        });
    });

    describe("login", () => {
        it("Should successfully login and return user without password", async () => {
            const storedPassword = "ValidPass123!";
            const hashedPassword =
                await AuthService.hashPassword(storedPassword);
            const mockUser = {
                id: "user-uuid",
                name: "Test User",
                email: "test@mail.com",
                password: hashedPassword,
                aiEnabled: false,
                createdAt: new Date(),
                defaultCurrency: "MXN",
                language: "en",
                profilePictureUrl: null,
                twoFactorEnabled: false,
                twoFactorSecret: null,
                updatedAt: new Date(),
            } as User;
            mockFindUnique.mockResolvedValue(mockUser);

            const result = await AuthService.login(
                "test@mail.com",
                storedPassword
            );

            expect(result).toBeDefined();
            expect(result).not.toHaveProperty("password");
            expect(result.id).toBe(mockUser.id);
            expect(result.email).toBe(mockUser.email);
            expect(result.name).toBe(mockUser.name);
        });

        it("Should throw AuthenticationError when user does not exist", async () => {
            mockFindUnique.mockResolvedValue(null);

            await expect(
                AuthService.login("nonexistent@mail.com", "anyPassword123!")
            ).rejects.toThrow(AuthenticationError);
            await expect(
                AuthService.login("nonexistent@mail.com", "anyPassword123!")
            ).rejects.toThrow("Invalid email or password");
        });

        it("Should throw AuthenticationError when password is incorrect", async () => {
            const correctPassword = "CorrectPass123!";
            const hashedPassword =
                await AuthService.hashPassword(correctPassword);
            const mockUser = {
                id: "user-uuid",
                name: "Test User",
                email: "test@mail.com",
                password: hashedPassword,
            } as User;
            mockFindUnique.mockResolvedValue(mockUser);

            await expect(
                AuthService.login("test@mail.com", "WrongPassword123!")
            ).rejects.toThrow(AuthenticationError);
            await expect(
                AuthService.login("test@mail.com", "WrongPassword123!")
            ).rejects.toThrow("Invalid email or password");
        });
    });
});
