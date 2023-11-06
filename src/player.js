import { ship } from "./ship";
import { gameBoard } from "./gameBoard";

function player() {
  let turnCount = 0;
  let currentTurn = "player";
  const determineTurn = () => {
    if (turnCount % 2 === 0) {
      currentTurn = "player";
    } else {
      currentTurn = "AI";
    }
  };

  const changeTurn = (cnt) => {
    turnCount = cnt;
  };
  const getTurn = () => {
    return currentTurn;
  };

  const playerTurn = (board, x, y) => {
    let v = board.receiveAttack(x, y);
    if (!v) turnCount++;
  };

  const getRandomCell = () => {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    return x, y;
  };

  const getRandomAdjacent = (x, y) => {
    let options = [
      [x + 1, y],
      [x - 1, y],
      [x, y + 1],
      [x, y - 1],
    ];

    return options[Math.floor(Math.random() * options.length)];
  };
  const AITurn = (board) => {
    // let v = board.receiveAttack(x, y);
    // if (!v) turnCount++;
    let values = getRandomCell();
    let v = board.receiveAttack(values[0], values[1]);
    if (!v) {
      turnCount++;
    } else {
      getRandomAdjacent(values[0], values[1]);
    }
  };

  return {
    turnCount,
    currentTurn,
    determineTurn,
    getTurn,
    changeTurn,
    playerTurn,
    AITurn,
    getRandomAdjacent,
  };
}

export { player };
