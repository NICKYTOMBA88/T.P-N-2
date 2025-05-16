import { Router } from "express";

const booksRoutes = Router();

booksRoutes.get("/", (req, res) => {
  res.send("Ruta de libros funcionando");
});

export { booksRoutes };
