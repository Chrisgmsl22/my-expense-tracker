import { Pool } from "pg";
import { PrismaClient } from "../generated/prisma/index.js";
import { envC } from "./env.ts";
import { PrismaPg } from "@prisma/adapter-pg";

// Singleton pattern for Prisma Client
// Prevents multiple instances during hot reloading in development

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
    pool: Pool | undefined;
};

const pool =
    globalForPrisma.pool ??
    new Pool({
        connectionString: envC.DATABASE_URL,
    });

const adapter = new PrismaPg(pool);

export const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
        adapter,
        log:
            process.env.NODE_ENV === "development"
                ? ["query", "error", "warn"]
                : ["error"],
    });

// Cache in global for hot-reload protection
if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
    globalForPrisma.pool = pool;
}
