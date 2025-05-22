import { Router } from "express";
import { getAllBooks } from "../controllers/booksControllers";

const booksRoutes = Router();

booksRoutes.get("/", getAllBooks);

export { booksRoutes };
