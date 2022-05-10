import mongoose from "mongoose";

const { model, Schema } = mongoose;

const PatisserieSchema = new Schema({
  name: String,
  number: Number,
  order: Number
});

const Patisserie = model("patisseries", PatisserieSchema);

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

export { PatisserieSchema, Patisserie }