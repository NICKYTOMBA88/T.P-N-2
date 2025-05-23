import { Request, Response } from "express"
import { book } from "../models/booksModels"

//Obetener todos los libros 

const getAllBooks = async (req: Request, res: Response): Promise<any> => {
  try {
    const books = await book.find()
    return res.json({
      succes: true,
      data: books,
      message: "Estos son todos los libros disponibles 📚 "
    })
  } catch (error) {
    const err = error as Error
    return res.status(500).json({
      succes: false,
      message: err.message
    })
  }
}

// Crear libro

const createBook = async (req: Request, res: Response) => {
  try {
    const newBook = await book.create(req.body);
    res.status(201).json({
      success: true,
      message: "Libro creado 👍",
      data: newBook
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: (error as Error).message
    });
  }
};

// Eliminar libro

const deleteBook = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id
    const deletedBook = await book.findByIdAndDelete(id)
    if (!deletedBook) return res.json({
      succes: false,
      message: "no se encontro el libro 😔"
    })
    return res.json({
      succes: true,
      data: deletedBook,
      message: "libro eliminado con exito 😁"
    })

  } catch (error) {
    const err = error as Error
    return res.status(500).json({
      succes: false,
      message: err.message
    });
  }
}

// Actualizar libro

const updateBook = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id;
    const updatedBook = await book.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!updatedBook) return res.status(404).json({
      succes: false,
      message: "No se encontro el libro 😒"
    })
    return res.json({
      succes: true,
      data: updatedBook,
      message: "Libro actualizado con exito pa 👌😘"
    })

  } catch (error) {
    const err = error as Error;
    return res.status(500).json({
      success: false,
      message: err.message
    });
  }
}

export { getAllBooks, deleteBook, createBook, updateBook }