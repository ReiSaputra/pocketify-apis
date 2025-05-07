import express from "express";
import { registerController, loginController } from "../controllers/auth-controller.js";

const authRouter = express.Router();

authRouter.post("/api/auth/register", registerController);
authRouter.post("/api/auth/login", loginController);

export { authRouter };
