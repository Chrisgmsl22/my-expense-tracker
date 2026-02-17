import type { NextFunction, Request, Response } from "express";
import type z from "zod";
import logger from "../utils/logger.ts";
import { ZodError } from "zod";
import { ValidationError } from "../utils/errors.utils.ts";
import type { IFieldError } from "../types/errors.ts";

/**
 * ExpressJS does not allow middleware functions with more than 3 params (req, res, next), so we
 * need to use a higher-order function, in a previous project I used a factory pattern, which is a function that takes as many params as we need and only returns a middleware function (so this middleware can use my higher arguments for evaluation)
 *
 */
//TODO: Keep in mind we will extend this to also validate request params
export const validateRequest = (zodSchema: z.ZodType) => {
    return (req: Request, _res: Response, next: NextFunction) => {
        try {
            const parsedData = zodSchema.parse(req.body);
            // If no issues are found, then we could parse back to the req obj
            req.body = parsedData;

            next();
        } catch (error) {
            logger.error("Validate request error");
            if (error instanceof ZodError) {
                const allIssues = error.issues;
                const fieldErrors: IFieldError[] = allIssues.map((issue) => {
                    const fieldName = issue.path[0]?.toString() || "";
                    const message = issue.message;

                    return {
                        field: fieldName,
                        message,
                    };
                });

                next(new ValidationError("Validation failed", fieldErrors));
            } else {
                next(error);
            }
        }
    };
};
