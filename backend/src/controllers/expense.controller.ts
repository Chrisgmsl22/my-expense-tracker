import type { NextFunction, Request, Response } from "express";
import { ExpenseService } from "../services/expense/expense.service.ts";
import type {
    ExpenseIdParams,
    ExpenseResponse,
    ExpensesResponse,
    GetExpensesQuery,
} from "../types/expense.ts";

export class ExpenseController {
    public static async createExpense(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const user = req.user;

            const userCreated = await ExpenseService.createExpense(
                user!.id, //todo: Fix in the future
                req.body // Zod schema will make sure we are passing it exactly what this endpoint needs
            );

            res.status(201).json({
                success: true,
                message: "Expense created successfully",
                data: userCreated,
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
            const { id } = req.validatedParams as ExpenseIdParams;
            const userId = req.user!.id;

            const expense = await ExpenseService.updateExpense(
                id,
                userId,
                req.body
            );

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
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const userId = req.user!.id;
            const queryParams = req.validatedQuery as GetExpensesQuery; // validated query should be used;

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
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const userId = req.user!.id;
            const { id } = req.validatedParams as ExpenseIdParams;
            const expense = await ExpenseService.getExpenseById(id, userId);

            res.status(200).json({
                success: true,
                message: "Expense retrieved successfully",
                data: expense,
            } as ExpenseResponse);
        } catch (error) {
            next(error);
        }
    }

    public static async deleteExpense(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const userId = req.user!.id;
            const { id } = req.validatedParams as ExpenseIdParams;
            await ExpenseService.deleteExpense(id, userId);

            res.sendStatus(204);
        } catch (error) {
            next(error);
        }
    }
}
