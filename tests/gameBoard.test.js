import { gameBoard } from "../src/gameBoard";
import { ship } from "../src/ship";

let x;
let game = gameBoard();
beforeEach(() => {});
afterEach(() => {});
describe("valid inputs", () => {
  test("place ship horizontal", () => {
    x = ship(4, "horizontal");
    expect(game.placeShip(x, 3, 5)).toBe(true);
  });
  test("place ship vertical", () => {
    x = ship(4, "vertical");
    expect(game.placeShip(x, 1, 6)).toBe(true);
  });
});

describe("occupied cells", () => {
  test("placing in occupied cells", () => {
    expect(game.placeShip(x, 4, 5)).toBe(false);
  });
});

describe("determine attack", () => {
  let y = ship(3, "vertical");

  test("attacking an occupied cell, increaces hit", () => {
    game.placeShip(y, 9, 4);
    game.receiveAttack(9, 5);
    expect(y.getHits()).toBe(1);
  });

  test("attacking an empty cell", () => {
    game.receiveAttack(9, 0);
    expect(game.getMissed()).toContainEqual([9, 0]);
  });

  test("dont increase hit if the cells has already been attacked", () => {
    game.receiveAttack(9, 5);
    game.receiveAttack(9, 5);
    expect(y.getHits()).toBe(1);
  });
});

describe("have all ships sunk", () => {
  test("one ship is sunk", () => {
    game.receiveAttack(3, 5);
    game.receiveAttack(4, 5);
    game.receiveAttack(5, 5);
    game.receiveAttack(6, 5);
    expect(game.areAllSunk()).toBe(false);
  });

  test("all ships have sunk", () => {
    game.receiveAttack(1, 6);
    game.receiveAttack(1, 7);
    game.receiveAttack(1, 8);
    game.receiveAttack(1, 9);
    game.receiveAttack(9, 4);
    game.receiveAttack(9, 5);
    game.receiveAttack(9, 6);
    expect(game.areAllSunk()).toBe(true);
  });
});
