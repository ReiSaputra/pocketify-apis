import { userLoginService, userRegisterService } from "../services/users-service.js";

const userRegisterController = async (req, res, next) => {
  try {
    await userRegisterService(req, res, next);
  } catch (error) {
    next(error);
  }
};
const userLoginController = async (req, res, next) => {
  try {
    await userLoginService(req, res, next);
  } catch (error) {
    next(error);
  }
};

export { userLoginController, userRegisterController };
