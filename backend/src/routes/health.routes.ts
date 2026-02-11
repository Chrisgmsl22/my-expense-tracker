import { Router, type Request, type Response } from "express";

const healthRoutes = Router();

// For debugging purposes
healthRoutes.get("/health", (_req: Request, res: Response) => {
    res.status(200).json({
        status: "OK",
        timestamp: new Date().toISOString(),
    });
});

export default healthRoutes;
