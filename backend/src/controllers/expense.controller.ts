import type { NextFunction, Request, Response } from "express";
import { ExpenseService } from "../services/expense/expense.service.ts";
import type { ExpenseResponse, ExpensesResponse } from "../types/expense.ts";

export class ExpenseController {
    public static async createExpense(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            // There is already our auth middleware function which checks if user is authenticated
            const user = req.user;

            const userCreated = await ExpenseService.createExpense(
                user!.id,
                req.body // Zod schema will make sure we are passing it exactly what this endpoint needs
            );

            res.status(201).json({
                success: true,
                message: "Expense created successfully",
                data: { ...userCreated },
            } as ExpenseResponse);
        } catch (error) {
            next(error);
        }
    }

    public static async updateExpense(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const { id } = req.params;
            const userId = req.user!.id;

            const expense = await ExpenseService.getExpenseById(id!, userId); // Can we assume there will always be an ID?, maybe thanks to the zod schemas

            res.status(200).json({
                success: true,
                message: "Expense updated successfully",
                data: expense,
            } as ExpenseResponse);
        } catch (error) {
            next(error);
        }
    }

    public static async getExpenses(
        // Important: Should be all expenses PER USER
        // Do we need this one?
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const userId = req.user!.id;
            const queryParams = req.query;

            const allExpenses = await ExpenseService.getExpenses(
                userId,
                queryParams
            );

            res.status(200).json({
                success: true,
                message: "All expenses retrieved successfully",
                data: allExpenses,
            } as ExpensesResponse);
        } catch (error) {
            next(error);
        }
    }

    public static async getExpenseById(
        _req: Request,
        _res: Response,
        _next: NextFunction
    ): Promise<void> {}

    public static async deleteExpense(
        _req: Request,
        _res: Response,
        _next: NextFunction
    ): Promise<void> {}
}
