import { Router } from "express";
import { getAllBooks, deleteBook, createBook } from "../controllers/booksControllers";

const booksRoutes = Router();

booksRoutes.get("/", getAllBooks);
booksRoutes.post("/", createBook); // ✅ Ruta para crear libro
booksRoutes.delete("/:id", deleteBook); // ✅ Corregido ":id"

export { booksRoutes };
