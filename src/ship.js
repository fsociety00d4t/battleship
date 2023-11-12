function ship(length, direction, name) {
  let hits = 0;
  const getHits = () => hits;

  const increaseHit = () => {
    hits++;
  };

  const isSunk = () => hits >= length;

  return { length, hits, direction, name, getHits, increaseHit, isSunk };
}

export { ship };
