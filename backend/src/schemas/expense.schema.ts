import z from "zod";

const invalidUUIDMessage = "Invalid UUID format";

const expenseCreateShape = {
    categoryId: z.uuid(invalidUUIDMessage),
    subcategoryId: z.uuid(invalidUUIDMessage).optional(),
    cardId: z.uuid(invalidUUIDMessage).optional(),
    date: z.coerce.date(),
    description: z.string().max(100),
    amount: z.number().positive(),

    isSharedExpense: z.boolean().optional(),
    sharedWith: z.string().optional(),
    yourPercentage: z.number().positive().max(1).default(1), // 1 == 100%
    isRecurring: z.boolean(),
    recurringFrequency: z.string().optional(),
    recurringDay: z.int().optional(),
    merchantName: z.string().optional(),
    notes: z.string().optional(),
} as const;

const sharedExpenseRefine = {
    message:
        "sharedWith and yourPercentage are required when isShared expense is true",
    path: ["sharedWith"],
};

export const createExpenseSchema = z
    .object(expenseCreateShape)
    .refine((data) => {
        if (data.isSharedExpense) {
            return data.sharedWith !== undefined;
        }
        return true;
    }, sharedExpenseRefine);

/** Partial body for PATCH; same field rules as create where fields are present. */
export const updateExpenseSchema = z
    .object(expenseCreateShape)
    .partial()
    .refine((data) => {
        if (data.isSharedExpense === true) {
            return data.sharedWith !== undefined;
        }
        return true;
    }, sharedExpenseRefine);

export const expenseIdParamSchema = z.object({
    id: z.uuid(invalidUUIDMessage),
});

// How do I validate that my get Expenses request has an ID? so I need a schema

export const getExpensesQuerySchema = z
    .object({
        // filters are not required, so we mark them as optional
        categoryId: z.uuid(invalidUUIDMessage).optional(),
        cardId: z.uuid(invalidUUIDMessage).optional(),
        dateFrom: z.coerce.date().optional(),
        dateTo: z.coerce.date().optional(),
    })
    .refine(
        (data) => {
            // If both date filters are provided, make sure they are within a valid range
            if (data.dateFrom && data.dateTo) {
                return data.dateFrom <= data.dateTo;
            }
            return true;
        },
        {
            message:
                "dateFrom cannot be greater than dateTo, invalid date range",
            path: ["dateFrom"],
        }
    );
