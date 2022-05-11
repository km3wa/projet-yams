import { User } from "../Models/Patisserie";

export default async (req, res) => {
  const { email, password } = req.body;

  User.findOne({email, password}).then(doc => console.log(doc));
  //console.log(email);
  //console.log(password);

  res.json(200);
};
