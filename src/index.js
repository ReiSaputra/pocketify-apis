import express from "express";
import { errorMiddleware } from "./middlewares/errors-middleware.js";
import { authRouter } from "./routes/auth-route.js";
import { userRouter } from "./routes/users-route.js";

const app = express();

app.use(express.json());

app.use(authRouter);
app.use(userRouter);

app.use((req, res, next) => {
  res.status(404).json({
    status: 404,
    message: "Resource not found",
  });
});

app.use(errorMiddleware);

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

export default app;
