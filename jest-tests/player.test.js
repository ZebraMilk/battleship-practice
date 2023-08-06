const player = require('../src/player');

// maybe make a Mock here?

it('Makes a board for the player', () => {
  const testPlayer = player();
  expect(testPlayer.playerBoard).not.toBe(undefined);
});

it('Can receive attack', () => {
  const testPlayer = player();
  expect(testPlayer.takeAttack(1, 1)).toBe('miss');
});

it('Records whether an attempted attack was a hit or miss', () => {
  // Need to flesh out the gameloop first?
});
