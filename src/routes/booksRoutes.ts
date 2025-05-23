import { Router } from "express";
import { getAllBooks, deleteBook, createBook, updateBook, getBookById } from "../controllers/booksControllers";

const booksRoutes = Router();


booksRoutes.get("/", getAllBooks);

booksRoutes.get("/:id", getBookById);

booksRoutes.post("/", createBook);

booksRoutes.delete("/:id", deleteBook);

booksRoutes.patch("/:id", updateBook);


export { booksRoutes };
