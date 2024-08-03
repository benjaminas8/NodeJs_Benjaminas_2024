import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";
import ticketsRouter from "./src/route/ticket.js";
import userRouter from "./src/route/user.js";

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_CONNECTION)
  .then(() => console.log("Connected!"))
  .catch((err) => {
    console.log(err);
  });

app.use(ticketsRouter);
app.use(userRouter);

app.use((req, res) => {
  return res.status(404).json({ message: "this end point does not exist" });
});

app.listen(process.env.PORT, () => {
  console.log(`your app started on ${process.env.PORT} port`);
});
