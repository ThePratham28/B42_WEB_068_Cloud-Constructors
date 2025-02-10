import {Router} from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { getUserProfile, loginUser, signupUser } from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/signup", signupUser);
authRouter.post("/login", loginUser);
authRouter.get("/profile", authMiddleware, getUserProfile);

export default authRouter;
