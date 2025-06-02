import { auth } from "../models/authModel";
import { Request, Response } from "express";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

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

    const hash = await bcryptjs.hash(body.password, 10) //--> DE ESTA FORMA SE HASHEA
    const newUser = new auth({ email: body.email, password: hash }) //--> SE CREA UN NUEVO USUARIO
    await newUser.save() //--> SE GUARDA EN LA DB
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


const login = async (req: Request, res: Response): Promise<any> => {
  try {
    const body = req.body

    const fondUser = await auth.findOne({ email: body.email }) //--> SE BUSCA EL USUARIO EN LA DB

    if (!fondUser) {
      return res.status(401).json({
        succes: false,
        message: "El email es incorrecto",
      })
    }

    const match = await bcryptjs.compare(body.password, fondUser.password) //--> SE COMPARAN AMBAS CONTRASEÑAS HASHEADAS, LA GUARDADA Y LA RECIBIDA EN EL LOGIN

    if (!match) {
      res.status(401).json({
        succes: false,
        message: "contraseña incorrecta",
      })


    }

    const token = jwt.sign({ _id: fondUser._id }, "contraseña secreta", { expiresIn: "10s" })

    console.log(match)

    res.json(fondUser)
    res.json({ credencial: "tenes acceso al sist hasta las 12" })

  } catch (error) {
    const err = error as Error;
    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
}

export { getUser, createUser, login }