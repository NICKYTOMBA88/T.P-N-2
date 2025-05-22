import { Request, Response } from "express"
import { book } from "../models/booksModels"


const getAllBooks = async (req: Request, res: Response): Promise<any> => {
  try {
    const books = await book.find()
    return res.json({
      succes: true,
      data: books,
      message: "recuperdando libros"
    })
  } catch (error) {
    const err = error as Error
    return res.status(500).json({
      succes: false,
      message: err.message
    })
  }
}

export { getAllBooks }