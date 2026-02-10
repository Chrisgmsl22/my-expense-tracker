import { type User } from "../generated/prisma/index.js";
import type { IApiResponse } from "./common.ts";

export type IUser = Omit<User, "password">;

export interface ISignupRequest {
    name: string;
    email: string;
    password: string;
}

export interface IJwtPayload {
    userId: string;
    email: string;
}

export type IUserExistsCheck =
    | { exists: false } // Discriminated types must be literal (direct True or False val, not boolean)
    | { exists: true; message: string };

export type ITokenVerificationResult =
    | {
          valid: true;
          payload: IJwtPayload;
      }
    | { valid: false; error: string };

export interface IUserPublic {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
}

export interface IAuthResponse extends IApiResponse<IUserPublic> {
    token?: string;
}
