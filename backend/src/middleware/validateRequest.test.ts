import type { NextFunction, Request, Response } from "express";
import type z from "zod";

const mockLogError = jest.fn();
const mockParse = jest.fn();

jest.mock("../utils/logger.ts", () => ({
    __esModule: true,
    default: { error: mockLogError },
}));

const mockZodSchema = { parse: mockParse };
import { validateRequest } from "./validateRequest.ts";
import { ValidationError } from "../utils/errors.utils.ts";
import { ZodError } from "zod";

describe("validateRequest middleware", () => {
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    let mockNext: NextFunction;

    beforeEach(() => {
        jest.clearAllMocks();

        mockRequest = {
            headers: {},
            body: {},
        };
        mockResponse = {};
        mockNext = jest.fn();
    });

    it("Should call next if validation does not find issues", () => {
        mockRequest.body = {
            name: "John",
            email: "john@mail.com",
            password: "WeWork441$$$",
            unusedField: true,
        };
        const cleanFields = {
            name: "John",
            email: "john@mail.com",
            password: "WeWork441$$$",
        };

        mockParse.mockReturnValue(cleanFields);

        // Get middleware from factory first
        const middlewareFunction = validateRequest(
            mockZodSchema as unknown as z.ZodType
        );

        middlewareFunction(
            mockRequest as Request,
            mockResponse as Response,
            mockNext
        );
        expect(mockParse).toHaveBeenCalledWith({
            name: "John",
            email: "john@mail.com",
            password: "WeWork441$$$",
            unusedField: true,
        });
        expect(mockRequest.body).toEqual(cleanFields);
        expect(mockNext).toHaveBeenCalledWith();
    });

    it("Should call next with ValidationError when ZodError is thrown", () => {
        mockRequest.body = { email: "not-an-email" };

        const zodError = new ZodError([
            {
                code: "invalid_type",
                expected: "string",
                path: ["name"],
                message: "Required",
            },
            {
                code: "invalid_format",
                format: "email",
                path: ["email"],
                message: "Invalid email",
            },
        ]);

        mockParse.mockImplementation(() => {
            throw zodError;
        });

        const middlewareFunction = validateRequest(
            mockZodSchema as unknown as z.ZodType
        );

        middlewareFunction(
            mockRequest as Request,
            mockResponse as Response,
            mockNext
        );

        expect(mockLogError).toHaveBeenCalledWith("Validate request error");
        expect(mockNext).toHaveBeenCalledWith(expect.any(ValidationError));

        const passedError = (mockNext as jest.Mock).mock.calls[0][0];
        expect(passedError.message).toBe("Validation failed");
        expect(passedError.statusCode).toBe(400);
        expect(passedError.errors).toEqual([
            { field: "name", message: "Required" },
            { field: "email", message: "Invalid email" },
        ]);
    });

    it("Should handle ZodError with empty path gracefully", () => {
        const zodError = new ZodError([
            {
                code: "custom",
                path: [],
                message: "Something went wrong",
            },
        ]);

        mockParse.mockImplementation(() => {
            throw zodError;
        });

        const middlewareFunction = validateRequest(
            mockZodSchema as unknown as z.ZodType
        );

        middlewareFunction(
            mockRequest as Request,
            mockResponse as Response,
            mockNext
        );

        const passedError = (mockNext as jest.Mock).mock.calls[0][0];
        expect(passedError.errors).toEqual([
            { field: "", message: "Something went wrong" },
        ]);
    });

    it("Should forward non-Zod errors directly to next", () => {
        const genericError = new Error("Something unexpected");

        mockParse.mockImplementation(() => {
            throw genericError;
        });

        const middlewareFunction = validateRequest(
            mockZodSchema as unknown as z.ZodType
        );

        middlewareFunction(
            mockRequest as Request,
            mockResponse as Response,
            mockNext
        );

        expect(mockLogError).toHaveBeenCalledWith("Validate request error");
        expect(mockNext).toHaveBeenCalledWith(genericError);
    });
});
