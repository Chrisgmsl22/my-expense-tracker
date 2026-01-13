import { Pool } from "pg";
import { PrismaClient } from "../src/generated/prisma/index.js";
import type { SeedSystemCategories } from "../src/types/seedTypes.ts";
import { envC } from "../src/config/env.ts";
import { PrismaPg } from "@prisma/adapter-pg";

const pool = new Pool({
    connectionString: envC.DATABASE_URL,
});

const adapter = new PrismaPg(pool);

// We pass the adapter to the PrismaClient
const prisma = new PrismaClient({ adapter });

// We need to seed this data because this should come pre-defined for all users
// We will populate our DB's categories table with some default ones that cannot be deleted (at least for now)

// For a direct PostgreSQL connection in prisma 7, we need a driver adapter
const systemCategories: SeedSystemCategories[] = [
    {
        name: "Housing",
        isSystemCategory: true,
        isRelevant: true,
        subcategories: [
            "Rent",
            "Mortgage",
            "House expenses",
            "Repairs/maintenance",
            "Tax/fees",
        ],
    },
    {
        name: "Groceries",
        isSystemCategory: true,
        isRelevant: true,
        subcategories: ["Groceries", "Restaurants/other"],
    },
    {
        name: "Charity",
        isSystemCategory: true,
        isRelevant: true,
        subcategories: ["Taxes", "Donations"],
    },
    {
        name: "Transport",
        isSystemCategory: true,
        isRelevant: true,
        subcategories: [
            "Gasoline",
            "Repairs/tires",
            "License/fees",
            "Parking/tolls",
            "Public transportation",
            "Ubers",
            "Car maintenance",
        ],
    },
    {
        name: "Insurance",
        isSystemCategory: true,
        isRelevant: true,
        subcategories: [
            "Life",
            "Medical expenses",
            "House",
            "Car",
            "Handicap",
            "Theft",
            "Long-term care",
        ],
    },
    {
        name: "Savings",
        isSystemCategory: true,
        isRelevant: true,
        subcategories: ["Emergency fund", "Open savings", "Future purchases"],
    },
    {
        name: "Services",
        isSystemCategory: true,
        isRelevant: true,
        subcategories: [
            "Electricity",
            "Gas",
            "Water",
            "Trash",
            "Phone plan",
            "Internet",
        ],
    },
    {
        name: "Health",
        isSystemCategory: true,
        isRelevant: true,
        subcategories: [
            "Medicine",
            "Doctors appt",
            "Dentist",
            "Additional medication",
            "Therapy",
            "Other expenses",
        ],
    },
    {
        name: "Combined Expenses",
        isSystemCategory: true,
        isRelevant: true,
        subcategories: [
            "Purchases made by girlfriend",
            "Purchases made between the two",
            "Cats",
        ],
    },
    {
        name: "Personal",
        isSystemCategory: true,
        isRelevant: false, // Discretionary spending
        subcategories: [
            "Courses",
            "Education",
            "Books",
            "Subscriptions",
            "Cash withdrawals",
            "Technology",
            "Accountant",
            "Other",
        ],
    },
    {
        name: "Debt",
        isSystemCategory: true,
        isRelevant: true,
        subcategories: [
            "Car loan",
            "Credit card balance",
            "Personal loans",
            "Monthly installments",
        ],
    },
    {
        name: "Disposable Income",
        isSystemCategory: true,
        isRelevant: false, // Discretionary spending
        subcategories: [
            "Entertainment",
            "Hobbies",
            "Dining out",
            "Social events",
            "Tech gadgets",
            "Ecommerce expenses",
        ],
    },
];

const main = async () => {
    console.log("Seeding system categories ...");

    for (const category of systemCategories) {
        // Create category with nested categories
        await prisma.category.create({
            data: {
                name: category.name,
                isSystemCategory: category.isSystemCategory,
                isRelevant: category.isRelevant,
                subcategories: {
                    create: category.subcategories.map((name) => {
                        return {
                            name,
                        };
                    }),
                },
            },
        });
        console.log(`Created: ${category.name}`);
    }
};

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
