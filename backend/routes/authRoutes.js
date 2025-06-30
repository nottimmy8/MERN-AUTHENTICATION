import express from "express";
import { login, logout, register } from "../controller/authController.js";

const authRouter = express.Router();

// Route for user registration
authRouter.post("/register", register); // Add the register route
authRouter.post("/login", login); // Add the login route
authRouter.post("/logout", logout); // Add the logout route
export default authRouter;
