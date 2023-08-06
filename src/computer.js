/*
if the opponent is not a human
This just acts as the logic for making choices about attacking next
Computer only can see its board, its previous guesses and their results

*/

// import Player from './player';
const newPlayer = require('./player');

const computerPlayer = newPlayer();

computerPlayer.checkAttack = function (x, y) {
  if (this.attackResults[x][y] !== undefined) {
    return 'Already attacked this square';
  } else {
    return makeAttack(x, y);
  }
};

computerPlayer.randomAttack = function () {
  const x = (Math.random() * 100000) % 10;
  const y = (Math.random() * 100000) % 10;
  return { x, y };
};

module.exports = computerPlayer;
