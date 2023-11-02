import { ship } from "./ship";

let occupiedCoords = [];
let cells = [];
let missed = [];
let hit = [];

function gameBoard() {
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

  const isValid = (x, y) => {
    return !cells.some((e, i) => e[0] === x && e[1] === y);
  };

  const placeShip = (ship, x, y) => {
    if (isValid(x, y)) {
      place(ship, x, y);
      return true;
    } else {
      return false;
    }
  };

  const receiveAttack = (x, y) => {
    let test = occupiedCoords.find((e, i) => e[1] === x && e[2] === y);
    if (test != undefined) {
      if (hit.find((e, i) => e[0] === x && e[1] === y) === undefined) {
        test[0].increaseHit();
        hit.push([x, y]);
      }
    } else {
      if (missed.find((e, i) => e[0] === x && e[1] === y) === undefined)
        missed.push([x, y]);
    }
  };

  const areAllSunk = () => occupiedCoords.length === hit.length;

  return { placeShip, receiveAttack, missed, areAllSunk, occupiedCoords };
}

export { gameBoard };
