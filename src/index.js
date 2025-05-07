import express from "express";
import { errorMiddleware } from "./middlewares/errors-middleware.js";
import { authRouter } from "./routes/auth-route.js";
import { userRouter } from "./routes/users-route.js";
import cors from "cors";
import { errorValidate } from "./validations/validate.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(authRouter);
app.use(userRouter);

app.use((req, res, next) => {
  try {
    errorValidate("Resource not found", 404);
  } catch (error) {
    next(error);
  }
});

app.use(errorMiddleware);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

export default app;
