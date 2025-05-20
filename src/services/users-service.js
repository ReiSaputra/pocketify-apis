import { prisma } from "../database.js";
import { validate } from "../validations/validate.js";
import { pocketSchema } from "../validations/pockets-validation.js";

const userDashboardService = async (req, res, next) => {
  const userId = req.params.userId;

  try {
    const findUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        badges: {
          select: {
            badge: {
              select: {
                name: true,
                icon: true,
                description: true,
              },
            },
          },
        },
        pockets: {
          select: {
            user: {
              select: {
                name: true,
              },
            },
            name: true,
            balance: true,
          },
        },
      },
    });

    return res.status(200).json({
      status: 200,
      message: "Get User's data Success",
      data: findUser,
    });
  } catch (error) {
    return next(error);
  }
};

const getUserPocketsService = async (req, res, next) => {
  const userId = req.params.userId;

  try {
    const findPocket = await prisma.pocket.findMany({
      orderBy: {
        name: "asc",
      },
      where: {
        userId: userId,
      },
    });

    return res.status(200).json({
      status: 200,
      message: "Get User's pockets data Success",
      data: findPocket,
    });
  } catch (error) {
    return next(error);
  }
};

const createUserPocketService = async (req, res, next) => {
  const userId = req.params.userId;
  const { name, currentBalance, targetSaving, targetDate, type } = req.body;

  validate(pocketSchema, req.body);

  try {
    const createPocket = await prisma.pocket.create({
      data: {
        name: name,
        balance: currentBalance,
        targetSaving: targetSaving,
        targetDate: new Date(targetDate),
        userId: userId,
        type: type,
      },
    });

    const createNotification = await prisma.notification.create({
      data: {
        title: `Create ${name} Pocket Success`,
        description: `You have created ${name} Pocket. It's time to start saving your money!`,
        userId: userId,
        type: "PRIVATE",
      },
    });

    return res.status(201).json({
      status: 201,
      message: "Create Pocket & Notification Success",
      data: { createPocket, createNotification },
    });
  } catch (error) {
    return next(error);
  }
};

const postUserPocketService = async (req, res, next) => {
  const userId = req.params.userId;
  const { name, balance, targetDate, type } = req.body;

  validate(pocketSchema, req.body);

  try {
    const createPocket = await prisma.pocket.create({
      data: {
        name: name,
        balance: balance,
        targetDate: targetDate,
        type: type,
        userId: userId,
      },
    });

    return res.status(201).json({
      status: 201,
      message: "Create Pocket Success",
      data: createPocket,
    });
  } catch (error) {
    return next(error);
  }
};

const depositPocketService = async (req, res, next) => {
  const userId = req.params.userId;
  const pocketId = req.params.pocketId;

  const { balance } = req.body;

  try {
    const updateNomineePocket = await prisma.pocket.update({
      where: {
        AND: [
          {
            id: pocketId,
          },
          {
            userId: userId,
          },
        ],
      },
      data: {
        balance: {
          increment: balance,
        },
      },
    });

    return res.status(200).json({
      status: 200,
      message: "Deposit Pocket Success",
      data: updateNomineePocket,
    });
  } catch (error) {
    return next(error);
  }
};

const withdrawPocketService = async (req, res, next) => {};

const getUserDetailPocketService = async (req, res, next) => {
  const userId = req.params.userId;
  const pocketId = req.params.pocketId;

  try {
    const findPocketDetail = prisma.pocket.findUnique({
      where: {
        AND: [
          {
            id: pocketId,
          },
          {
            userId: userId,
          },
        ],
      },
    });

    return res.status(200).json({
      status: 200,
      message: "Get User's pocket detail data success",
      data: findPocketDetail,
    });
  } catch (error) {
    return next(error);
  }
};

const pressUserFavoriteService = async (req, res, next) => {};

const userLogoutService = async (req, res, next) => {};

export { userDashboardService, userLogoutService, getUserPocketsService, createUserPocketService, getUserDetailPocketService, postUserPocketService };
