import type { IFieldError } from "../types/errors.ts";

/**
 * Base class for all custom errors with HTTP status codes
 */
export abstract class AppError extends Error {
    public readonly statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
        this.name = this.constructor.name;
    }
}

export class ValidationError extends AppError {
    public errors: IFieldError[] | undefined; // Not all validation errors should have this

    constructor(message: string, errors?: IFieldError[]) {
        super(message, 400);
        this.errors = errors;
    }
}

export class ConflictError extends AppError {
    constructor(message: string) {
        super(message, 409);
    }
}

export class AuthenticationError extends AppError {
    constructor(message: string) {
        super(message, 401);
    }
}

export class AccountDeactivationError extends AppError {
    constructor(message: string) {
        super(message, 403);
    }
}

export class UserNotFoundError extends AppError {
    constructor(message: string) {
        super(message, 404);
    }
}
