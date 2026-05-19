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
        slug: "housing",
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
        slug: "groceries",
        isSystemCategory: true,
        isRelevant: true,
        subcategories: ["Groceries", "Restaurants/other"],
    },
    {
        name: "Charity",
        slug: "charity",
        isSystemCategory: true,
        isRelevant: true,
        subcategories: ["Taxes", "Donations"],
    },
    {
        name: "Transport",
        slug: "transport",
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
        slug: "insurance",
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
        slug: "savings",
        isSystemCategory: true,
        isRelevant: true,
        subcategories: ["Emergency fund", "Open savings", "Future purchases"],
    },
    {
        name: "Services",
        slug: "services",
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
        slug: "health",
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
        slug: "combined-expenses",
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
        slug: "personal",
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
        slug: "debt",
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
        slug: "disposable-income",
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
    {
        name: "Unassigned",
        slug: "unassigned",
        isSystemCategory: true,
        isRelevant: false,
        subcategories: [],
    },
];

const main = async () => {
    /* eslint-disable no-console */
    console.log("Seeding system categories ...");

    for (const category of systemCategories) {
        // Create category with nested categories
        await prisma.category.upsert({
            where: {
                slug: category.slug,
            },
            update: {
                name: category.name,
                isSystemCategory: category.isSystemCategory,
                isRelevant: category.isRelevant,
            },
            create: {
                name: category.name,
                isSystemCategory: category.isSystemCategory,
                isRelevant: category.isRelevant,
                slug: category.slug,
                subcategories: {
                    create: category.subcategories.map((name) => {
                        return {
                            name,
                        };
                    }),
                },
            },
        });
        /* eslint-disable no-console */
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
