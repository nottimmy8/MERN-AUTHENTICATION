import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js"; // Keep only this line
import authRouter from "./routes/authRoutes.js"; // Import the auth routes
import userRouter from "./routes/userRoutes.js";

const app = express();
const port = process.env.PORT || 4000;

// connect to the database
connectDB();

app.use(express.json()); // Add parentheses
app.use(cookieParser());
app.use(cors({ credentials: true }));

app.get("/", (req, res) => res.send("Welcome to the API"));
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.listen(port, () => console.log(`Server Is Running ON PORT: ${port}`));
