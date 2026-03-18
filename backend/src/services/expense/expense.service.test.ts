const mockCategoryFindUnique = jest.fn();
const mockSubcategoryFindUnique = jest.fn();
const mockCardFindUnique = jest.fn();
const mockExpenseCreate = jest.fn();
const mockExpenseFindMany = jest.fn();
const mockExpenseFindUnique = jest.fn();
const mockExpenseUpdate = jest.fn();
const mockExpenseDelete = jest.fn();

jest.mock("../../config/database.ts", () => ({
    prisma: {
        category: { findUnique: mockCategoryFindUnique },
        subcategory: { findUnique: mockSubcategoryFindUnique },
        card: { findUnique: mockCardFindUnique },
        expense: {
            create: mockExpenseCreate,
            findMany: mockExpenseFindMany,
            findUnique: mockExpenseFindUnique,
            update: mockExpenseUpdate,
            delete: mockExpenseDelete,
        },
    },
}));

import type { Expense } from "../../generated/prisma/index.js";
import type { ICreateExpenseRequest } from "../../types/expense.ts";
import { NotFoundError, ValidationError } from "../../utils/errors.utils.ts";
import { ExpenseService } from "./expense.service.ts";

const TEST_USER_ID = "user-123";
const OTHER_USER_ID = "user-456";

const validExpenseData: ICreateExpenseRequest = {
    categoryId: "cat-1",
    date: new Date("2026-03-01"),
    description: "Grocery shopping",
    amount: 500,
    isSharedExpense: false,
    yourPercentage: 1.0,
    isRecurring: false,
};

const systemCategory = {
    id: "cat-1",
    name: "Groceries",
    isSystemCategory: true,
    userId: null,
};

const userCategory = {
    id: "cat-2",
    name: "Custom Category",
    isSystemCategory: false,
    userId: TEST_USER_ID,
};

const otherUserCategory = {
    id: "cat-3",
    name: "Someone Else's",
    isSystemCategory: false,
    userId: OTHER_USER_ID,
};

const validSubcategory = {
    id: "sub-1",
    name: "Supermarket",
    categoryId: "cat-1",
};

const validCard = {
    id: "card-1",
    name: "Amex Platinum",
    userId: TEST_USER_ID,
};

const otherUserCard = {
    id: "card-2",
    name: "Other Card",
    userId: OTHER_USER_ID,
};

const mockExpense = {
    id: "expense-1",
    userId: TEST_USER_ID,
    categoryId: "cat-1",
    subcategoryId: null,
    cardId: null,
    date: new Date("2026-03-01"),
    description: "Grocery shopping",
    amount: 500,
    currency: "MXN",
    isShared: false,
    sharedWith: null,
    yourPercentage: 1.0,
    actualExpenditure: 500,
    settlementStatus: "n/a",
    paidAt: null,
    isRecurring: false,
    recurringFrequency: null,
    recurringDay: null,
    merchantName: null,
    notes: null,
    createdAt: new Date(),
    updatedAt: new Date(),
} as Expense;

describe("ExpenseService", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe("createExpense", () => {
        it("Should create a non-shared expense with correct actualExpenditure", async () => {
            mockCategoryFindUnique.mockResolvedValue(systemCategory);
            mockExpenseCreate.mockResolvedValue(mockExpense);

            const result = await ExpenseService.createExpense(
                TEST_USER_ID,
                validExpenseData
            );

            expect(result).toEqual(mockExpense);
            expect(mockExpenseCreate).toHaveBeenCalledWith({
                data: expect.objectContaining({
                    userId: TEST_USER_ID,
                    amount: 500,
                    yourPercentage: 1.0,
                    actualExpenditure: 500,
                    settlementStatus: "n/a",
                    isShared: false,
                }),
            });
        });

        it("Should compute actualExpenditure for shared expenses", async () => {
            mockCategoryFindUnique.mockResolvedValue(systemCategory);
            const sharedExpense = {
                ...mockExpense,
                isShared: true,
                sharedWith: "Girlfriend",
                yourPercentage: 0.7,
                actualExpenditure: 700,
                settlementStatus: "pending",
            } as Expense;
            mockExpenseCreate.mockResolvedValue(sharedExpense);

            const sharedData: ICreateExpenseRequest = {
                ...validExpenseData,
                amount: 1000,
                isSharedExpense: true,
                sharedWith: "Girlfriend",
                yourPercentage: 0.7,
            };

            await ExpenseService.createExpense(TEST_USER_ID, sharedData);

            expect(mockExpenseCreate).toHaveBeenCalledWith({
                data: expect.objectContaining({
                    actualExpenditure: 700,
                    settlementStatus: "pending",
                    isShared: true,
                    sharedWith: "Girlfriend",
                }),
            });
        });

        it("Should allow system categories for any user", async () => {
            mockCategoryFindUnique.mockResolvedValue(systemCategory);
            mockExpenseCreate.mockResolvedValue(mockExpense);

            await ExpenseService.createExpense(TEST_USER_ID, validExpenseData);

            expect(mockCategoryFindUnique).toHaveBeenCalledWith({
                where: { id: "cat-1" },
            });
            expect(mockExpenseCreate).toHaveBeenCalled();
        });

        it("Should allow user's own custom category", async () => {
            mockCategoryFindUnique.mockResolvedValue(userCategory);
            mockExpenseCreate.mockResolvedValue(mockExpense);

            const data = { ...validExpenseData, categoryId: "cat-2" };
            await ExpenseService.createExpense(TEST_USER_ID, data);

            expect(mockExpenseCreate).toHaveBeenCalled();
        });

        it("Should throw NotFoundError for non-existent category", async () => {
            mockCategoryFindUnique.mockResolvedValue(null);

            await expect(
                ExpenseService.createExpense(TEST_USER_ID, validExpenseData)
            ).rejects.toThrow(NotFoundError);
            await expect(
                ExpenseService.createExpense(TEST_USER_ID, validExpenseData)
            ).rejects.toThrow("Category not found");
        });

        it("Should throw ValidationError for another user's custom category", async () => {
            mockCategoryFindUnique.mockResolvedValue(otherUserCategory);

            const data = { ...validExpenseData, categoryId: "cat-3" };

            await expect(
                ExpenseService.createExpense(TEST_USER_ID, data)
            ).rejects.toThrow(ValidationError);
            await expect(
                ExpenseService.createExpense(TEST_USER_ID, data)
            ).rejects.toThrow("Category does not belong to this user");
        });

        it("Should validate subcategory belongs to the category", async () => {
            mockCategoryFindUnique.mockResolvedValue(systemCategory);
            mockSubcategoryFindUnique.mockResolvedValue(validSubcategory);
            mockExpenseCreate.mockResolvedValue(mockExpense);

            const data = {
                ...validExpenseData,
                subcategoryId: "sub-1",
            };
            await ExpenseService.createExpense(TEST_USER_ID, data);

            expect(mockSubcategoryFindUnique).toHaveBeenCalledWith({
                where: { id: "sub-1" },
            });
            expect(mockExpenseCreate).toHaveBeenCalled();
        });

        it("Should throw NotFoundError for non-existent subcategory", async () => {
            mockCategoryFindUnique.mockResolvedValue(systemCategory);
            mockSubcategoryFindUnique.mockResolvedValue(null);

            const data = {
                ...validExpenseData,
                subcategoryId: "sub-nonexistent",
            };

            await expect(
                ExpenseService.createExpense(TEST_USER_ID, data)
            ).rejects.toThrow(NotFoundError);
            await expect(
                ExpenseService.createExpense(TEST_USER_ID, data)
            ).rejects.toThrow("Subcategory not found");
        });

        it("Should throw ValidationError when subcategory doesn't belong to category", async () => {
            mockCategoryFindUnique.mockResolvedValue(systemCategory);
            mockSubcategoryFindUnique.mockResolvedValue({
                id: "sub-2",
                name: "Wrong Category Sub",
                categoryId: "cat-99",
            });

            const data = {
                ...validExpenseData,
                subcategoryId: "sub-2",
            };

            await expect(
                ExpenseService.createExpense(TEST_USER_ID, data)
            ).rejects.toThrow(ValidationError);
            await expect(
                ExpenseService.createExpense(TEST_USER_ID, data)
            ).rejects.toThrow(
                "Subcategory does not belong to the specified category"
            );
        });

        it("Should validate card belongs to user", async () => {
            mockCategoryFindUnique.mockResolvedValue(systemCategory);
            mockCardFindUnique.mockResolvedValue(validCard);
            mockExpenseCreate.mockResolvedValue(mockExpense);

            const data = { ...validExpenseData, cardId: "card-1" };
            await ExpenseService.createExpense(TEST_USER_ID, data);

            expect(mockCardFindUnique).toHaveBeenCalledWith({
                where: { id: "card-1" },
            });
            expect(mockExpenseCreate).toHaveBeenCalled();
        });

        it("Should throw NotFoundError for non-existent card", async () => {
            mockCategoryFindUnique.mockResolvedValue(systemCategory);
            mockCardFindUnique.mockResolvedValue(null);

            const data = { ...validExpenseData, cardId: "card-nonexistent" };

            await expect(
                ExpenseService.createExpense(TEST_USER_ID, data)
            ).rejects.toThrow(NotFoundError);
            await expect(
                ExpenseService.createExpense(TEST_USER_ID, data)
            ).rejects.toThrow("Card not found");
        });

        it("Should throw ValidationError for another user's card", async () => {
            mockCategoryFindUnique.mockResolvedValue(systemCategory);
            mockCardFindUnique.mockResolvedValue(otherUserCard);

            const data = { ...validExpenseData, cardId: "card-2" };

            await expect(
                ExpenseService.createExpense(TEST_USER_ID, data)
            ).rejects.toThrow(ValidationError);
            await expect(
                ExpenseService.createExpense(TEST_USER_ID, data)
            ).rejects.toThrow("Card does not belong to this user");
        });
    });

    describe("getExpenses", () => {
        it("Should return all expenses for a user", async () => {
            mockExpenseFindMany.mockResolvedValue([mockExpense]);

            const result = await ExpenseService.getExpenses(TEST_USER_ID);

            expect(result).toEqual([mockExpense]);
            expect(mockExpenseFindMany).toHaveBeenCalledWith({
                where: { userId: TEST_USER_ID },
                orderBy: { date: "desc" },
                include: { category: true, subcategory: true, card: true },
            });
        });

        it("Should apply date filters", async () => {
            mockExpenseFindMany.mockResolvedValue([]);

            const dateFrom = new Date("2026-01-01");
            const dateTo = new Date("2026-01-31");

            await ExpenseService.getExpenses(TEST_USER_ID, {
                dateFrom,
                dateTo,
            });

            expect(mockExpenseFindMany).toHaveBeenCalledWith({
                where: {
                    userId: TEST_USER_ID,
                    date: { gte: dateFrom, lte: dateTo },
                },
                orderBy: { date: "desc" },
                include: { category: true, subcategory: true, card: true },
            });
        });

        it("Should apply category filter", async () => {
            mockExpenseFindMany.mockResolvedValue([]);

            await ExpenseService.getExpenses(TEST_USER_ID, {
                categoryId: "cat-1",
            });

            expect(mockExpenseFindMany).toHaveBeenCalledWith({
                where: {
                    userId: TEST_USER_ID,
                    categoryId: "cat-1",
                },
                orderBy: { date: "desc" },
                include: { category: true, subcategory: true, card: true },
            });
        });

        it("Should apply card filter", async () => {
            mockExpenseFindMany.mockResolvedValue([]);

            await ExpenseService.getExpenses(TEST_USER_ID, {
                cardId: "card-1",
            });

            expect(mockExpenseFindMany).toHaveBeenCalledWith({
                where: {
                    userId: TEST_USER_ID,
                    cardId: "card-1",
                },
                orderBy: { date: "desc" },
                include: { category: true, subcategory: true, card: true },
            });
        });

        it("Should return empty array when no expenses found", async () => {
            mockExpenseFindMany.mockResolvedValue([]);

            const result = await ExpenseService.getExpenses(TEST_USER_ID);

            expect(result).toEqual([]);
        });
    });

    describe("getExpenseById", () => {
        it("Should return expense when it exists and belongs to user", async () => {
            mockExpenseFindUnique.mockResolvedValue(mockExpense);

            const result = await ExpenseService.getExpenseById(
                "expense-1",
                TEST_USER_ID
            );

            expect(result).toEqual(mockExpense);
            expect(mockExpenseFindUnique).toHaveBeenCalledWith({
                where: { id: "expense-1" },
                include: { category: true, subcategory: true, card: true },
            });
        });

        it("Should throw NotFoundError when expense does not exist", async () => {
            mockExpenseFindUnique.mockResolvedValue(null);

            await expect(
                ExpenseService.getExpenseById("nonexistent", TEST_USER_ID)
            ).rejects.toThrow(NotFoundError);
            await expect(
                ExpenseService.getExpenseById("nonexistent", TEST_USER_ID)
            ).rejects.toThrow("Expense not found");
        });

        it("Should throw NotFoundError when expense belongs to another user", async () => {
            const otherUserExpense = {
                ...mockExpense,
                userId: OTHER_USER_ID,
            };
            mockExpenseFindUnique.mockResolvedValue(otherUserExpense);

            await expect(
                ExpenseService.getExpenseById("expense-1", TEST_USER_ID)
            ).rejects.toThrow(NotFoundError);
            await expect(
                ExpenseService.getExpenseById("expense-1", TEST_USER_ID)
            ).rejects.toThrow("Expense not found");
        });
    });

    describe("updateExpense", () => {
        beforeEach(() => {
            // getExpenseById is called first to verify ownership
            mockExpenseFindUnique.mockResolvedValue(mockExpense);
        });

        it("Should update expense description", async () => {
            const updatedExpense = {
                ...mockExpense,
                description: "Updated description",
            };
            mockExpenseUpdate.mockResolvedValue(updatedExpense);

            const result = await ExpenseService.updateExpense(
                "expense-1",
                TEST_USER_ID,
                { description: "Updated description" }
            );

            expect(result.description).toBe("Updated description");
            expect(mockExpenseUpdate).toHaveBeenCalled();
        });

        it("Should recompute actualExpenditure when amount changes", async () => {
            mockExpenseUpdate.mockResolvedValue({
                ...mockExpense,
                amount: 800,
                actualExpenditure: 800,
            });

            await ExpenseService.updateExpense("expense-1", TEST_USER_ID, {
                amount: 800,
            });

            expect(mockExpenseUpdate).toHaveBeenCalledWith(
                expect.objectContaining({
                    data: expect.objectContaining({
                        amount: 800,
                        actualExpenditure: 800,
                    }),
                })
            );
        });

        it("Should recompute actualExpenditure when percentage changes", async () => {
            mockExpenseUpdate.mockResolvedValue({
                ...mockExpense,
                yourPercentage: 0.7,
                actualExpenditure: 350,
            });

            await ExpenseService.updateExpense("expense-1", TEST_USER_ID, {
                yourPercentage: 0.7,
            });

            // 500 (existing amount) * 0.7 = 350
            expect(mockExpenseUpdate).toHaveBeenCalledWith(
                expect.objectContaining({
                    data: expect.objectContaining({
                        amount: 500,
                        yourPercentage: 0.7,
                        actualExpenditure: 350,
                    }),
                })
            );
        });

        it("Should validate new categoryId when changing category", async () => {
            mockCategoryFindUnique.mockResolvedValue(userCategory);
            mockExpenseUpdate.mockResolvedValue(mockExpense);

            await ExpenseService.updateExpense("expense-1", TEST_USER_ID, {
                categoryId: "cat-2",
            });

            expect(mockCategoryFindUnique).toHaveBeenCalledWith({
                where: { id: "cat-2" },
            });
        });

        it("Should validate new cardId when changing card", async () => {
            mockCardFindUnique.mockResolvedValue(validCard);
            mockExpenseUpdate.mockResolvedValue(mockExpense);

            await ExpenseService.updateExpense("expense-1", TEST_USER_ID, {
                cardId: "card-1",
            });

            expect(mockCardFindUnique).toHaveBeenCalledWith({
                where: { id: "card-1" },
            });
        });

        it("Should throw NotFoundError when expense doesn't exist", async () => {
            mockExpenseFindUnique.mockResolvedValue(null);

            await expect(
                ExpenseService.updateExpense("nonexistent", TEST_USER_ID, {
                    description: "test",
                })
            ).rejects.toThrow(NotFoundError);
        });
    });

    describe("deleteExpense", () => {
        it("Should delete expense when it belongs to user", async () => {
            mockExpenseFindUnique.mockResolvedValue(mockExpense);
            mockExpenseDelete.mockResolvedValue(mockExpense);

            const result = await ExpenseService.deleteExpense(
                "expense-1",
                TEST_USER_ID
            );

            expect(result).toEqual(mockExpense);
            expect(mockExpenseDelete).toHaveBeenCalledWith({
                where: { id: "expense-1" },
            });
        });

        it("Should throw NotFoundError when expense doesn't exist", async () => {
            mockExpenseFindUnique.mockResolvedValue(null);

            await expect(
                ExpenseService.deleteExpense("nonexistent", TEST_USER_ID)
            ).rejects.toThrow(NotFoundError);
            await expect(
                ExpenseService.deleteExpense("nonexistent", TEST_USER_ID)
            ).rejects.toThrow("Expense not found");
        });

        it("Should throw NotFoundError when expense belongs to another user", async () => {
            mockExpenseFindUnique.mockResolvedValue({
                ...mockExpense,
                userId: OTHER_USER_ID,
            });

            await expect(
                ExpenseService.deleteExpense("expense-1", TEST_USER_ID)
            ).rejects.toThrow(NotFoundError);
        });
    });
});
