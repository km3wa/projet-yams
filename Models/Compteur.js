import mongoose from "mongoose";

const { model, Schema } = mongoose;

const CompteurSchema = new Schema({
  count: Number
});

const Compteur = model("compteurs", CompteurSchema);

export { CompteurSchema, Compteur };