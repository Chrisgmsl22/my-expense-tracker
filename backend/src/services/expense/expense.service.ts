import type { Expense } from "../../generated/prisma/index.js";
import type { ICreateExpenseRequest } from "../../types/expense.ts";
import { prisma } from "../../config/database.ts";
import { NotFoundError, ValidationError } from "../../utils/errors.utils.ts";

export class ExpenseService {
    /**
     * Validates that a category exists and is accessible to the user.
     * A category is accessible if it's a system category OR owned by the user.
     */
    private static async validateCategory(
        categoryId: string,
        userId: string
    ): Promise<void> {
        const category = await prisma.category.findUnique({
            where: { id: categoryId },
        });

        if (!category) {
            throw new NotFoundError("Category not found");
        }

        if (!category.isSystemCategory && category.userId !== userId) {
            throw new ValidationError("Category does not belong to this user");
        }
    }

    /**
     * Validates that a subcategory exists and belongs to the given category.
     */
    private static async validateSubcategory(
        subcategoryId: string,
        categoryId: string
    ): Promise<void> {
        const subcategory = await prisma.subcategory.findUnique({
            where: { id: subcategoryId },
        });

        if (!subcategory) {
            throw new NotFoundError("Subcategory not found");
        }

        if (subcategory.categoryId !== categoryId) {
            throw new ValidationError(
                "Subcategory does not belong to the specified category"
            );
        }
    }

    /**
     * Validates that a card exists and belongs to the user.
     */
    private static async validateCard(
        cardId: string,
        userId: string
    ): Promise<void> {
        const card = await prisma.card.findUnique({
            where: { id: cardId },
        });

        if (!card) {
            throw new NotFoundError("Card not found");
        }

        if (card.userId !== userId) {
            throw new ValidationError("Card does not belong to this user");
        }
    }

    public static async createExpense(
        userId: string,
        expenseData: ICreateExpenseRequest
    ): Promise<Expense> {
        const {
            categoryId,
            subcategoryId,
            cardId,
            date,
            description,
            amount,
            isSharedExpense,
            sharedWith,
            yourPercentage,
            isRecurring,
            recurringFrequency,
            recurringDay,
            merchantName,
            notes,
        } = expenseData;

        // Validate references exist and belong to the user
        await ExpenseService.validateCategory(categoryId, userId);

        if (subcategoryId) {
            await ExpenseService.validateSubcategory(subcategoryId, categoryId);
        }

        if (cardId) {
            await ExpenseService.validateCard(cardId, userId);
        }

        // Compute derived fields
        const actualExpenditure = amount * yourPercentage;
        const settlementStatus = isSharedExpense ? "pending" : "n/a";

        const expense = await prisma.expense.create({
            data: {
                userId,
                categoryId,
                subcategoryId: subcategoryId ?? null,
                cardId: cardId ?? null,
                date,
                description,
                amount,
                isShared: isSharedExpense,
                sharedWith: sharedWith ?? null,
                yourPercentage,
                actualExpenditure,
                settlementStatus,
                isRecurring,
                recurringFrequency: recurringFrequency ?? null,
                recurringDay: recurringDay ?? null,
                merchantName: merchantName ?? null,
                notes: notes ?? null,
            },
        });

        return expense;
    }

    public static async getExpenses(
        userId: string,
        filters?: {
            dateFrom?: Date;
            dateTo?: Date;
            categoryId?: string;
            cardId?: string;
        }
    ): Promise<Expense[]> {
        const where: Record<string, unknown> = { userId };

        if (filters?.dateFrom || filters?.dateTo) {
            where.date = {
                ...(filters.dateFrom && { gte: filters.dateFrom }),
                ...(filters.dateTo && { lte: filters.dateTo }),
            };
        }

        if (filters?.categoryId) {
            where.categoryId = filters.categoryId;
        }

        if (filters?.cardId) {
            where.cardId = filters.cardId;
        }

        return await prisma.expense.findMany({
            where,
            orderBy: { date: "desc" },
            include: {
                category: true,
                subcategory: true,
                card: true,
            },
        });
    }

    public static async getExpenseById(
        expenseId: string,
        userId: string
    ): Promise<Expense> {
        const expense = await prisma.expense.findUnique({
            where: { id: expenseId },
            include: {
                category: true,
                subcategory: true,
                card: true,
            },
        });

        if (!expense) {
            throw new NotFoundError("Expense not found");
        }

        if (expense.userId !== userId) {
            throw new NotFoundError("Expense not found");
        }

        return expense;
    }

    public static async updateExpense(
        expenseId: string,
        userId: string,
        updateData: Partial<ICreateExpenseRequest>
    ): Promise<Expense> {
        // First verify the expense exists and belongs to the user
        const existingExpense = await ExpenseService.getExpenseById(
            expenseId,
            userId
        );

        // Validate new references if they're being changed
        if (updateData.categoryId) {
            await ExpenseService.validateCategory(
                updateData.categoryId,
                userId
            );
        }

        if (updateData.subcategoryId) {
            const categoryId =
                updateData.categoryId ?? existingExpense.categoryId;
            await ExpenseService.validateSubcategory(
                updateData.subcategoryId,
                categoryId
            );
        }

        if (updateData.cardId) {
            await ExpenseService.validateCard(updateData.cardId, userId);
        }

        // Recompute actualExpenditure if amount or percentage changed
        const amount = updateData.amount ?? existingExpense.amount;
        const yourPercentage =
            updateData.yourPercentage ?? existingExpense.yourPercentage;
        const actualExpenditure = amount * yourPercentage;

        // Only recompute settlement fields when sharing status is explicitly changed
        const sharingChanged = updateData.isSharedExpense !== undefined;
        const settlementFields: Record<string, unknown> = {};

        if (sharingChanged) {
            settlementFields.isShared = updateData.isSharedExpense;
            if (updateData.isSharedExpense) {
                settlementFields.settlementStatus = "pending";
            } else {
                settlementFields.settlementStatus = "n/a";
                settlementFields.paidAt = null;
            }
        }

        return await prisma.expense.update({
            where: { id: expenseId },
            data: {
                ...(updateData.categoryId && {
                    categoryId: updateData.categoryId,
                }),
                ...(updateData.subcategoryId !== undefined && {
                    subcategoryId: updateData.subcategoryId ?? null,
                }),
                ...(updateData.cardId !== undefined && {
                    cardId: updateData.cardId ?? null,
                }),
                ...(updateData.date && { date: updateData.date }),
                ...(updateData.description && {
                    description: updateData.description,
                }),
                ...(updateData.sharedWith !== undefined && {
                    sharedWith: updateData.sharedWith ?? null,
                }),
                ...(updateData.isRecurring !== undefined && {
                    isRecurring: updateData.isRecurring,
                }),
                ...(updateData.recurringFrequency !== undefined && {
                    recurringFrequency: updateData.recurringFrequency ?? null,
                }),
                ...(updateData.recurringDay !== undefined && {
                    recurringDay: updateData.recurringDay ?? null,
                }),
                ...(updateData.merchantName !== undefined && {
                    merchantName: updateData.merchantName ?? null,
                }),
                ...(updateData.notes !== undefined && {
                    notes: updateData.notes ?? null,
                }),
                amount,
                yourPercentage,
                actualExpenditure,
                ...settlementFields,
            },
            include: {
                category: true,
                subcategory: true,
                card: true,
            },
        });
    }

    public static async deleteExpense(
        expenseId: string,
        userId: string
    ): Promise<Expense> {
        // Verify ownership before deleting
        await ExpenseService.getExpenseById(expenseId, userId);

        return await prisma.expense.delete({
            where: { id: expenseId },
        });
    }
}
