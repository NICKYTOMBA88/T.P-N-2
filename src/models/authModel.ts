import { Schema, model } from "mongoose";

const authShema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, },
})

const auth = model("User", authShema);

export { auth }
