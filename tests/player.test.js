import { ship } from "../src/ship";
import { gameBoard } from "../src/gameBoard";
import { player } from "../src/player";

describe("get the correct turn", () => {
  test("not even turn", () => {
    player.turnCount = 5;
    expect(player.currentTurn).toBe("AI");
  });
  test("even turn", () => {
    player.turnCount = 2;
    expect(player.currentTurn).toBe("player");
  });
});
