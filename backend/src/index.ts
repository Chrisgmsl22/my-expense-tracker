import "dotenv/config";
import express, { type Request, type Response } from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import { env } from "./config/env.ts";

const app = express();
const PORT = env.PORT;

// Middleware section
app.use(helmet()); // Security headers
app.use(cors()); // FE <> BE communication
app.use(morgan("dev")); // Logger
app.use(express.json()); // Parses a string from the request made into an actual JSON

// Temp health check endpoint
app.get("/health", (req: Request, res: Response) => {
    res.status(200).json({
        status: "OK",
        timestamp: new Date().toISOString(),
    });
});

// Start the actual server
app.listen(PORT, () => {
    console.warn(`Server running on port: ${PORT}`);
});
