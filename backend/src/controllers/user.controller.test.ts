import type { NextFunction, Request, Response } from "express";
import type { IUser } from "../types/auth.ts";

const mockCreateUser = jest.fn();
const mockLogin = jest.fn();
const mockGenerateToken = jest.fn();

jest.mock("../services/users/auth.service.ts", () => ({
    AuthService: {
        createUser: mockCreateUser,
        login: mockLogin,
        generateToken: mockGenerateToken,
    },
}));

import { UserController } from "./user.controller.ts";
import { ValidationError } from "../utils/errors.utils.ts";

describe("UserController", () => {
    let mockReq: Partial<Request>;
    let mockRes: Partial<Response>;
    let mockNext: NextFunction;

    let jsonMock: jest.Mock;
    let statusMock: jest.Mock;

    beforeEach(() => {
        jest.clearAllMocks();

        mockReq = {};
        jsonMock = jest.fn();
        statusMock = jest.fn().mockReturnValue({ json: jsonMock });

        mockRes = {
            status: statusMock,
            json: jsonMock,
        };

        mockNext = jest.fn();
    });

    describe("register", () => {
        it("Should create user and return 201", async () => {
            const now = new Date();
            const mockUser = {
                id: "123",
                name: "John",
                email: "john11@mail.com",
                createdAt: now,
            } as IUser;
            const mockToken = "jwt-token-here";

            mockCreateUser.mockResolvedValue(mockUser);
            mockGenerateToken.mockReturnValue(mockToken);

            mockReq.body = {
                name: "John",
                email: "john11@mail.com",
                password: "WeWork441$$$",
            };

            await UserController.register(
                mockReq as Request,
                mockRes as Response,
                mockNext
            );

            expect(mockCreateUser).toHaveBeenCalledWith(mockReq.body);
            expect(statusMock).toHaveBeenCalledWith(201);
            expect(jsonMock).toHaveBeenCalledWith({
                success: true,
                message: "User registered successfully",
                data: {
                    id: "123",
                    name: "John",
                    email: "john11@mail.com",
                    createdAt: now,
                },
                token: "jwt-token-here",
            });
        });

        it("Should return 400 when email is missing from request", async () => {
            mockReq.body = {
                name: "John",
                // email: is missing from req body
                password: "WeWork441$$$",
            };

            await UserController.register(
                mockReq as Request,
                mockRes as Response,
                mockNext
            );

            expect(statusMock).toHaveBeenCalledWith(400);
            expect(jsonMock).toHaveBeenCalledWith({
                success: false,
                message:
                    "name, email and password are required, and must be strings",
            });
            expect(mockCreateUser).not.toHaveBeenCalled();
        });

        it("Should return 400 when email is not a valid type", async () => {
            mockReq.body = {
                name: "John",
                email: 333,
                password: "WeWork441$$$",
            };

            await UserController.register(
                mockReq as Request,
                mockRes as Response,
                mockNext
            );

            expect(statusMock).toHaveBeenCalledWith(400);
            expect(jsonMock).toHaveBeenCalledWith({
                success: false,
                message:
                    "name, email and password are required, and must be strings",
            });
            expect(mockCreateUser).not.toHaveBeenCalled();
        });

        it("Should call next() when service throws any Error on register", async () => {
            const serviceLayerErr = new ValidationError("Invalid email format");
            mockCreateUser.mockRejectedValue(serviceLayerErr);

            mockReq.body = {
                name: "John",
                email: "badmail.com",
                password: "WeWork441$$$",
            };

            await UserController.register(
                mockReq as Request,
                mockRes as Response,
                mockNext
            );

            expect(statusMock).not.toHaveBeenCalled();
            expect(mockNext).toHaveBeenCalled();
            expect(mockNext).toHaveBeenCalledWith(serviceLayerErr);
        });
    });

    describe("login", () => {
        it("Should login user and return 200", async () => {
            const now = new Date();
            const mockUser = {
                id: "123",
                name: "John",
                email: "john11@mail.com",
                createdAt: now,
            } as IUser;
            const mockToken = "jwt-token-here";

            mockLogin.mockResolvedValue(mockUser);
            mockGenerateToken.mockReturnValue(mockToken);

            mockReq.body = {
                email: "john11@mail.com",
                password: "WeWork441$$$",
            };

            await UserController.login(
                mockReq as Request,
                mockRes as Response,
                mockNext
            );

            expect(mockLogin).toHaveBeenCalledWith(
                mockReq.body.email,
                mockReq.body.password
            );
            expect(statusMock).toHaveBeenCalledWith(200);
            expect(jsonMock).toHaveBeenCalledWith({
                success: true,
                message: "User logged in successfully",
                data: {
                    id: "123",
                    name: "John",
                    email: "john11@mail.com",
                    createdAt: now,
                },
                token: "jwt-token-here",
            });
        });

        it("Should return 400 when email is missing from request", async () => {
            mockReq.body = {
                password: "WeWork441$$$",
            };

            await UserController.login(
                mockReq as Request,
                mockRes as Response,
                mockNext
            );

            expect(statusMock).toHaveBeenCalledWith(400);
            expect(jsonMock).toHaveBeenCalledWith({
                success: false,
                message: "email and password are required, and must be strings",
            });
            expect(mockLogin).not.toHaveBeenCalled();
        });

        it("Should return 400 when password is missing from request", async () => {
            mockReq.body = {
                email: "john@mail.com",
            };

            await UserController.login(
                mockReq as Request,
                mockRes as Response,
                mockNext
            );

            expect(statusMock).toHaveBeenCalledWith(400);
            expect(jsonMock).toHaveBeenCalledWith({
                success: false,
                message: "email and password are required, and must be strings",
            });
            expect(mockLogin).not.toHaveBeenCalled();
        });

        it("Should return 400 when email is not a valid type", async () => {
            mockReq.body = {
                email: 12345,
                password: "WeWork441$$$",
            };

            await UserController.login(
                mockReq as Request,
                mockRes as Response,
                mockNext
            );

            expect(statusMock).toHaveBeenCalledWith(400);
            expect(jsonMock).toHaveBeenCalledWith({
                success: false,
                message: "email and password are required, and must be strings",
            });
            expect(mockLogin).not.toHaveBeenCalled();
        });

        it("Should call next() when service throws an error", async () => {
            const serviceLayerErr = new ValidationError("Invalid email format");
            mockLogin.mockRejectedValue(serviceLayerErr);

            mockReq.body = {
                email: "badmail.com",
                password: "WeWork441$$$",
            };

            await UserController.login(
                mockReq as Request,
                mockRes as Response,
                mockNext
            );

            expect(statusMock).not.toHaveBeenCalled();
            expect(mockNext).toHaveBeenCalled();
            expect(mockNext).toHaveBeenCalledWith(serviceLayerErr);
        });
    });
});
