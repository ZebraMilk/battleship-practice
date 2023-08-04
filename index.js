function NewShip(shipLength) {
  const length = shipLength;
  let hitCount = 0;
  let isSunk = false;

  function checkIfSunk() {
    if (this.hitCount < this.length) {
      return false;
    } else {
      this.isSunk = true;
      return true;
    }
  }

  function hit() {
    if (this.checkIfSunk() === false) {
      this.hitCount++;
    }
    return this.hitCount;
  }

  return {
    length,
    hitCount,
    isSunk,
    hit,
    checkIfSunk,
  };
}
