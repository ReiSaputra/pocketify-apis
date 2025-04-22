import { validate, errorValidate } from "../validations/validate.js";
import { userSchema } from "../validations/users-validation.js";
import { prisma } from "../database.js";
import bcrypt from "bcrypt";
import { createHmac } from "crypto";
import dotenv from "dotenv";
import { names, uniqueNamesGenerator, adjectives } from "unique-names-generator";

dotenv.config();

const registerService = async (req, res, next) => {
  const { email, password } = req.body;

  validate(userSchema, req.body);

  try {
    const findUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (findUser) {
      errorValidate("User already exists", 400);
    }

    const nameGenerator = uniqueNamesGenerator({
      dictionaries: [adjectives, names],
      separator: " ",
      style: "capital",
      length: 2,
    });
    const passwordHash = await bcrypt.hash(password, 10);

    const createUser = await prisma.user.create({
      data: {
        name: nameGenerator,
        email: email,
        password: passwordHash,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return res.status(200).json({
      status: 200,
      message: "Register Success",
      data: createUser,
    });
  } catch (error) {
    return next(error);
  }
};

const loginService = async (req, res, next) => {
  const { email, password } = req.body;

  validate(userSchema, { email: email, password: password });

  try {
    const findUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!findUser) {
      errorValidate("Invalid email or password", 400);
    }

    const checkPassword = await bcrypt.compare(password, findUser.password);

    if (!checkPassword) {
      errorValidate("Invalid email or password", 400);
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

    return res.status(200).json({
      status: 200,
      message: "Login Success",
      data: {
        ...payload,
        name: findUser.name,
        token: updateToken.token,
      },
    });
  } catch (error) {
    return next(error);
  }
};

export { registerService, loginService };
