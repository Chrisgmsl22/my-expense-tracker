import type { IUser } from "./auth.ts";

declare global {
    namespace Express {
        interface Request {
            user?: IUser;
            validatedQuery?: unknown;
            validatedParams?: unknown;
        }
    }
}
