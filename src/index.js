import { ship } from "../src/ship";
import { gameBoard } from "../src/gameBoard";
import { player } from "../src/player";

//create boards
const container = document.querySelector(".grids");
const playerGridDOM = document.querySelector(".player-grid");
const AIGridDOM = document.querySelector(".AI-grid");
let Player = player();
//let AI = player();
let playerGrid = gameBoard();
let AIGrid = gameBoard();

//renderGrids();
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

init();

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
  console.log("it is " + AIGrid.getOccupiedCells());
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

function takeTurns() {
  let current = Player.getTurn();
  //while (!gameOver) {

  while (Player.getTurn() === current) {
    if (current === "player") {
      // let x = prompt();
      // let y = x.split(",");
      //  makeAIBoardAvailable();
      // AIGrid.receiveAttack(y[0], y[1]);
      // AIGrid.receiveAttack(4, 5);
      //   Player.playerTurn(AIGrid, 5, 5);
    }
  }
  // }
}

function playerAttacks(e) {
  console.log("no player");
  if (Player.getTurn() === "player") {
    let coords = e.id.split(",");
    if (Player.playerTurn(AIGrid, Number(coords[0]), Number(coords[1]))) {
      let [...arr] = AIGrid.getHit();
      [...arr].forEach((el) => {
        if (el[0] === Number(coords[0]) && el[1] === Number(coords[1])) {
          e.classList.add("hitted-cell");
        }
      });
    } else AIAttacks();
  } //else AIAttacks();
}

function AIAttacks(e) {
  console.log(`e is ${e}`);
  let res;
  if (Player.getTurn() === "AI") {
    if (e === undefined) {
      res = Player.AITurn(playerGrid);
    } else {
      res = Player.AITurn(playerGrid, e[0], e[1]);
    }
    //TEMP CODE
    if (res[1] === "AlreadyPlayed") {
      let PlayerNodes = playerGridDOM.childNodes;
      [...PlayerNodes].forEach((e) => {
        let arr = e.id.split(",");
        if (res[0][0] === Number(arr[0]) && res[0][1] === Number(arr[1])) {
          console.log("yellow");
          setTimeout(() => {
            e.style.backgroundColor = "yellow";
          }, 0);
          // e.style.backgroundColor = "yellow";
        }
      });
      AIAttacks();
    } else if (res[1] === "missed") {
      let PlayerNodes = playerGridDOM.childNodes;
      [...PlayerNodes].forEach((e) => {
        let arr = e.id.split(",");
        if (res[0][0] === Number(arr[0]) && res[0][1] === Number(arr[1])) {
          console.log("pink");
          setTimeout(() => {
            e.style.backgroundColor = "pink";
          }, 0);
          //e.style.backgroundColor = "pink";
        }
      });
    } else if (res[1] === "hit") {
      let [getRandom] = Player.getRandomAdjacent(
        res[0][0],
        res[0][1],
        playerGrid
      );
      let PlayerNodes = playerGridDOM.childNodes;
      [...PlayerNodes].forEach((e) => {
        let arr = e.id.split(",");

        if (Number(arr[0]) === res[0][0] && Number(arr[1]) === res[0][1]) {
          setTimeout(() => {
            e.classList.add("hitted-cell");
          }, 0);
        }
      });
      console.log(`GET RANDOM IS ${getRandom}`);
      AIAttacks(getRandom);
    }
  }
}

function gameOver() {}

let AInodes = AIGridDOM.childNodes;
[...AInodes].forEach((e, i) => {
  e.addEventListener("click", function () {
    playerAttacks(e);
  });
});
/*let PlayerNodes = playerGridDOM.childNodes;
[...PlayerNodes].forEach((e, i) => {
  e.addEventListener("click", function () {
    AIAttacks(e);
  });
}); */

function init() {
  renderGrids();
  createAIShips();
  RenderGridsAfterChange();
  //takeTurns();
}
