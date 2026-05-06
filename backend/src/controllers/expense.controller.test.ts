import type { NextFunction, Request, Response } from "express";
import type { Expense } from "../generated/prisma/index.js";
import type { IUser } from "../types/auth.ts";

const mockCreateExpense = jest.fn();
const mockGetExpenses = jest.fn();
const mockGetExpenseById = jest.fn();
const mockUpdateExpense = jest.fn();
const mockDeleteExpense = jest.fn();

jest.mock("../services/expense/expense.service.ts", () => ({
    ExpenseService: {
        createExpense: mockCreateExpense,
        getExpenses: mockGetExpenses,
        getExpenseById: mockGetExpenseById,
        updateExpense: mockUpdateExpense,
        deleteExpense: mockDeleteExpense,
    },
}));

import { ExpenseController } from "./expense.controller.ts";
import { NotFoundError, ValidationError } from "../utils/errors.utils.ts";

describe("ExpenseController", () => {
    let mockReq: Partial<Request>;
    let mockRes: Partial<Response>;
    let mockNext: NextFunction;

    let jsonMock: jest.Mock;
    let statusMock: jest.Mock;
    let sendStatusMock: jest.Mock;

    const mockUserId = "user-123";
    const mockExpenseId = "expense-456";

    const mockExpense = {
        id: mockExpenseId,
        userId: mockUserId,
        categoryId: "cat-789",
        subcategoryId: null,
        cardId: null,
        date: new Date("2026-04-01"),
        description: "Weekly groceries",
        amount: 1200,
        currency: "MXN",
        isShared: false,
        sharedWith: null,
        yourPercentage: 1,
        actualExpenditure: 1200,
        settlementStatus: "n/a",
        paidAt: null,
        isRecurring: false,
        recurringFrequency: null,
        recurringDay: null,
        merchantName: null,
        notes: null,
        createdAt: new Date(),
        updatedAt: new Date(),
    } as unknown as Expense;

    const errorScenarios = [
        {
            label: "ValidationError",
            error: new ValidationError("Validation failed"),
        },
        {
            label: "NotFoundError",
            error: new NotFoundError("Resource not found"),
        },
        {
            label: "generic Error",
            error: new Error("DB connection failed"),
        },
    ];

    beforeEach(() => {
        jest.clearAllMocks();

        jsonMock = jest.fn();
        statusMock = jest.fn().mockReturnValue({ json: jsonMock });
        sendStatusMock = jest.fn();

        mockReq = {
            user: { id: mockUserId } as IUser,
        };

        mockRes = {
            status: statusMock,
            json: jsonMock,
            sendStatus: sendStatusMock,
        };

        mockNext = jest.fn();
    });

    describe("createExpense", () => {
        const validBody = {
            categoryId: "cat-789",
            date: new Date("2026-04-01"),
            description: "Weekly groceries",
            amount: 1200,
            isRecurring: false,
            yourPercentage: 1,
        };

        it("Should create expense and return 201", async () => {
            mockCreateExpense.mockResolvedValue(mockExpense);
            mockReq.body = validBody;

            await ExpenseController.createExpense(
                mockReq as Request,
                mockRes as Response,
                mockNext
            );

            expect(mockCreateExpense).toHaveBeenCalledWith(
                mockUserId,
                validBody
            );
            expect(statusMock).toHaveBeenCalledWith(201);
            expect(jsonMock).toHaveBeenCalledWith({
                success: true,
                message: "Expense created successfully",
                data: mockExpense,
            });
        });

        it.each(errorScenarios)(
            "Should call next() with $label when service throws",
            async ({ error }) => {
                mockCreateExpense.mockRejectedValue(error);
                mockReq.body = validBody;

                await ExpenseController.createExpense(
                    mockReq as Request,
                    mockRes as Response,
                    mockNext
                );

                expect(statusMock).not.toHaveBeenCalled();
                expect(mockNext).toHaveBeenCalledWith(
                    expect.objectContaining({ message: error.message })
                );
            }
        );
    });

    describe("getExpenses", () => {
        it("Should return all expenses with 200", async () => {
            const mockExpenses = [mockExpense];
            mockGetExpenses.mockResolvedValue(mockExpenses);

            mockReq.validatedQuery = {};

            await ExpenseController.getExpenses(
                mockReq as Request,
                mockRes as Response,
                mockNext
            );

            expect(mockGetExpenses).toHaveBeenCalledWith(mockUserId, {});
            expect(statusMock).toHaveBeenCalledWith(200);
            expect(jsonMock).toHaveBeenCalledWith({
                success: true,
                message: "All expenses retrieved successfully",
                data: mockExpenses,
            });
        });

        it("Should pass validatedQuery filters to the service", async () => {
            const mockExpenses = [mockExpense];
            mockGetExpenses.mockResolvedValue(mockExpenses);

            const filters = {
                dateFrom: new Date("2026-01-01"),
                dateTo: new Date("2026-04-30"),
                categoryId: "cat-789",
                cardId: "card-001",
            };
            mockReq.validatedQuery = filters;

            await ExpenseController.getExpenses(
                mockReq as Request,
                mockRes as Response,
                mockNext
            );

            expect(mockGetExpenses).toHaveBeenCalledWith(mockUserId, filters);
            expect(statusMock).toHaveBeenCalledWith(200);
        });

        it.each(errorScenarios)(
            "Should call next() with $label when service throws",
            async ({ error }) => {
                mockGetExpenses.mockRejectedValue(error);
                mockReq.validatedQuery = {};

                await ExpenseController.getExpenses(
                    mockReq as Request,
                    mockRes as Response,
                    mockNext
                );

                expect(statusMock).not.toHaveBeenCalled();
                expect(mockNext).toHaveBeenCalledWith(
                    expect.objectContaining({ message: error.message })
                );
            }
        );
    });

    describe("getExpenseById", () => {
        it("Should return single expense with 200", async () => {
            mockGetExpenseById.mockResolvedValue(mockExpense);

            mockReq.validatedParams = { id: mockExpenseId };

            await ExpenseController.getExpenseById(
                mockReq as Request,
                mockRes as Response,
                mockNext
            );

            expect(mockGetExpenseById).toHaveBeenCalledWith(
                mockExpenseId,
                mockUserId
            );
            expect(statusMock).toHaveBeenCalledWith(200);
            expect(jsonMock).toHaveBeenCalledWith({
                success: true,
                message: "Expense retrieved successfully",
                data: mockExpense,
            });
        });

        it.each(errorScenarios)(
            "Should call next() with $label when service throws",
            async ({ error }) => {
                mockGetExpenseById.mockRejectedValue(error);
                mockReq.validatedParams = { id: mockExpenseId };

                await ExpenseController.getExpenseById(
                    mockReq as Request,
                    mockRes as Response,
                    mockNext
                );

                expect(statusMock).not.toHaveBeenCalled();
                expect(mockNext).toHaveBeenCalledWith(
                    expect.objectContaining({ message: error.message })
                );
            }
        );
    });

    describe("updateExpense", () => {
        it("Should update expense and return 200", async () => {
            const updatedExpense = { ...mockExpense, description: "Updated" };
            mockUpdateExpense.mockResolvedValue(updatedExpense);

            mockReq.validatedParams = { id: mockExpenseId };
            mockReq.body = { description: "Updated" };

            await ExpenseController.updateExpense(
                mockReq as Request,
                mockRes as Response,
                mockNext
            );

            expect(mockUpdateExpense).toHaveBeenCalledWith(
                mockExpenseId,
                mockUserId,
                mockReq.body
            );
            expect(statusMock).toHaveBeenCalledWith(200);
            expect(jsonMock).toHaveBeenCalledWith({
                success: true,
                message: "Expense updated successfully",
                data: updatedExpense,
            });
        });

        it.each(errorScenarios)(
            "Should call next() with $label when service throws",
            async ({ error }) => {
                mockUpdateExpense.mockRejectedValue(error);
                mockReq.validatedParams = { id: mockExpenseId };
                mockReq.body = { description: "Updated" };

                await ExpenseController.updateExpense(
                    mockReq as Request,
                    mockRes as Response,
                    mockNext
                );

                expect(statusMock).not.toHaveBeenCalled();
                expect(mockNext).toHaveBeenCalledWith(
                    expect.objectContaining({ message: error.message })
                );
            }
        );
    });

    describe("deleteExpense", () => {
        it("Should delete expense and return 204", async () => {
            mockDeleteExpense.mockResolvedValue(undefined);

            mockReq.validatedParams = { id: mockExpenseId };

            await ExpenseController.deleteExpense(
                mockReq as Request,
                mockRes as Response,
                mockNext
            );

            expect(mockDeleteExpense).toHaveBeenCalledWith(
                mockExpenseId,
                mockUserId
            );
            expect(sendStatusMock).toHaveBeenCalledWith(204);
            expect(jsonMock).not.toHaveBeenCalled();
        });

        it.each(errorScenarios)(
            "Should call next() with $label when service throws",
            async ({ error }) => {
                mockDeleteExpense.mockRejectedValue(error);
                mockReq.validatedParams = { id: mockExpenseId };

                await ExpenseController.deleteExpense(
                    mockReq as Request,
                    mockRes as Response,
                    mockNext
                );

                expect(sendStatusMock).not.toHaveBeenCalled();
                expect(mockNext).toHaveBeenCalledWith(
                    expect.objectContaining({ message: error.message })
                );
            }
        );
    });
});
