import mongoose from "mongoose";

const { model, Schema } = mongoose;

const PatisserieSchema = new Schema({
  name: String,
  number: Number,
  order: Number
});

const CompteurSchema = new Schema({
  count: Number
});

const PlayerSchema = new Schema({
  email: String,
  password: String,
  has_played: Boolean
})

const Patisserie = model("patisseries", PatisserieSchema);
const Compteur = model("compteurs", CompteurSchema);
const Player = model("players", PlayerSchema);


export { PatisserieSchema, Patisserie, CompteurSchema, Compteur, PlayerSchema, Player }