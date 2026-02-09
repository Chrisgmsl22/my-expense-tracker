import type { NextFunction, Request, Response } from "express";
import type { User } from "../generated/prisma/index.js";
import type { ITokenVerificationResult, IUser } from "../types/auth.ts";

const mockVerifyToken = jest.fn();
const mockFindUserById = jest.fn();
const mockStripUserPassword = jest.fn();
jest.mock("../services/users/auth.service.ts", () => ({
    AuthService: {
        verifyToken: mockVerifyToken,
        findUserById: mockFindUserById,
    },
}));

jest.mock("../utils/user.utils.ts", () => ({
    stripUserPassword: mockStripUserPassword,
}));
import { authenticate } from "./authenticate.ts";
import {
    AuthenticationError,
    UserNotFoundError,
} from "../utils/errors.utils.ts";

describe("authenticate middleware", () => {
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    let mockNext: NextFunction;

    beforeEach(() => {
        jest.clearAllMocks();

        mockRequest = {
            headers: {},
        };

        mockResponse = {};
        mockNext = jest.fn();
    });

    describe("Token validation", () => {
        it("Should successdully authenticate with valid token", async () => {
            const userFromDB = {
                id: "user-id",
                name: "John",
                email: "johnMail@mail.com",
                password: "hashed-password",
                // ... rest
            } as User;

            const cleanUser = {
                id: "user-id",
                name: "John",
                email: "johnMail@mail.com",
            } as IUser;

            const verifiedToken = {
                valid: true,
                payload: {
                    userId: "user-id",
                    email: "johnMail@mail.com",
                },
            } as ITokenVerificationResult;

            mockRequest.headers = {
                authorization: "Bearer this-is-a-valid-token",
            };
            mockVerifyToken.mockReturnValue(verifiedToken);
            mockFindUserById.mockResolvedValue(userFromDB);
            mockStripUserPassword.mockReturnValue(cleanUser);

            await authenticate(
                mockRequest as Request,
                mockResponse as Response,
                mockNext
            );

            expect(mockVerifyToken).toHaveBeenCalledWith(
                "this-is-a-valid-token"
            );
            expect(mockFindUserById).toHaveBeenCalled();
            expect(mockFindUserById).toHaveBeenCalledWith("user-id");
            expect(mockRequest.user).toBeDefined();
            expect(mockRequest.user).toMatchObject(cleanUser);

            expect(mockStripUserPassword).toHaveBeenCalledWith(userFromDB);
            expect(mockRequest.user).not.toHaveProperty("password");
            expect(mockNext).toHaveBeenCalled();
        });

        it("Should throw Error when token is not in header", async () => {
            await expect(
                authenticate(
                    mockRequest as Request,
                    mockResponse as Response,
                    mockNext
                )
            ).rejects.toThrow(AuthenticationError);

            await expect(
                authenticate(
                    mockRequest as Request,
                    mockResponse as Response,
                    mockNext
                )
            ).rejects.toThrow("Could not validate token");
            expect(mockNext).not.toHaveBeenCalled();
        });

        it("Should throw Error when token does not start with Bearer", async () => {
            mockRequest.headers = {
                authorization: "asdfghjkl",
            };
            await expect(
                authenticate(
                    mockRequest as Request,
                    mockResponse as Response,
                    mockNext
                )
            ).rejects.toThrow(AuthenticationError);

            await expect(
                authenticate(
                    mockRequest as Request,
                    mockResponse as Response,
                    mockNext
                )
            ).rejects.toThrow("Could not validate token");
            expect(mockNext).not.toHaveBeenCalled();
        });

        it("Should throw AuthenticationError for expired token", async () => {
            mockRequest.headers = {
                authorization: "Bearer invalid-token-here",
            };
            const verifyResultObj = {
                valid: false,
                error: "Token has expired",
            } as ITokenVerificationResult;

            mockVerifyToken.mockReturnValue(verifyResultObj);

            await expect(
                authenticate(
                    mockRequest as Request,
                    mockResponse as Response,
                    mockNext
                )
            ).rejects.toThrow(AuthenticationError);

            await expect(
                authenticate(
                    mockRequest as Request,
                    mockResponse as Response,
                    mockNext
                )
            ).rejects.toThrow("Token has expired");
            expect(mockNext).not.toHaveBeenCalled();
        });

        it("Should throw AuthenticationError for invalid token", async () => {
            mockRequest.headers = {
                authorization: "Bearer invalid-token-here",
            };
            const verifyResultObj = {
                valid: false,
                error: "Invalid token",
            } as ITokenVerificationResult;

            mockVerifyToken.mockReturnValue(verifyResultObj);

            await expect(
                authenticate(
                    mockRequest as Request,
                    mockResponse as Response,
                    mockNext
                )
            ).rejects.toThrow(AuthenticationError);

            await expect(
                authenticate(
                    mockRequest as Request,
                    mockResponse as Response,
                    mockNext
                )
            ).rejects.toThrow("Invalid token");
            expect(mockNext).not.toHaveBeenCalled();
        });

        it("Should throw AuthenticationError if user if not found on DB", async () => {
            mockRequest.headers = {
                authorization: "Bearer valid-token-here",
            };
            const verifyResultObj = {
                valid: true,
                payload: { userId: "id-does-not-exist" },
            } as ITokenVerificationResult;

            mockVerifyToken.mockReturnValue(verifyResultObj);
            mockFindUserById.mockResolvedValue(null);

            await expect(
                authenticate(
                    mockRequest as Request,
                    mockResponse as Response,
                    mockNext
                )
            ).rejects.toThrow(UserNotFoundError);

            await expect(
                authenticate(
                    mockRequest as Request,
                    mockResponse as Response,
                    mockNext
                )
            ).rejects.toThrow("User not found");
            expect(mockNext).not.toHaveBeenCalled();
        });
    });
});
