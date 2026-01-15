/**
 * Hash passwords
 * compare passwords
 * Validate email format
 * check if user exists
 * create a new user
 */

import { hash } from "bcrypt";
import type { ISignupRequest, IUser } from "../../types/auth.ts";
import { prisma } from "../../config/database.ts";
import type { Prisma } from "../../generated/prisma/index.js";

export class AuthService {
    private static async hashPassword(password: string): Promise<string> {
        const saltRounds = 12;

        const hashedPassword = await hash(password, saltRounds);
        return hashedPassword;
    }
    public static async createUser(userData: ISignupRequest): Promise<IUser> {
        const { email, name, password: rawPassword } = userData;
        const password = await AuthService.hashPassword(rawPassword);

        const user = {
            name,
            email,
            password,
        } as Prisma.UserCreateInput;

        const createdUser = await prisma.user.create({
            data: user,
        });

        const { password: _, ...rest } = createdUser;

        return rest;
    }
}
