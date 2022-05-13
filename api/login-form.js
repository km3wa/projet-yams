import { getOnePlayer } from "../utils/db_utils/player";

export default async (req, res) => {
  const { email, password } = req.body;

  const player = await getOnePlayer(email, password);
  if (player) {
    req.session.email = player.email;
    req.session.password = player.password;
    return res.redirect('/');
  } else return res.json(400);
};
