
import { Router } from "express";
import { getUser, createUser } from "../controllers/authController";


const authRouter = Router();

authRouter.get("/", getUser)
authRouter.post("/", createUser)


export { authRouter }