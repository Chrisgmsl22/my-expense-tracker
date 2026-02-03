// The goal of this file is to be able to load test ENV variables and use them inside test files

const dotenv = require("dotenv");
const path = require("path");

// Load the specific .env.test file
dotenv.config({ path: path.resolve(process.cwd(), ".env.test") });

console.log("Test environment file loaded: ", process.env.JWT_SECRET);
