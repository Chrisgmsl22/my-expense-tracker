import { type User } from "../generated/prisma/index.js";

export type IUser = Omit<User, "password">;

export interface ISignupRequest {
    name: string;
    email: string;
    password: string;
}
