import { ship } from "../src/ship";
import { gameBoard } from "../src/gameBoard";
import { player } from "../src/player";

//create boards
const container = document.querySelector(".grids");
const playerGridDOM = document.querySelector(".player-grid");
const AIGridDOM = document.querySelector(".AI-grid");
let Player;
let playerGrid;
let AIGrid;

function createPlayerAndGrids() {
  Player = player();
  playerGrid = gameBoard();
  AIGrid = gameBoard();
}
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

function createPlayerShips() {
  let battleship = ship(4, "horizontal");
  let cruiser = ship(3, "vertical");
  let submarine = ship(3, "horizontal");
  let patrol = ship(2, "vertical");
  //place ships
  playerGrid.placeShip(battleship, 1, 0);
  playerGrid.placeShip(cruiser, 3, 5);
  playerGrid.placeShip(submarine, 4, 8);
  playerGrid.placeShip(patrol, 7, 6);
}
renderGrids();
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
  //PLAYER GRID
  for (let x = 9; x >= 0; x--) {
    let playerCell = document.createElement("div");

    for (let y = 0; y < 10; y++) {
      let playerCell = document.createElement("div");
      playerGridDOM.appendChild(playerCell).className = "player-grid-item";
      playerCell.innerText = `${y},${x}`;
      playerCell.id = `${y},${x}`;
    }
  }

  //AI GRID
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
function playerAttacks(e) {
  if (!isGameOver()) {
    let retValue;
    if (Player.getTurn() === "player") {
      let coords = e.id.split(",");
      retValue = Player.playerTurn(
        AIGrid,
        Number(coords[0]),
        Number(coords[1])
      );
      if (retValue === "hit") {
        let [...arr] = AIGrid.getHit();
        [...arr].forEach((el) => {
          if (el[0] === Number(coords[0]) && el[1] === Number(coords[1])) {
            e.classList.add("hitted-cell");
            e.classList.add("disabled-cell");
          }
        });
      } else {
        e.classList.add("missed-cell");
        e.classList.add("disabled-cell");
        AIAttacks();
      }
    }
  }
}

function AIAttacks(e) {
  if (!isGameOver()) {
    console.log(`from AI it is ${isGameOver()}`);
    let res;
    if (Player.getTurn() === "AI") {
      //if function was not called with args play with random values
      //else find a new random value
      if (e === undefined) {
        res = Player.AITurn(playerGrid);
      } else {
        res = Player.AITurn(playerGrid, e[0], e[1]);
      }
      if (res[1] === "AlreadyPlayed") {
        AIAttacks();
      } else if (res[1] === "missed") {
        let PlayerNodes = playerGridDOM.childNodes;
        [...PlayerNodes].forEach((e) => {
          let arr = e.id.split(",");
          if (res[0][0] === Number(arr[0]) && res[0][1] === Number(arr[1])) {
            setTimeout(() => {
              e.classList.add("missed-cell");
            }, 1000);
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
        AIAttacks(getRandom);
      }
    }
  }
}

const isGameOver = () => {
  if (AIGrid.areAllSunk() || playerGrid.areAllSunk()) {
    declareWinner();
    const restartBtn = document.querySelector(".restart");
    restartBtn.classList.add("visible");
    return true;
  }
};

function declareWinner() {
  const winnerTxt = document.querySelector(".winner");
  if (!playerGrid.areAllSunk()) winnerTxt.innerText = "You Won";
  else winnerTxt.innerText = "AI Won";
}

function restart() {
  removeOldClasses();
  removeMessage();
  init();
}

//restart functions

const removeOldClasses = () => {
  const Pcells = window.document.querySelectorAll(".player-grid-item");
  const AIcells = window.document.querySelectorAll(".AI-grid-item");
  Pcells.forEach((e) => {
    e.classList.remove(
      "has-ship",
      "hitted-cell",
      "missed-cell",
      "disabled-cell"
    );
  });
  AIcells.forEach((e) => {
    e.classList.remove(
      "has-ship",
      "hitted-cell",
      "missed-cell",
      "disabled-cell"
    );
  });
};

const removeMessage = () => {
  const winner = document.querySelector(".winner");
  const restartBtn = document.querySelector(".restart");
  restartBtn.classList.remove("visible");
  winner.innerText = "";
};

let AInodes = AIGridDOM.childNodes;
[...AInodes].forEach((e, i) => {
  e.addEventListener("click", function () {
    playerAttacks(e);
    if (isGameOver()) declareWinner();
  });
});

const restartBtn = document.querySelector(".restart");
restartBtn.addEventListener("click", restart);

function init() {
  createPlayerAndGrids();
  createPlayerShips();
  createAIShips();
  RenderGridsAfterChange();
}
