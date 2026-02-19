/**
 *
 * @param err Error code
 * @param _req Request obj, not used
 * @param res Response, will call status and json
 * @param _next Not needed
 *
 * If your middleware function has exactly 4 parameters, Express treats it as an error handler. If it has 3 (or fewer), it's a regular middleware.
 */

import type { NextFunction, Request, Response } from "express";
import { AppError, ValidationError } from "../utils/errors.utils.ts";
import logger from "../utils/logger.ts";
import type { IApiResponse } from "../types/common.ts";

//? In order to have an actual next() middleware error handler, we need to define this function with EXACTLY 4 params
// error, request, response and next()
export const errorHandler = (
    err: Error,
    _req: Request,
    res: Response,
    _next: NextFunction
) => {
    // Handle custom application errors
    if (err instanceof AppError) {
        if (err instanceof ValidationError && err.errors) {
            res.status(err.statusCode).json({
                success: false,
                message: err.message,
                errors: err.errors,
            } as IApiResponse);
        } else {
            res.status(err.statusCode).json({
                success: false,
                message: err.message,
            } as IApiResponse);
        }
    } else {
        if (process.env.NODE_ENV !== "production") {
            // Only for debugging purposes
            logger.error("❌ Error Handler Caught:");
            logger.error(`Message: ${err.message}`);
            logger.error(`Stack: ${err.stack}`);
            logger.error(`Type: ${err.constructor.name}`);
        }

        // Generic server error for unknown errors
        res.status(500).json({
            success: false,
            message: "Internal server error",
        } as IApiResponse);
    }
};
