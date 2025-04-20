import { validate } from "../validations/validate.js";
import { userSchema } from "../validations/users-validation.js";
import { prisma } from "../database.js";
import bcrypt from "bcrypt";
import { createHmac } from "crypto";
import dotenv from "dotenv";

dotenv.config();
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
      error.status = 409;
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

const userLoginService = async (req, res, next) => {
  const { email, password } = req.body;

  validate(userSchema, { email: email, password: password });

  try {
    const findUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!findUser) {
      const error = new Error("Invalid email or password");
      error.status = 400;
      return next(error);
    }

    const checkPassword = await bcrypt.compare(password, findUser.password);

    if (!checkPassword) {
      const error = new Error("Invalid email or password");
      error.status = 400;
      return next(error);
    }

    const payload = {
      id: findUser.id,
      email: findUser.email,
    };

    const token = createHmac("sha256", process.env.SECRET_KEY).update(JSON.stringify(payload)).digest("hex");

    const updateToken = await prisma.user.update({
      where: {
        id: findUser.id,
      },
      data: {
        token: token,
      },
    });

    res.status(200);
    res.json({
      status: 200,
      message: "Login Success",
      data: {
        ...payload,
        token: updateToken.token,
      },
    });
  } catch (error) {
    return next(error);
  }
};

export { userLoginService, userRegisterService };
