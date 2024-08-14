import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authroutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/db.js";
dotenv.config();

  connectToMongoDB()

const app = express();
app.get("/", (req, res) => {
  res.send("<h1>HALLO SERVER</h1>");
});

app.use("/api/auth", authroutes);
const PORT = process.env.PORT || 5555;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
