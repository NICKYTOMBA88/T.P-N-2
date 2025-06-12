import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import { JwtPayload } from "jsonwebtoken"

const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const header = req.headers.authorization
  const token = header?.split(" ")[1]
  const url = req.url
  console.log(url, "<- petición de la url en middleware")
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "unauthorized, token is required"
    })
  }
  try {
    // validar el token existente
    const JWT_SECRET = process.env.JWT_SECRET!
    const decoded = jwt.verify(token, JWT_SECRET)
    // Enviarle a la petición que sigue, de quien corresponde
    next()
  } catch (error) {
    const err = error as Error
    res.status(401).json({ success: false, message: err.message })
  }
}

export default authMiddleware