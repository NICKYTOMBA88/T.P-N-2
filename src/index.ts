import express from "express";
import { connectDB } from "./config/mongo";
import { booksRoutes, } from "./routes/booksRoutes";
import { authRouter } from "./routes/authRoutes";


process.loadEnvFile();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use("/api/books", booksRoutes);
app.use("/api/auth", authRouter);



app.listen(PORT, () => {
  console.log(`✅ Servidor en escucha en el puerto http://localhost:${PORT}/api/books`);
  connectDB();
  console.log(process.env.URI_DB);
});
