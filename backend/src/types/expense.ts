import type z from "zod";
import type { Expense } from "../generated/prisma/index.js";
import type { IApiResponse } from "./common.ts";
import type {
    expenseIdParamSchema,
    getExpensesQuerySchema,
} from "../schemas/expense.schema.ts";

export interface ICreateExpenseRequest {
    categoryId: string;
    subcategoryId?: string;
    cardId?: string;
    date: Date;
    description: string;
    amount: number;
    // currency defaults to "MXN" via Prisma schema

    isSharedExpense: boolean;
    sharedWith?: string;
    yourPercentage: number; // 1.0 means 100%
    // actualExpenditure is computed: amount * yourPercentage
    // settlementStatus is computed: isSharedExpense ? "pending" : "n/a"
    // paidAt is set later when marking a shared expense as settled

    isRecurring: boolean;
    recurringFrequency?: string;
    recurringDay?: number;

    merchantName?: string;
    notes?: string;
}

export type ExpenseResponse = IApiResponse<Expense>;
export type ExpensesResponse = IApiResponse<Expense[]>;
export type GetExpensesQuery = z.infer<typeof getExpensesQuerySchema>;
export type ExpenseIdParams = z.infer<typeof expenseIdParamSchema>;
