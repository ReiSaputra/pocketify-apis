import { getUserDetailPocketService, getUserPocketsService, postUserPocketService, userDashboardService, userLogoutService } from "../services/users-service.js";
const userDashboardController = async (req, res, next) => {
  try {
    await userDashboardService(req, res, next);
  } catch (error) {
    next(error);
  }
};

const getUserPocketsController = async (req, res, next) => {
  try {
    await getUserPocketsService(req, res, next);
  } catch (error) {
    next(error);
  }
};

const postUserPocketController = async (req, res, next) => {
  try {
    await postUserPocketService(req, res, next);
  } catch (error) {
    next(error);
  }
};

const getUserDetailPocketController = async (req, res, next) => {
  try {
    await getUserDetailPocketService(req, res, next);
  } catch (error) {
    next(error);
  }
};

const pressUserFavoriteController = async (req, res, next) => {
  try {
    await userFavoriteService(req, res, next);
  } catch (error) {
    next(error);
  }
};

const userNotificationController = async (req, res, next) => {};

const userProfileController = async (req, res, next) => {};

const userLogoutController = async (req, res, next) => {
  try {
    await userLogoutService(req, res, next);
  } catch (error) {
    next(error);
  }
};

export { userDashboardController, userNotificationController, userProfileController, getUserDetailPocketController, getUserPocketsController, userLogoutController, pressUserFavoriteController, postUserPocketController };
