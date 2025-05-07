import express from "express";
import { userDashboardController, getUserPocketsController, postUserPocketController } from "../controllers/users-controller.js";
import { authMiddleware } from "../middlewares/auth-middleware.js";

const userRouter = express.Router();

// Dashboard
userRouter.get("/api/users/:userId/dashboard", authMiddleware, userDashboardController);

// Pockets
userRouter.get("/api/users/:userId/pockets", authMiddleware, getUserPocketsController);
userRouter.post("/api/users/:userId/pockets", authMiddleware, postUserPocketController);
userRouter.get("/api/users/:userId/pockets/:pocketId", authMiddleware);
// Pockets w/ Favorite
userRouter.post("/api/users/:userId/pockets/:pocketId/favorite", authMiddleware);
userRouter.delete("/api/users/:userId/pockets/:pocketId/favorite", authMiddleware);
userRouter.get("/api/users/:userId/pockets/favorite", authMiddleware);

export { userRouter };
