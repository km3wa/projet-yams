import { decrementPatisserie, getRandomPatisserie } from "../../utils/db_utils/patisseries";
import { decrementCompteur, getCompteur } from "../../utils/db_utils/compteur";

import { checkResult, diceThrow, winMessage } from "../../utils/utils";
import { getOnePlayer, setHasPlayed } from "../../utils/db_utils/player";

export default async (req, res) => {
  const { email, password } = req.session;

  if (email && password) {
    const player = await getOnePlayer(email, password);
    console.log(player);
    if (player.has_played === true) return res.redirect('play/has_played');

    const compteur = await getCompteur();
    if (compteur.count <= 0) return res.redirect('play/end');
    
    const patisseries = [];

    const dice = diceThrow();
    const result = checkResult(dice);
    const message = winMessage(result);
      
    for (let i = 0; i<result; i++) {
      const p = await getRandomPatisserie();
      await decrementPatisserie(p);
      await decrementCompteur(compteur);
      patisseries.push(p);
    }
      
    setHasPlayed(email);

    return res.render('play/index', { title: 'Lancer de dés', dice, message, patisseries });

  } else return res.redirect('/login');
};
