/*
if the opponent is not a human
This just acts as the logic for making choices about attacking next
Computer only can see its board, its previous guesses and their results

*/

// import Player from './player';
const newPlayer = require("./player");

const computerPlayer = newPlayer();

computerPlayer.attack = (x, y) => {
  return "Attack made";
};

computerPlayer.checkAttack = function (x, y) {
  if (this.attacks[x][y] !== undefined) {
    return "Already attacked this square";
  } else {
    return makeAttack(x, y);
  }
};

computerPlayer.makeChoice = function () {
  const attempt = this.randomAttack();
  if (attempt.valid === true) {
    return { x: attempt[x], y: attempt[y] };
  }
  // try again with incremented values?
  // basic search, just increment the y value row by row?
  let ogx = attempt.x;
  let ogy = attempt.y;
  for (let i = ogx + 1; i % 10 !== ogx; i++) {
    for (let j = ogy + 1; j % 10 !== ogy; j++) {
      if (this.canAttack(i, j) === true) {
        return { x: i, y: j };
      }
    }
  }
};

module.exports = computerPlayer;
