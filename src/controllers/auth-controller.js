import { loginService, registerService } from "../services/auth-service";

const registerController = async (req, res, next) => {
  try {
    await registerService(req, res, next);
  } catch (error) {
    next(error);
  }
};

const loginController = async (req, res, next) => {
  try {
    await loginService(req, res, next);
  } catch (error) {
    next(error);
  }
};

export { registerController, loginController };
