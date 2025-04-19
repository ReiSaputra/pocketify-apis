import { Prisma } from "../generated/prisma/client";

const errorMiddleware = (err, req, res, next) => {
  if (err instanceof Prisma.PrismaClientInitializationError) {
    res.status(err.status || 500);
    res.json({
      status: err.status || 500,
      message: `Database Initialization Error: ${err.message}`,
    });
  } else if (err instanceof Prisma.PrismaClientKnownRequestError) {
    res.status(err.status || 400);
    res.json({
      status: err.status || 400,
      message: `Client Error: ${err.message}`,
    });
  } else if (err instanceof Error) {
    res.status(err.status || 500);
    res.json({
      status: err.status || 500,
      message: err.message,
    });
  }
};

export { errorMiddleware };
