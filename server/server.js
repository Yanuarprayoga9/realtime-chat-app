import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authroutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from "./db/db.js";
import cors from "cors"
dotenv.config();

connectToMongoDB();

const app = express();
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from this origin
  credentials: true // Allow credentials (cookies, authorization headers, etc.)
}));
app.use(express.json());
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("<h1>HALLO SERVER</h1>");
});

app.use("/api/auth", authroutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5555;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
