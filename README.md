# Game Loop

1. tell currentPlayer to makeAttack

- (waits for human or computer player to make choice of coordinates)

1. tell the defending player to takeAttack at those coordinates

- this calls receiveAttack on the defender's board, and returns 'miss', 'hit', or 'sunk' to the player, then to the game

3. update the attacker's `attacks` list with the returned value

- here is where I get a little confused.

I want makeAttack to pass a set of coordinates to the `gameLoop` and then update their `attacks` array at those coordinates with the return value. I don't want to import/require `gameLoop` in my `Player` module, because they would depend on each other. Is there another way? Can I take the `makeAttack` function out of the `Player` objects without violating step 3 of the project specs?
