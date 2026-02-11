import type { NextFunction, Request, Response } from "express";
import logger from "../utils/logger.ts";

export const requestLogger = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const startTime = Date.now();

    // Log once response finishes
    res.on("finish", () => {
        const duration = Date.now() - startTime;
        logger.http(
            `${req.method} ${req.originalUrl} ${res.statusCode} ${duration}ms`
        );
    });

    next();
};
