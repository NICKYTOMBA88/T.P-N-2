import { auth } from "../models/authModel";
import { Request, Response } from "express";
import bcryptjs from "bcryptjs";
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';



dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "default-secret";

require('dotenv').config();




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
    const expiresIn = "1m"
    const token = jwt.sign({ _id: fondUser.id }, process.env.JWT_SECRET as string, {
      expiresIn: "1m", // Expira en 1 hora
    }); //--> SE GENERA UN TOKEN CON LA ID DEL USUARIO Y SE LE DA UN TIEMPO DE VIDA DE 10 SEGUNDOS 

    let tiempoRestante = 10
    const interval = setInterval(() => {
      if (tiempoRestante <= 0) {
        clearInterval(interval)
        console.log("⛔ Token expirado")
      } else {
        console.log(`⏳ Tiempo restante: ${tiempoRestante}s`)
        tiempoRestante--
      }
    }, 1000)

    res.json({ info: "Sesion iniciada, tiempo de uso 10 segundo ", data: token })

  } catch (error) {
    const err = error as Error;
    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
}

export { getUser, createUser, login }