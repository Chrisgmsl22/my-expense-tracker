import type { User } from "../generated/prisma/index.js";
import type { IUser } from "../types/auth.ts";

export const stripUserPassword = (user: User): IUser => {
    const { password: _, ...cleanUser } = user;
    return cleanUser;
};
