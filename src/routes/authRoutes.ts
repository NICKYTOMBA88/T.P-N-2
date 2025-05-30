
import { Router } from "express";
import { getUser } from "../controllers/authController";

const authRouter = Router();

authRouter.get("/", getUser)


export { authRouter }