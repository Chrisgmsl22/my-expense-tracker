import "dotenv/config";
import express, { type Request, type Response } from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import { envC } from "./config/env.ts";
import userRoutes from "./routes/user.routes.ts";
import { errorHandler } from "./middleware/errorHandler.ts";

const app = express();
const PORT = envC.PORT;

// Middleware section
app.use(helmet()); // Security headers
app.use(cors()); // FE <> BE communication
app.use(morgan("dev")); // Logger
app.use(express.json()); // Parses a string from the request made into an actual JSON

// Mounting API routes
app.use("/api", userRoutes);

// Middleware error handler MUST BE LAST
app.use(errorHandler);

// Temp health check endpoint
app.get("/health", (req: Request, res: Response) => {
    res.status(200).json({
        status: "OK",
        timestamp: new Date().toISOString(),
    });
});

// Start the actual server
app.listen(PORT, () => {
    /* eslint-disable no-console */
    console.info(`Server running on port: ${PORT}`);
});
