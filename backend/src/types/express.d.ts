import type { IUser } from "./auth.ts";

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Express {
        interface Request {
            user?: IUser;
            validatedQuery?: unknown;
            validatedParams?: unknown;
        }
    }
}
