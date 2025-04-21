import express from "express";
import { userDashboardController, userLoginController, userRegisterController } from "../controllers/users-controller.js";
import { authMiddleware } from "../middlewares/authorization-middleware.js";

const userRouter = express.Router();

userRouter.post("/api/auth/login", userLoginController);
userRouter.post("/api/auth/register", userRegisterController);

userRouter.use(authMiddleware);

userRouter.get("/api/users/:userId/dashboard", userDashboardController);

export { userRouter };
