import express from "express";
import { getUserData } from "../controller/userController.js";
import userAuth from "../middleware/userAuth.js";

const userRouter = express.Router();

userRouter.get("/data", userAuth, getUserData);

export default userRouter;
