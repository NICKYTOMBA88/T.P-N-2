import { Router } from "express";
import { getAllBooks, deleteBook, createBook, updateBook } from "../controllers/booksControllers";

const booksRoutes = Router();


booksRoutes.get("/", getAllBooks);

booksRoutes.post("/", createBook);

booksRoutes.delete("/:id", deleteBook);

booksRoutes.put("/:id", updateBook);


export { booksRoutes };
