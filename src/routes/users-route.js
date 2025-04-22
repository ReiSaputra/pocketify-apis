import express from "express";
import { userDashboardController, userLoginController, userRegisterController } from "../controllers/users-controller.js";
import { authMiddleware } from "../middlewares/auth-middleware.js";

const userRouter = express.Router();

userRouter.get("/api/users/:userId/dashboard", authMiddleware, userDashboardController);

export { userRouter };
