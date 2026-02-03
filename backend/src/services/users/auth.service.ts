import { compare, hash } from "bcrypt";
import type {
    IJwtPayload,
    ISignupRequest,
    ITokenVerificationResult,
    IUser,
    IUserExistsCheck,
} from "../../types/auth.ts";
import { prisma } from "../../config/database.ts";
import type { Prisma, User } from "../../generated/prisma/index.js";
import jwt, { type SignOptions } from "jsonwebtoken";
import { envC } from "../../config/env.ts";
import {
    AuthenticationError,
    ConflictError,
    ValidationError,
} from "../../utils/errors.ts";
import { normalize } from "../../utils/normalize.ts";
export class AuthService {
    public static async hashPassword(password: string): Promise<string> {
        const saltRounds = 12;

        const hashedPassword = await hash(password, saltRounds);
        return hashedPassword;
    }

    public static async validatePassword(
        givenPassword: string,
        currHash: string
    ): Promise<boolean> {
        return await compare(givenPassword, currHash);
    }

    public static validateEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email.trim());
    }

    public static validatePasswordStrength(password: string): boolean {
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumbers = /\d/.test(password);

        return (
            password.length >= minLength &&
            hasUpperCase &&
            hasLowerCase &&
            hasNumbers
        );
    }

    public static async checkUserConflicts(
        email: string
    ): Promise<IUserExistsCheck> {
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        if (user) {
            return {
                exists: true,
                message: "User with this email already exists",
            };
        } else {
            return {
                exists: false,
            };
        }
    }
    public static async createUser(userData: ISignupRequest): Promise<IUser> {
        const { email, name, password: rawPassword } = userData;
        const normalizedEmail = normalize(email);

        if (!AuthService.validateEmail(normalizedEmail)) {
            throw new ValidationError("Invalid email format");
        }

        if (!AuthService.validatePasswordStrength(rawPassword)) {
            throw new ValidationError(
                "Password is not valid, must be at least 8 characters long, must contain alpha numeric characters and at least one uppercase and lowercase character"
            );
        }
        const conflict = await AuthService.checkUserConflicts(normalizedEmail);
        if (conflict.exists) {
            throw new ConflictError(conflict.message);
        }
        const password = await AuthService.hashPassword(rawPassword);

        const user = {
            name,
            email: normalizedEmail,
            password,
        } as Prisma.UserCreateInput;

        const createdUser = await prisma.user.create({
            data: user,
        });

        const { password: _, ...cleanUser } = createdUser;

        return cleanUser;
    }

    public static generateToken(payload: IJwtPayload): string {
        const options: SignOptions = {
            expiresIn: "1h",
            issuer: "expense-tracker-app",
        };
        // If env var is not configured, it will error out automatically
        const token = jwt.sign(payload, envC.JWT_SECRET, options);

        return token;
    }

    public static verifyToken(token: string): ITokenVerificationResult {
        try {
            const decoded = jwt.verify(token, envC.JWT_SECRET) as IJwtPayload;

            return { valid: true, payload: decoded };
        } catch (error) {
            if (error instanceof jwt.TokenExpiredError) {
                return { valid: false, error: "Token has expired" };
            } else if (error instanceof jwt.JsonWebTokenError) {
                return { valid: false, error: "Invalid token" };
            } else {
                console.error(error);
                return {
                    valid: false,
                    error: `Token verification failed: ${error}`,
                };
            }
        }
    }

    private static async findUserByEmail(email: string): Promise<User | null> {
        return await prisma.user.findUnique({
            where: {
                email,
            },
        });
    }

    public static async login(email: string, password: string): Promise<IUser> {
        // get the user from DB
        const user = await AuthService.findUserByEmail(normalize(email));
        if (!user) {
            throw new AuthenticationError("Invalid email or password");
        }

        // Validate password
        const isPasswordValid = await AuthService.validatePassword(
            password,
            user.password ?? "" //TODO: Make sure this logic is still correct in the future
        );

        // Act based on outcome
        if (!isPasswordValid) {
            throw new AuthenticationError("Invalid email or password");
        }

        const { password: _, ...cleanUser } = user;
        return cleanUser;
    }
}
