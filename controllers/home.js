import { decrementPatisserie, getRandomPatisserie } from "../utils/db";
import { checkResult, diceThrow, winMessage } from "../utils/utils";

export default async (req, res) => {
  const test = diceThrow();
  const test2 = checkResult(test);
  const test3 = winMessage(test2);
  
  for (let i = 0; i<test2; i++) {
    const p = await getRandomPatisserie();
    await decrementPatisserie(p);
    patisseries.push(p);
  }

  res.render('index', { anyLeft, title: 'Lancer de dés', message: test, msg2: test3, patisseries });
};
