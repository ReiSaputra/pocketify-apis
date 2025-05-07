import { userLoginService, userRegisterService, userDashboardService, userLogoutService } from "../services/users-service.js";
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
  } catch (error) {
    next(error);
  }
};

export { userDashboardController, userLogoutController };
