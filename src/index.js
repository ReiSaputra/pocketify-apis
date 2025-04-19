import express from "express";
import { userRouter } from "./routes/users-route.js";
import { errorMiddleware } from "./middlewares/errors-middleware.js";

const app = express();

app.use(express.json());

app.use(userRouter);

app.use((req, res, next) => {
  res.status(404).json({
    message: "Resource not found",
  });
});

app.use(errorMiddleware);

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

export default app;
