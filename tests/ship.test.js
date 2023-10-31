import { ship } from "../src/ship";
//const Ship = require("../src/ship");

describe("create-ship", () => {
  let x;
  beforeEach(() => {
    x = ship(4);
  });
  test("get correct length", () => {
    expect(x.length).toBe(4);
  });

  test("increase the hit", () => {
    x.increaseHit();
    expect(x.getHits()).toBe(1);
  });

  test("no sunked ship - length 4, hits 1", () => {
    expect(x.isSunk()).toEqual(false);
  });

  test("sunk ship - length 4, hits 4", () => {
    x.increaseHit();
    x.increaseHit();
    x.increaseHit();
    x.increaseHit();
    expect(x.isSunk()).toEqual(true);
  });
});
