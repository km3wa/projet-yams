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

const Patisserie = model("patisseries", PatisserieSchema);
const Compteur = model("compteurs", CompteurSchema);

/*const UserShema = new Schema({
  firstName: {
    String,
    require: true,
  },
  lastName: {
    String,
    require: true,
  },
  email: {
    String,
    require: true,
  },
  password: {
    String,
    require: true,
  },
});*/

export { PatisserieSchema, Patisserie, CompteurSchema, Compteur }