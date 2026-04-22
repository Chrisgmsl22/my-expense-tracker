import { Router } from "express";
import { UserController } from "../controllers/user.controller.ts";
import { ValidateReq, validateRequest } from "../middleware/validateRequest.ts";
import { loginUserSchema, registerUserSchema } from "../schemas/auth.schema.ts";

const userRoutes = Router();

userRoutes.post(
    "/auth/register",
    validateRequest(registerUserSchema, ValidateReq.Body),
    UserController.register
);

userRoutes.post(
    "/auth/login",
    validateRequest(loginUserSchema, ValidateReq.Body),
    UserController.login
);

export default userRoutes;
