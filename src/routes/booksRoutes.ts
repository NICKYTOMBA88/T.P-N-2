import { Router } from "express";
import { getAllBooks, deleteBook, createBook, updateBook } from "../controllers/booksControllers";

const booksRoutes = Router();

booksRoutes.get("/", getAllBooks);
booksRoutes.post("/", createBook); // ✅ Ruta para crear libro
booksRoutes.delete("/:id", deleteBook); // ✅ Corregido ":id"
booksRoutes.put("/:id", updateBook);

export { booksRoutes };
