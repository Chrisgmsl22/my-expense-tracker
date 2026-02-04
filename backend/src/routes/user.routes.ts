import { Router } from "express";
import { UserController } from "../controllers/user.controller.ts";

const userRoutes = Router();

userRoutes.post("/auth/register", UserController.register);

userRoutes.post("/auth/login", UserController.login);

export default userRoutes;
