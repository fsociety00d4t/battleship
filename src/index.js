import { ship } from "../src/ship";
import { gameBoard } from "../src/gameBoard";
import { player } from "../src/player";

//create boards
const container = document.querySelector(".grids");
const playerGridDOM = document.querySelector(".player-grid");
const AIGridDOM = document.querySelector(".AI-grid");
let Player = player();
let AI = player();
let playerGrid = gameBoard();
let AIGrid = gameBoard();
/*
if (length === 5) return "carrier";
    if (length === 4) return "battleship";
    if (length === 3) return "cruiser";
    if (length === 3) return "submarine"; //come back here
    if (length === 2) return "patrol boat";
    */
//temp predetermined coordinates
//player
//create ships
let battleship = ship(4, "horizontal");
let cruiser = ship(3, "vertical");
let submarine = ship(3, "horizontal");
let patrol = ship(2, "vertical");
//place ships
playerGrid.placeShip(battleship, 1, 0);
playerGrid.placeShip(cruiser, 3, 5);
playerGrid.placeShip(submarine, 4, 8);
playerGrid.placeShip(patrol, 7, 6);

//AI
//create Random Ships
function createAIShips() {
  let direction = ["horizontal", "vertical"];
  let battleship = ship(
    4,
    direction[Math.floor(Math.random() * direction.length)]
  );
  let cruiser = ship(
    3,
    direction[Math.floor(Math.random() * direction.length)]
  );
  let submarine = ship(
    3,
    direction[Math.floor(Math.random() * direction.length)]
  );
  let patrol = ship(2, direction[Math.floor(Math.random() * direction.length)]);

  console.log(battleship);
  console.log(cruiser);
  console.log(submarine);
  console.log(patrol);

  //place ships
  let count = 0;
  while (true) {
    if (
      AIGrid.placeShip(
        battleship,
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10)
      )
    )
      break;
  }
  while (true) {
    if (
      AIGrid.placeShip(
        cruiser,
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10)
      )
    )
      break;
  }
  while (true) {
    if (
      AIGrid.placeShip(
        submarine,
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10)
      )
    )
      break;
  }

  while (true) {
    if (
      AIGrid.placeShip(
        patrol,
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10)
      )
    )
      break;
  }
}

function renderGrids() {
  for (let x = 9; x >= 0; x--) {
    let playerCell = document.createElement("div");

    for (let y = 0; y < 10; y++) {
      let playerCell = document.createElement("div");
      playerGridDOM.appendChild(playerCell).className = "player-grid-item";
      playerCell.innerText = `${y},${x}`;
      playerCell.id = `${y},${x}`;
    }
  }

  for (let x = 9; x >= 0; x--) {
    let AICell = document.createElement("div");

    for (let y = 0; y < 10; y++) {
      let AICell = document.createElement("div");
      AIGridDOM.appendChild(AICell).className = "AI-grid-item";
      AICell.innerText = `${y},${x}`;
      AICell.id = `${y},${x}`;
    }
  }
}

function RenderGridsAfterChange() {
  //PLAYER
  const Pcells = window.document.querySelectorAll(".player-grid-item");
  let shipsCords = playerGrid.getCells();
  Pcells.forEach((el, i) => {
    if (shipsCords.some((e) => e.toString() === el.id)) {
      el.classList.add("has-ship");
    }
  });

  //AI
  const AIcells = window.document.querySelectorAll(".AI-grid-item");
  let shipsCordsAI = AIGrid.getCells();
  shipsCordsAI.forEach((e) => {});
  AIcells.forEach((el, i) => {
    if (shipsCordsAI.some((e) => e.toString() === el.id)) {
      el.classList.add("has-ship");
    }
  });
}

/*function takeTurns() {
  while (!gameOver) { ////
    turn = player;
  }
} */

function init() {
  renderGrids();
  createAIShips();
  RenderGridsAfterChange();
  takeTurns();
}

init();
