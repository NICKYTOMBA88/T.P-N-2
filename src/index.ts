import express from "express";
import { model, Schema } from "mongoose";
import { connectDB } from "./config/mongo";
import { booksRoutes } from "./routes/booksRoutes";


process.loadEnvFile()


const PORT = process.env.PORT || 3000


const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedYear: { type: Number, required: true },
  genre: { type: String },
  available: { type: Boolean, default: true }
})


const book = model("books", bookSchema)


const app = express()


app.use("/api/books", booksRoutes)


app.listen(PORT, () => {
  console.log(`✅ Servidor en escucha en el puerto http://localhost:${PORT}`)
  connectDB()
  console.log(process.env.URI_DB)
})
