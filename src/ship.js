function ship(length) {
  let hits = 0;
  const getHits = () => hits;

  const increaseHit = () => hits++;

  const isSunk = () => {
    if (hits >= length) return true;
    else return false;
  };

  return { length, hits, getHits, increaseHit, isSunk };
}

export { ship };
