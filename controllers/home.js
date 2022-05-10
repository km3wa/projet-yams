import { decrementCounter, decrementPatisserie, getCounter, getRandomPatisserie } from "../utils/db";
import { checkResult, diceThrow, winMessage } from "../utils/utils";

export default async (req, res) => {
  const counter = await getCounter();
  const isFinished = counter.count === 0 ? true : false;
  const patisseries = [];
  let test = [];
  let test2 = 0;
  let test3 = "";

  if (!isFinished) {
    test = diceThrow();
    test2 = checkResult(test);
    test3 = winMessage(test2);
    
    for (let i = 0; i<test2; i++) {
      const p = await getRandomPatisserie();
      await decrementPatisserie(p);
      await decrementCounter(counter);
      patisseries.push(p);
    }
  }

  res.render('index', { isFinished, title: 'Lancer de dés', message: test, msg2: test3 ?? "", patisseries });
};
