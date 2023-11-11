import { ship } from "./ship";
import { gameBoard } from "./gameBoard";

function player() {
  let currentTurn = "player";
  const getTurn = () => {
    return currentTurn;
  };

  const changeTurn = (turn) => {
    console.log(`from player ${currentTurn}`);
    currentTurn = turn;
  };

  const playerTurn = (board, x, y) => {
    let v = board.receiveAttack(x, y);
    if (v === undefined) {
      return "AlreadyMissed";
    }
    if (!v) {
      currentTurn = "AI";
      return "missed";
    }
    if (v) return "hit";
  };

  const getRandomCell = () => {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    return [x, y];
  };

  const getRandomAdjacent = (x, y, grid) => {
    let options = [
      [x + 1, y],
      [x - 1, y],
      [x, y + 1],
      [x, y - 1],
    ];

    let validOptions = options.filter(
      /* prettier-ignore */
      (e) => ((e[0] >= 0 && e[0] <= 9) && (e[1] >= 0 && e[1] <= 9))
    );
    let missedArray = grid.getMissed();
    let hittedArray = grid.getHit();
    let notAvailable = missedArray.concat(hittedArray);

    function isTrue(e) {
      let flag = true;
      for (let i = 0; i < notAvailable.length; i++) {
        if (notAvailable[i][0] === e[0] && notAvailable[i][1] === e[1])
          flag = false;
      }
      return flag;
    }

    let commonValueIndex = validOptions.filter((e) => isTrue(e));

    function random_item(items) {
      return (
        items[Math.floor(Math.random() * items.length)],
        items[Math.floor(Math.random() * items.length)]
      );
    }
    let randomHit = random_item(commonValueIndex);
    return [randomHit];
  };

  const AITurn = (board, x, y) => {
    let v;
    let values;

    if (x === undefined && y === undefined) {
      values = getRandomCell();
      v = board.receiveAttack(values[0], values[1]);
    } else {
      values = [x, y];
      v = board.receiveAttack(x, y);
    }

    if (v === undefined) {
      return [values, "AlreadyPlayed"];
    } else if (v !== undefined && v !== true) {
      currentTurn = "player";
      return [values, "missed"];
    } else {
      return [values, "hit"];
    }
  };

  return {
    getTurn,
    changeTurn,
    playerTurn,
    AITurn,
    getRandomAdjacent,
  };
}

export { player };
