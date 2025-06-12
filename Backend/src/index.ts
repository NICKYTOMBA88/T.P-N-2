import express from "express";
import { connectDB } from "./config/mongo";
import { booksRoutes, } from "./routes/booksRoutes";
import { authRouter } from "./routes/authRoutes";
import authMiddleware from "./middleware/authMiddleware";
import cors from "cors"
process.loadEnvFile();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors())

app.use(express.json());


app.use("/api/books", authMiddleware, booksRoutes);
app.use("/api/auth", authRouter);



app.listen(PORT, () => {
  console.log(`✅ Servidor en escucha en el puerto http://localhost:${PORT}/api/books`);
  connectDB();
  console.log(process.env.URI_DB);
});
