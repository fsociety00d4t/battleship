import { ship } from "../src/ship";
import { gameBoard } from "../src/gameBoard";

const x = ship(4, "horizontal");
x.increaseHit();
x.increaseHit();
//x.isSunk;
//console.log(x);
//console.log(x.isSunk());
console.log(x.getHits());
let game = gameBoard();
game.placeShip(x, 3, 5);
console.log(game.cells);
