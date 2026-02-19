import { Router } from "express";
import { UserController } from "../controllers/user.controller.ts";
import { validateRequest } from "../middleware/validateRequest.ts";
import { loginUserSchema, registerUserSchema } from "../schemas/auth.schema.ts";

const userRoutes = Router();

userRoutes.post(
    "/auth/register",
    validateRequest(registerUserSchema),
    UserController.register
);

userRoutes.post(
    "/auth/login",
    validateRequest(loginUserSchema),
    UserController.login
);

export default userRoutes;
