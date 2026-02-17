import type { NextFunction, Request, Response } from "express";
import type z from "zod";

const mockLogError = jest.fn();
const mockParse = jest.fn();

jest.mock("../utils/logger.ts", () => ({
    default: { error: mockLogError },
}));

const mockZodSchema = { parse: mockParse };
import { validateRequest } from "./validateRequest.ts";
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
        };

        mockParse.mockReturnValue({
            name: "John",
            email: "john@mail.com",
            password: "WeWork441$$$",
        });

        const middlewareFunction = validateRequest(
            mockZodSchema as unknown as z.ZodType
        );

        middlewareFunction(
            mockRequest as Request,
            mockResponse as Response,
            mockNext
        );
        expect(mockNext).toHaveBeenCalled();
    });
});
