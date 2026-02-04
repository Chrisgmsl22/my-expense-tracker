import type { NextFunction, Request, Response } from "express";
import type { IApiResponse } from "../types/common.ts";
import { AuthService } from "../services/users/auth.service.ts";
import type { IAuthResponse } from "../types/auth.ts";

export class UserController {
    /**
     *
     * @param req
     * @param res
     * @param next
     */
    public static async register(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            // Extract data
            const { name, email, password } = req.body;
            const isAtLeastOnePropMissing = !name || !email || !password;
            const propTypesNotValid =
                typeof name != "string" ||
                typeof email != "string" ||
                typeof password != "string";
            // Validate
            if (isAtLeastOnePropMissing || propTypesNotValid) {
                res.status(400).json({
                    success: false,
                    message:
                        "name, email and password are required, and must be strings",
                } as IApiResponse);
                return;
            }

            // Call service
            const userCreated = await AuthService.createUser({
                name,
                email,
                password,
            });
            const token = AuthService.generateToken({
                email: userCreated.email,
                userId: userCreated.id,
            });

            // Return a response
            res.status(201).json({
                success: true,
                message: "User registered successfully",
                data: {
                    id: userCreated.id,
                    name: userCreated.name,
                    email: userCreated.email,
                    createdAt: userCreated.createdAt,
                },
                token,
            } as IAuthResponse);
        } catch (error) {
            next(error);
        }
    }

    public static async login(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const { name, email, password } = req.body;
            const isAtLeastOnePropMissing = !name || !email || !password;
            const propTypesNotValid =
                typeof name != "string" ||
                typeof email != "string" ||
                typeof password != "string";
            // Validate
            if (isAtLeastOnePropMissing || propTypesNotValid) {
                res.status(400).json({
                    success: false,
                    message:
                        "name, email and password are required, and must be strings",
                } as IApiResponse);
                return;
            }

            const validatedUser = await AuthService.login(email, password);
            const userJwt = AuthService.generateToken({
                email: validatedUser.email,
                userId: validatedUser.id,
            });

            res.status(200).json({
                success: true,
                message: "User logged in successfully",
                data: {
                    id: validatedUser.id,
                    name: validatedUser.name,
                    email: validatedUser.email,
                    createdAt: validatedUser.createdAt,
                },
                token: userJwt,
            } as IAuthResponse);
        } catch (error) {
            next(error);
        }
    }
}
