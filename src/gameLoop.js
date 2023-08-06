const NewPlayer = require('./player');
const computerPlayer = require('./computer');

function Game() {
  function newGame() {
    return 'Game started!';
  }

  const playerOne = NewPlayer();
  const playerTwo = computerPlayer;

  let currentPlayer = playerOne;

  function switchTurns() {
    if (this.currentPlayer === this.playerOne) {
      return (this.currentPlayer = this.playerTwo);
    } else {
      return (this.currentPlayer = this.playerOne);
    }
  }

  function getPlayerChoice(player) {
    return { x, y };
  }

  return {
    newGame,
    playerOne,
    playerTwo,
    currentPlayer,
    switchTurns,
  };
}

module.exports = Game;
