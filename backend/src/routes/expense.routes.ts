import { Router } from "express";
import { ValidateReq, validateRequest } from "../middleware/validateRequest.ts";
import { authenticate } from "../middleware/authenticate.ts";
import { ExpenseController } from "../controllers/expense.controller.ts";
import {
    createExpenseSchema,
    expenseIdParamSchema,
    getExpensesQuerySchema,
    updateExpenseSchema,
} from "../schemas/expense.schema.ts";

const expenseRoutes = Router();

expenseRoutes.post(
    "/expense/create",
    authenticate,
    validateRequest(createExpenseSchema, ValidateReq.Body),
    ExpenseController.createExpense
);

expenseRoutes.get(
    "/expenses",
    authenticate,
    validateRequest(getExpensesQuerySchema, ValidateReq.Query),
    ExpenseController.getExpenses
);

expenseRoutes.patch(
    "/expense/:id",
    authenticate,
    validateRequest(expenseIdParamSchema, ValidateReq.Params),
    validateRequest(updateExpenseSchema, ValidateReq.Body),
    ExpenseController.updateExpense
);

export default expenseRoutes;
