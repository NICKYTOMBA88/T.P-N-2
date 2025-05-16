import express from "express";
import { model, Schema } from "mongoose";
import { connectDB } from "./mongo";


process.loadEnvFile()

const PORT = process.env.PORT || 3000

const connectDB = async () => {
  try {
    await connect(URI_DB)
    console.log("Connectado a la base de datos")
  } catch (error) {
    console.log("Error al conectarse a mongodb", error)
  }
}

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedYear: { type: Number, required: true },
  genre: { type: String },
  available: { type: Boolean, default: true }
})

const book = model("books", bookSchema)

const app = express()

app.get("/api/books", async (req, res): Promise<any> => {
  try {
    const books = await book.find()
    return res.json({
      succes: true,
      data: books,
      message: "recuperdando libros"
    })
  } catch (error) {
    const err = error as Error
    return res.status(500).json({
      succes: false,
      message: err.message
    })

  }
})

app.listen(PORT, () => {
  console.log(`✅ Servidor en escucha en el puerto http://localhost:${PORT}`)
  connectDB()
})
