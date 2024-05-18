const boardStuff = require("../src/board");
const BOARDSIZE = boardStuff.BOARDSIZE;
const NewBoard = boardStuff.GameBoard;

function Player() {
  const playerBoard = NewBoard();
  const allShipsSunk = playerBoard.allShipsSunk;

  const attackResults = Array(BOARDSIZE);
  for (let i = 0; i < BOARDSIZE; i++) {
    attackResults[i] = Array(BOARDSIZE);
  }

  function takeAttack(x, y) {
    return playerBoard.receiveAttack(x, y);
  }

  function makeAttack(x, y) {
    // this is actually going to be the return value
    // from the receiveAttack function of the enemy board

    attacks[x][y] = "Attack made";
  }

  return {
    playerBoard,
    attackResults,
    updateAttackResults,
    takeAttack,
    canAttack,
    allShipsSunk,
  };
}

module.exports = Player;
