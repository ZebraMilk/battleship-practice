const game = require('../src/gameLoop');

it('Starts a game', () => {
  const testGame = game();
  expect(testGame.newGame()).toBe('Game started!');
});

it('Starts a game with two players', () => {
  const testGame = game();
  expect(testGame.playerOne).not.toBe(undefined);
  expect(testGame.playerTwo).not.toBe(undefined);
});

it('Requests an attack coordinate from a player', () => {
  const testGame = game();
  // set up a mock here? for those promise resolutions?
  // what needs mocking?
  // just need to make sure it passes values around appropriately
  // This gets harder to test as a unit
  // sighting along the edge of the space capsule...
  // How do I do that when the space capsule bounces around other space capsules?
});

it('Updates and tracks the current player', () => {
  const testGame = game();
  expect(testGame.currentPlayer).toEqual(testGame.playerOne);
  testGame.switchTurns();
  expect(testGame.currentPlayer).toEqual(testGame.playerTwo);
  testGame.switchTurns();
  testGame.switchTurns();
  testGame.switchTurns();
  expect(testGame.currentPlayer).toEqual(testGame.playerOne);
});
