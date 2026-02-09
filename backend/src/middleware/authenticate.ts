import type { NextFunction, Request, Response } from "express";
import {
    AuthenticationError,
    UserNotFoundError,
} from "../utils/errors.utils.ts";
import { AuthService } from "../services/users/auth.service.ts";
import { stripUserPassword } from "../utils/user.utils.ts";
import type { IUser } from "../types/auth.ts";

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Express {
        interface Request {
            user?: IUser;
        }
    }
}

export const authenticate = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // The goal for an auth middleware would be to get the token from the body
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new AuthenticationError("Could not validate token");
    }
    // Validate token

    const token = authHeader.substring(7);
    const verifyResult = AuthService.verifyToken(token);
    if (verifyResult.valid) {
        const { userId } = verifyResult.payload;
        const user = await AuthService.findUserById(userId);

        if (user) {
            req.user = stripUserPassword(user);
        } else {
            throw new UserNotFoundError("User not found");
        }
    } else {
        throw new AuthenticationError(verifyResult.error);
    }

    next(); // Continue request process
};
