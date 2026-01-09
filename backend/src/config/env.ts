// Env variable validations
// This will error out on startup and display the env variables needed

const getEnvVar = (key: string, required = true): string => {
    const value = process.env[key];

    if (required && !value) {
        throw new Error(`Missing required environment variable: ${key}`);
    }

    return value ?? "";
};

const getEnvVarAsNumber = (key: string, defaultValue: number): number => {
    const value = process.env[key];

    if (!value) return defaultValue;
    const parsed = parseInt(value, 10);

    if (isNaN(parsed)) {
        throw new Error(`Environment variable ${key} must be a number`);
    }

    return parsed;
};

export const envC = {
    // Server
    PORT: getEnvVarAsNumber("PORT", 3000),
    NODE_ENV: getEnvVar("NODE_ENV", false),

    // DB
    DATABASE_URL: getEnvVar("DATABASE_URL"),

    // Auth
    JWT_SECRET: getEnvVar("JWT_SECRET"),

    // Computed
    isDevelopment: (process.env.NODE_ENV || "development") === "development",
    isProduction: process.env.NODE_ENV === "production",
} as const;
