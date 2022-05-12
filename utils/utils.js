const singleDieThrow = () => Math.floor(Math.random() * 6) + 1;


const diceThrow = () => {
  const dice = [];
  for (let i = 0; i < 5; i++) {
    dice.push(singleDieThrow());
  }

  return dice;
}


const checkResult = (numArray) => {
  if (numArray.length !== 5) return 0; // retourner une erreur serait préférable

  const stats = [0, 0, 0, 0, 0, 0];

  for (let i = 0; i <= stats.length; i++) {
    for (const num of numArray) {
      if (num === i + 1) stats[i]++;
    }
  }

  if (stats.includes(5)) return 3
  else if (stats.includes(4)) return 2
  else if (stats.filter(val => val >= 2).length >= 2) return 1
  else return 0;
}


const winMessage = (num) => {
  switch (num) {
    case 3: return "Yam's !! Vous obtenez 3 pâtisseries !"
    case 2: return "Carré ! Vous obtenez 2 pâtisseries !"
    case 1: return "Double paire ! Vous obtenez 1 pâtisserie"
    case 0: return "Désolé, vous avez perdu."
    default: return "Il y a eu une erreur. Veuillez recommencer."
  }
}

export { singleDieThrow, diceThrow, checkResult, winMessage };