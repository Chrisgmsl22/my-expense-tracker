import type { IFieldError } from "./errors.ts";

// Generic response
export interface IApiResponse<T = unknown> {
    success: boolean;
    data?: T;
    message?: string;
    errors?: IFieldError[];
    cached?: boolean; // later for redis
}
