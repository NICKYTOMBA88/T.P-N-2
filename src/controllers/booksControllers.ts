import { Request, Response } from "express"
import { book } from "../models/booksModels"


const createBook = async (req: Request, res: Response) => {
  try {
    const newBook = await book.create(req.body);
    res.status(201).json({
      success: true,
      message: "Libro creado correctamente",
      data: newBook
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: (error as Error).message
    });
  }
};

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

const deleteBook = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id
    const deletedBook = await book.findByIdAndDelete(id)
    if (!deletedBook) return res.json({
      succes: false,
      message: "no se encontro el libro"
    })
    return res.json({
      succes: true,
      data: deletedBook,
      message: "libro eliminado con exito"
    })

  } catch (error) {
    const err = error as Error
    return res.status(500).json({
      succes: false,
      message: err.message

    });
  }
}


export { getAllBooks, deleteBook, createBook }