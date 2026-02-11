import { createLogger, format, transports } from "winston";
import { envC } from "../config/env.ts";

const { combine, timestamp, printf, colorize, json } = format;

const isProduction = envC.isProduction;

const devFormat = combine(
    colorize(),
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    printf(({ level, message, timestamp }) => {
        return `${timestamp} [${level}]: ${message}`;
    })
);

const prodFormat = combine(timestamp(), json());

const logger = createLogger({
    level: isProduction ? "info" : "debug",
    format: isProduction ? prodFormat : devFormat,
    transports: [
        // Console transport (always)
        new transports.Console(),

        // File transports (production or if you want persistent logs)
        new transports.File({ filename: "logs/error.log", level: "error" }),
        new transports.File({ filename: "logs/combined.log" }),
    ],
});

export default logger;

/**
 * Default levels:
 * |Level|	|When to use                                       |
    error	Exceptions, failures
    warn	Deprecations, potential issues
    info	General app events (server started, user logged in)
    http	HTTP request logging
    debug	Detailed debugging info (dev only)
 */
