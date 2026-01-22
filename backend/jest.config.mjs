/** @type {import('jest').Config} */
const config = {
    preset: "ts-jest",
    testEnvironment: "node",
    roots: ["<rootDir>/src"],
    testMatch: ["**/*.test.ts"],
    moduleNameMapper: {
        "^(\\.{1,2}/.*)\\.ts$": "$1",
    },
    transform: {
        "^.+\\.ts$": [
            "ts-jest",
            {
                useESM: true,
            },
        ],
    },
    extensionsToTreatAsEsm: [".ts"],
    moduleFileExtensions: ["ts", "js", "json"],
    clearMocks: true,
    testTimeout: 10000,
    coverageDirectory: "coverage",
};

export default config;
