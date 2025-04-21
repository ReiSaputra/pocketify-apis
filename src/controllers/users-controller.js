import { userLoginService, userRegisterService, userDashboardService, userLogoutService } from "../services/users-service.js";

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

const userDashboardController = async (req, res, next) => {
  try {
    await userDashboardService(req, res, next);
  } catch (error) {
    next(error);
  }
};

const userLogoutController = async (req, res, next) => {
  try {
    await userLoginService(req, res, next);
  } catch (error) {}
};

export { userLoginController, userRegisterController, userDashboardController, userLogoutController };
