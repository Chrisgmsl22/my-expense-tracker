import { Router } from "express";
import { ValidateReq, validateRequest } from "../middleware/validateRequest.ts";
import { ExpenseController } from "../controllers/expense.controller.ts";
import {
    createExpenseSchema,
    getExpensesQuerySchema,
} from "../schemas/expense.schema.ts";

const expenseRoutes = Router();

expenseRoutes.post(
    "/expense/create",
    validateRequest(createExpenseSchema, ValidateReq.Body),
    ExpenseController.createExpense
);

expenseRoutes.get(
    "/expenses:userId",
    validateRequest(getExpensesQuerySchema, ValidateReq.Query),
    ExpenseController.getExpenses
);
