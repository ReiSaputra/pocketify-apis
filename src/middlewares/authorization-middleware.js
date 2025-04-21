import { prisma } from "../database.js";
import { errorValidate } from "../validations/validate.js";

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const userId = req.params.userId;

    if (!token) {
      errorValidate("Unauthorized", 401);
    }

    const findTokenAndId = await prisma.user.findUnique({
      where: {
        AND: [
          {
            token: token,
          },
          {
            id: userId,
          },
        ],
      },
    });

    if (!findTokenAndId) {
      errorValidate("Unauthorized", 401);
    }

    next();
  } catch (error) {
    next(error);
  }
};

export { authMiddleware };
