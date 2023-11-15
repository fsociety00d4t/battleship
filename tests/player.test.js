import { ship } from "../src/ship";
import { gameBoard } from "../src/gameBoard";
import { player } from "../src/player";

let Ship;
const playersGamBoard = gameBoard();
const AIGameBoard = gameBoard();
let Player = player();
describe("get the correct turn", () => {
  test("player Turn", () => {
    Player.changeTurn("player");
    expect(Player.getTurn()).toBe("player");
  });
  test("ai turn", () => {
    Player.changeTurn("ai");
    expect(Player.getTurn()).toBe("ai");
  });
  /* test("play again if hit - player", () => {
    Ship = ship(3, "vertical");
    AIGameBoard.placeShip(Ship, 0, 5);
    Player.playerTurn(AIGameBoard, 0, 6);
    expect(Player.getTurn()).toBe("player");
  });
  test("play again if hit - AI", () => {
    Ship = ship(3, "vertical");
    playersGamBoard.placeShip(Ship, 0, 5);
    Player.AITurn(playersGamBoard, 0, 6);
    expect(Player.getTurn()).toBe("ai");
  }); */
});

describe("players turn", () => {
  let x = ship(3, "horizontal");
  AIGameBoard.placeShip(x, 3, 5);
  test("player hit a ship", () => {
    Player.playerTurn(AIGameBoard, 5, 5);
    expect(x.getHits()).toBe(1);
  });
  test("player missed a ship", () => {
    Player.playerTurn = AIGameBoard.receiveAttack(1, 1);
    expect(AIGameBoard.getMissed()).toContainEqual([1, 1]);
  });
});

describe("AI turn", () => {
  let y = ship(3, "horizontal");
  playersGamBoard.placeShip(y, 3, 5);
  test("AI hit a ship", () => {
    Player.AITurn(playersGamBoard, 4, 5);
    expect(y.getHits()).toBe(1);
  });
  /* test("AI hitted a nearby cell after a hit", () => {
    expect([
      [2, 5],
      [4, 5],
      [3, 4],
      [3, 6],
    ]).toContain(Player.getRandomAdjacent(3, 5, playersGamBoard));
  }); */
  /*  test("AI hitted a nearby cell after a hit", () => {
    let [...test] = Player.getRandomAdjacent(3, 5, playersGamBoard);
    console.log([...test]);
    expect(test).toContain([[2, 5]] || [[3, 6]]);
  }); */
  test("AI missed a ship", () => {
    Player.AITurn = playersGamBoard.receiveAttack(9, 9);
    expect(playersGamBoard.getMissed()).toContainEqual([9, 9]);
  });
});
