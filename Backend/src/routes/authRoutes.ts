
import { Router } from "express";
import { getUser, createUser, login } from "../controllers/authController";


const authRouter = Router();

authRouter.get("/", getUser)
authRouter.post("/register", createUser)
authRouter.post("/login", login)

export { authRouter }