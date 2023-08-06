const boardStuff = require('../src/board');
const BOARDSIZE = boardStuff.BOARDSIZE;
const NewBoard = boardStuff.GameBoard;

function Player() {
  const playerBoard = NewBoard();

  const attackResults = Array(BOARDSIZE);
  for (let i = 0; i < BOARDSIZE; i++) {
    attackResults[i] = Array(BOARDSIZE);
  }

  function takeAttack(x, y) {
    return playerBoard.receiveAttack(x, y);
  }

  function makeAttack() {
    // this is actually going to be the return value
    // from the receiveAttack function of the enemy board
    // Does this need to wait on UI input for human players?
    // Similarly, waits on AI decision?
  }

  function updateAttackResults(x, y, result) {
    return (attackResults[x][y] = result);
  }

  return {
    playerBoard,
    attackResults,
    updateAttackResults,
    takeAttack,
    makeAttack,
  };
}

module.exports = Player;
