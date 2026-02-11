import "dotenv/config";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import { envC } from "./config/env.ts";
import userRoutes from "./routes/user.routes.ts";
import { errorHandler } from "./middleware/errorHandler.ts";
import { requestLogger } from "./middleware/requestLogger.ts";
import logger from "./utils/logger.ts";
import healthRoutes from "./routes/health.routes.ts";

const app = express();
const PORT = envC.PORT;

// Middleware section
app.use(helmet()); // Security headers
app.use(cors()); // FE <> BE communication
app.use(express.json()); // Parses a string from the request made into an actual JSON

// Request logger - BEFORE routes
app.use(requestLogger);

// Mounting API routes
app.use(healthRoutes);
app.use("/api", userRoutes);

// Middleware error handler MUST BE LAST
app.use(errorHandler);

// Start the actual server
app.listen(PORT, () => {
    logger.info(`Server running on port: ${PORT}`);
});
