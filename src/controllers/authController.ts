import { auth } from "../models/authModel";
import { Request, Response } from "express";


const getUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const user = await auth.find()
    res.json({
      status: true,
      message: "User registered successfully",
      data: user,
    })
  } catch (error) {
    const err = error as Error
    res.status(400).json({
      status: false,
      message: err.message,
    })
  }
}

export { getUser }