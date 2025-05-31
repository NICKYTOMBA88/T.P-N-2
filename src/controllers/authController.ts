import { auth } from "../models/authModel";
import { Request, Response } from "express";
import bcryptjs from "bcryptjs";

const getUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const user = await auth.find({}, { password: 0, email: false })
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

const createUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const body = req.body
    console.log(body);
    console.log("BODY:", body); // <- este log te dice si el body llega

    const hash = await bcryptjs.hash(body.password, 10)
    const newUser = new auth({ email: body.email, password: hash })
    await newUser.save()
    res.status(201).json({
      succes: true,
      data: { _id: newUser.id, email: newUser.email },
      message: "usuario creado con exito",

    })
  } catch (error) {
    const err = error as Error;
    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
}

export { getUser, createUser }