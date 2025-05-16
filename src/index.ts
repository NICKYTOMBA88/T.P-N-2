import express from "express";
import { connectDB } from "./config/mongo";
import { booksRoutes } from "./routes/booksRoutes";


process.loadEnvFile()

const PORT = process.env.PORT || 3000

const app = express()

app.use("/api/books", booksRoutes)


app.listen(PORT, () => {
  console.log(`✅ Servidor en escucha en el puerto http://localhost:${PORT}`)
  connectDB()
  console.log(process.env.URI_DB)
})
