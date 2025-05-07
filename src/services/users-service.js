import { prisma } from "../database.js";

const userDashboardService = async (req, res, next) => {
  const userId = req.params.userId;

  try {
    const findUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        badges: {
          include: {
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

const userLogoutService = async (req, res, next) => {};

export { userDashboardService, userLogoutService };
