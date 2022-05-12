import mongoose from "mongoose";

const { model, Schema } = mongoose;

const PlayerSchema = new Schema({
  email: String,
  password: String,
  has_played: Boolean
})

const Player = model("players", PlayerSchema);

export { PlayerSchema, Player };