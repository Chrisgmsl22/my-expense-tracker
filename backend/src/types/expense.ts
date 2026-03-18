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
