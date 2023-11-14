import { ship } from "./ship";

function gameBoard() {
  let occupiedCoords = [];
  let cells = [];
  let missed = [];
  let hit = [];

  const place = (ship, x, y) => {
    if (ship.direction === "horizontal") {
      for (let i = 0; i < ship.length; i++) {
        occupiedCoords.push([ship, x + i, y]);
        cells.push([x + i, y]);
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        occupiedCoords.push([ship, x, y + i]);
        cells.push([x, y + i]);
      }
    }
  };

  const isValid = (ship, x, y) => {
    let arr = [];
    let flag = false;
    for (let i = 0; i < ship.length; i++) {
      if (ship.direction === "horizontal") arr.push([x + i, y]);
      else arr.push([x, y + i]);
    }

    arr.forEach((el) => {
      if (cells.some((e, i) => e[0] === el[0] && e[1] === el[1])) flag = true;
    });

    return (
      flag === false &&
      (ship.direction === "horizontal"
        ? x + ship.length - 1 < 10
        : y + ship.length - 1 < 10)
    );
  };

  const placeShip = (ship, x, y) => {
    console.log(ship, x, y);
    if (isValid(ship, x, y)) {
      place(ship, x, y);
      console.log("valid");
      return true;
    } else {
      return false;
    }
  };

  const receiveAttack = (x, y) => {
    let [...arr] = getOccupiedCells();
    let test = arr.find((e, i) => e[1] === x && e[2] === y);
    if (test != undefined) {
      if (hit.find((e, i) => e[0] === x && e[1] === y) === undefined) {
        hit.push([x, y]);
        test[0].increaseHit();
      }
      return true;
    } else {
      let missedArray = getMissed();
      if (missedArray.find((e, i) => e[0] === x && e[1] === y)) {
        return undefined;
      } else {
        missed.push([x, y]);
        cells.push([x, y]);
        return false;
      }
    }
  };

  const areAllSunk = () => occupiedCoords.length === hit.length;

  const getCells = () => {
    return cells;
  };

  const getOccupiedCells = () => {
    return occupiedCoords;
  };

  const getHit = () => {
    return hit;
  };

  const getMissed = () => {
    return missed;
  };

  return {
    placeShip,
    receiveAttack,
    areAllSunk,
    getCells,
    getOccupiedCells,
    getHit,
    getMissed,
  };
}

export { gameBoard };
