import { model, Schema } from "mongoose";

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedYear: { type: Number, required: true },
  genre: { type: String },
  available: { type: Boolean, default: true }
})

const book = model("Book", bookSchema);


export { book, };