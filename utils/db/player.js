import players from "../../constants/players";
import { Player } from "../../Models/Player";

const getOnePlayer = (email, password) => Player.findOne({ email, password }).then(doc => doc);
const setHasPlayed = (email) => Player.findOneAndUpdate({ email }, { $set: { has_played: true } }, {}, (err) => console.log(err));

const resetPlayers = () => {
  Player.deleteMany({}, (err) => console.log(err ?? "players reset"));
  Player.insertMany(players);
}

export { getOnePlayer, setHasPlayed, resetPlayers };
