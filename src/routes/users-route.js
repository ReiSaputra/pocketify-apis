import express from "express";
import { userLoginController, userRegisterController } from "../controllers/users-controller.js";

const userRouter = express.Router();

userRouter.post("/api/auth/login", userLoginController);
userRouter.post("/api/auth/register", userRegisterController);

export { userRouter };
