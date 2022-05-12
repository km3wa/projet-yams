import mongoose from "mongoose";

const { model, Schema } = mongoose;

const PatisserieSchema = new Schema({
  name: String,
  number: Number,
  order: Number
});

const Patisserie = model("patisseries", PatisserieSchema);

export { PatisserieSchema, Patisserie };