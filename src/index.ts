import express from "express";
import dotenv from "dotenv";
import db from "./config/db";
import categoryRoute from "./route/categoryRoute";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/api/categories", categoryRoute);

app.listen(process.env.PORT || 3000, () => {
  //   db("categories").select("*"); dbyi test ettim
  console.log("Sunucu ayakta");
});
