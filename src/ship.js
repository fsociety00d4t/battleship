function ship(length, direction) {
  let typeOfShip = () => {
    if (length === 5) return "carrier";
    if (length === 4) return "battleship";
    if (length === 3) return "cruiser";
    if (length === 3) return "submarine"; //come back here
    if (length === 2) return "patrol boat";
  };

  let hits = 0;
  const getHits = () => hits;

  const increaseHit = () => {
    hits++;
  };

  const isSunk = () => {
    if (hits >= length) return true;
    else return false;
  };

  return { length, hits, direction, typeOfShip, getHits, increaseHit, isSunk };
}

export { ship };
