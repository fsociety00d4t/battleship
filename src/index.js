import { ship } from "../src/ship";
import { gameBoard } from "../src/gameBoard";
import { player } from "../src/player";

let axis = "x";
let counter = 0;

const getShipLength = () => {
  return counter === 0 ? 4 : counter === 1 ? 3 : counter === 2 ? 3 : 2;
};
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

function createPlacingGrid() {
  const placeGrid = document.querySelector(".placing-grid-container");
  const grid = document.querySelector(".start-grid");
  for (let x = 9; x >= 0; x--) {
    let cell = document.createElement("div");

    for (let y = 0; y < 10; y++) {
      let cell = document.createElement("div");
      grid.appendChild(cell).className = "placing-cells-item";
      cell.innerText = `${y},${x}`;
      cell.id = `${y},${x}`;
    }
  }
}

function createPlayerShips(cell) {
  let coords = cell.id.split(",");
  let ax = axis === "x" ? "horizontal" : "vertical";
  switch (counter) {
    case 1:
      let battleship = ship(4, ax, "battleship");
      playerGrid.placeShip(battleship, Number(coords[0]), Number(coords[1]));
      break;
    case 2:
      let cruiser = ship(3, ax, "cruiser");
      playerGrid.placeShip(cruiser, Number(coords[0]), Number(coords[1]));
      break;
    case 3:
      let submarine = ship(3, ax, "submarine");
      playerGrid.placeShip(submarine, Number(coords[0]), Number(coords[1]));
      break;
    case 4:
      let patrol = ship(2, ax, "patrol");
      playerGrid.placeShip(patrol, Number(coords[0]), Number(coords[1]));
      break;
  }

  /* let battleship = ship(4, "horizontal", "battleship");
  let cruiser = ship(3, "vertical", "cruiser");
  let submarine = ship(3, "horizontal", "submarine");
  let patrol = ship(2, "vertical", "patrol");
  //place ships
  playerGrid.placeShip(battleship, Number(coords[0]), Number(coords[1]));
  playerGrid.placeShip(cruiser, 3, 5);
  playerGrid.placeShip(submarine, 4, 8);
  playerGrid.placeShip(patrol, 7, 6); */
}

//init();
createPlacingGrid();
createPlayerAndGrids();
renderGrids();

//AI
//create Random Ships
function createAIShips() {
  let direction = ["horizontal", "vertical"];
  let battleship = ship(
    4,
    direction[Math.floor(Math.random() * direction.length)],
    "battleship"
  );
  let cruiser = ship(
    3,
    direction[Math.floor(Math.random() * direction.length)],
    "cruiser"
  );
  let submarine = ship(
    3,
    direction[Math.floor(Math.random() * direction.length)],
    "submarine"
  );
  let patrol = ship(
    2,
    direction[Math.floor(Math.random() * direction.length)],
    "patrol"
  );

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
        displayShipsHealth("ai");
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
        displayShipsHealth("player");
        AIAttacks(getRandom);
      }
    }
  }
}

function displayShipsHealth(player) {
  if (player === "ai") {
    AIGrid.getOccupiedCells().forEach((e) => {
      if (e[0].isSunk()) {
        changeColorOnCells(e, player);
        deleteShipDisplay(e, player);
      }
    });
  } else {
    playerGrid.getOccupiedCells().forEach((e) => {
      if (e[0].isSunk()) {
        changeColorOnCells(e, player);
        deleteShipDisplay(e, player);
      }
    });
  }
}

const changeColorOnCells = (e, player) => {
  const PlayerCells = window.document.querySelectorAll(".player-grid-item"); //HERE DO THE SAME FOR AI
  const AIcells = window.document.querySelectorAll(".AI-grid-item");
  if (player === "ai") {
    AIcells.forEach((el) => {
      if (!el.classList.contains("sunk") && el.classList.contains("has-ship")) {
        let x = el.id.split(",");
        if (Number(x[0]) === e[1] && Number(x[1]) === e[2]) {
          el.classList.add("sunk");
        }
      }
    });
  } else {
    PlayerCells.forEach((el) => {
      if (!el.classList.contains("sunk") && el.classList.contains("has-ship")) {
        let x = el.id.split(",");
        if (Number(x[0]) === e[1] && Number(x[1]) === e[2]) {
          el.classList.add("sunk");
        }
      }
    });
  }
};

const deleteShipDisplay = (e, player) => {
  const AIShips = document.querySelectorAll(".ai-ships");
  const PlayerShips = document.querySelectorAll(".player-ships");
  if (player === "ai") {
    AIShips.forEach((el) => {
      if (el.innerText === e[0].name) {
        el.classList.add("lineOver");
      }
    });
  } else {
    PlayerShips.forEach((el) => {
      if (el.innerText === e[0].name) {
        el.classList.add("lineOver");
      }
    });
  }
};

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
  // RenderGridsAfterChange();
  removeOldClasses();
  removeMessage();
  // init();
  createPlayerAndGrids();
  counter = 0;
  removeOldPlacingShips();
  const container = document.querySelector(".placing-grid-container");
  container.style.display = "flex";
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
      "disabled-cell",
      "sunk"
    );
  });
  AIcells.forEach((e) => {
    e.classList.remove(
      "has-ship",
      "hitted-cell",
      "missed-cell",
      "disabled-cell",
      "sunk"
    );
  });

  const shipsInfo = document.querySelector(".ships").children;
  let playerShipsInfo = shipsInfo[0].children;
  let AIShipsInfo = shipsInfo[1].children;
  [...playerShipsInfo].forEach((e) => {
    e.classList.remove("lineOver");
  });
  [...AIShipsInfo].forEach((e) => {
    e.classList.remove("lineOver");
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

const cells = window.document.querySelector(".start-grid").childNodes;
[...cells].forEach((e, i) => {
  e.addEventListener("mouseenter", function () {
    if (counter < 4) handlePlacement(e, i);
  });
  e.addEventListener("mouseleave", function () {
    if (counter < 4) removeOld(e, i);
  });
  e.addEventListener("click", function () {
    if (
      e.classList.contains("place-ship-hover") &&
      counter < 4 &&
      !e.classList.contains("placed-ship")
    ) {
      counter++;
      createPlayerShips(e);
      renderTheShip(e, i);
    }
  });
});

function handlePlacement(e, index) {
  let test = e.id.split(",");
  let length = getShipLength();
  let flag = true;
  if (axis === "x") {
    for (let i = 0; i < length; i++) {
      if (cells[index + i]) {
        if (cells[index + i].classList.contains("placed-ship")) {
          flag = false;
          break;
        }
      }
    }
    if (flag) {
      if (Number(test[0]) + length - 1 <= 9) {
        for (let i = 0; i < length; i++) {
          cells[index + i].classList.add("place-ship-hover");
        }
      }
    }
  } else {
    for (let i = 0; i < length; i++) {
      if (cells[index - i * 10]) {
        if (cells[index - i * 10].classList.contains("placed-ship")) {
          flag = false;
          break;
        }
      }
    }
    if (flag) {
      if (Number(test[1]) + length - 1 <= 9) {
        for (let i = 0; i < length; i++) {
          cells[index - i * 10].classList.add("place-ship-hover");
        }
      }
    }
  }
}

function removeOld(e, index) {
  let test = e.id.split(",");
  let length = getShipLength();
  if (axis === "x") {
    if (Number(test[0]) + length - 1 <= 9) {
      for (let i = 0; i < length; i++) {
        cells[index + i].classList.remove("place-ship-hover");
      }
    }
  } else {
    if (Number(test[1]) + length - 1 <= 9) {
      for (let i = 0; i < length; i++) {
        cells[index - i * 10].classList.remove("place-ship-hover");
      }
    }
  }
}

function renderTheShip(e, index) {
  console.log(axis);
  cells.forEach((e) => {
    // console.log(`in renderTheship`);
    if (e.classList.contains("place-ship-hover")) {
      //  console.log(`in rendertheship if`);
      e.classList.add("placed-ship");
    }
  });
}

function removeOldPlacingShips() {
  cells.forEach((e) => {
    if (e.classList.contains("placed-ship")) e.classList.remove("placed-ship");
    if (e.classList.contains("place-ship-hover"))
      e.classList.remove("place-ship-hover");
  });
}
const restartBtn = document.querySelector(".restart");
restartBtn.addEventListener("click", restart);

const XAxis = document.querySelector(".x");
const YAxis = document.querySelector(".y");
XAxis.addEventListener("click", function () {
  axis = "x";
});
YAxis.addEventListener("click", function () {
  axis = "y";
});

const resetBtn = document.querySelector(".reset");
const placeBtn = document.querySelector(".place");
placeBtn.addEventListener("click", function () {
  console.log(counter);
  if (counter >= 4) {
    const container = document.querySelector(".placing-grid-container");
    container.style.display = "none";
    init();
  }
});
function init() {
  // createPlacingGrid();
  // createPlayerAndGrids();
  // createPlayerShips();
  createAIShips();
  //displayShipsHealth();
  RenderGridsAfterChange();
}

/* TODO
LET PLAYER PLACE THE SHIPS ON THE BOARD
FIX WAITING FOR RESPONSE BEFORE PLAYING AGAIN
FINISH THE UI
REDU THE TESTS 
*/
