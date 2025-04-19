import { validate } from "../validations/validate.js";
import { userSchema } from "../validations/users-validation.js";
import { prisma } from "../database.js";
import bcrypt from "bcrypt";

const userLoginService = async (req, res, next) => {
  const { email, password } = req.body;

  validate(userSchema, { email: email, password: password });

  const findUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!findUser) {
    res.status(400);
    res.json({
      status: 400,
      message: "Login Failed",
      errors: "User not found",
    });
    return;
  }

  res.status(200);
  res.json({
    status: 200,
    message: "Login Success",
    data: findUser,
  });
};

const userRegisterService = async (req, res, next) => {
  const { email, password } = req.body;

  validate(userSchema, req.body);

  try {
    const findUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (findUser) {
      const error = new Error("User already exists");
      error.status = 400;
      return next(error);
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const createUser = await prisma.user.create({
      data: {
        email: email,
        password: passwordHash,
      },
      select: {
        id: true,
        email: true,
      },
    });

    res.status(200);
    res.json({
      status: 200,
      message: "Register Success",
      data: createUser,
    });
  } catch (error) {
    return next(error);
  }
};

export { userLoginService, userRegisterService };
