import { ship } from "../src/ship";

const x = ship(4);
x.increaseHit();
x.increaseHit();
//x.isSunk;
//console.log(x);
//console.log(x.isSunk());
console.log(x.getHits());
