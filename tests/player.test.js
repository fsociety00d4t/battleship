import { ship } from "../src/ship";
import { gameBoard } from "../src/gameBoard";
import { player } from "../src/player";

let Ship;
const playersGamBoard = gameBoard();
const AIGameBoard = gameBoard();
let Player = player();
describe("get the correct turn", () => {
  test("not even turn", () => {
    Player.changeTurn(5);
    Player.determineTurn();
    expect(Player.getTurn()).toBe("AI");
  });
  test("even turn", () => {
    Player.changeTurn(4);
    Player.determineTurn();
    expect(Player.currentTurn).toBe("player");
  });
  test("play again if hit - player", () => {
    Ship = ship(3, "vertical");
    AIGameBoard.placeShip(Ship, 0, 5);
    Player.changeTurn(2);
    Player.playerTurn(AIGameBoard, 0, 6);
    Player.determineTurn();
    expect(Player.getTurn()).toBe("player");
  });
  test("play again if hit - AI", () => {
    Ship = ship(3, "vertical");
    playersGamBoard.placeShip(Ship, 0, 5);
    Player.changeTurn(3);
    Player.AITurn(playersGamBoard, 0, 6);
    Player.determineTurn();
    expect(Player.getTurn()).toBe("AI");
  });
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
    expect(AIGameBoard.missed).toContainEqual([1, 1]);
  });
});

describe("AI turn", () => {
  let y = ship(3, "horizontal");
  playersGamBoard.placeShip(y, 3, 5);
  test("AI hit a ship", () => {
    Player.AITurn(playersGamBoard, 4, 5);
    expect(y.getHits()).toBe(1);
  });
  /*test("AI hitted a nearby cell after a hit", () => {
    player.AIturn = playersGamBoard.receiveAttack(5, 5);
    player.AITurn();
    expect(playersGamBoard.missed).toContainEqual[];
  }); */
  test("AI missed a ship", () => {
    Player.AITurn = playersGamBoard.receiveAttack(9, 9);
    expect(playersGamBoard.missed).toContainEqual([9, 9]);
  });
});
