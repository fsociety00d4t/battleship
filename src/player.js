import { ship } from "./ship";
import { gameBoard } from "./gameBoard";

function player() {
  let turnCount = 0;
  let currentTurn = "player";
  /* const determineTurn = () => {
   /* if (turnCount % 2 === 0) {
      currentTurn = "player";
    } else {
      currentTurn = "AI";
    }
  }; */

  const changeTurn = (cnt) => {
    turnCount = cnt;
  };
  const getTurn = () => {
    return currentTurn;
  };

  const playerTurn = (board, x, y) => {
    let v = board.receiveAttack(x, y);
    console.log(`x is ${x} y is ${y}`);
    console.log(`v is ${v}`);
    if (!v) {
      currentTurn = "AI";
      turnCount++;
    }
    if (v) return true;
  };

  const getRandomCell = () => {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    //console.log(`in the random cell x is ${x} and y is ${y}`);
    return [x, y];
  };

  const getRandomAdjacent = (x, y, grid) => {
    console.log(`from getRandom x is ${x} and y is ${y}`);
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

    //let commonValueIndex = [];

    function isTrue(e) {
      let flag = true;
      for (let i = 0; i < notAvailable.length; i++) {
        if (notAvailable[i][0] === e[0] && notAvailable[i][1] === e[1])
          flag = false;
      }
      return flag;
    }

    let commonValueIndex = validOptions.filter((e) => isTrue(e));

    console.log(`not already played options are: `);
    console.log(commonValueIndex);
    function random_item(items) {
      console.log(`the items are : ${items}`);
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
      console.log(values);
      v = board.receiveAttack(values[0], values[1]);
    } else {
      values = [x, y];
      console.log(values);
      v = board.receiveAttack(x, y);
    }

    console.log(`v is ${v}`);

    if (v === undefined) {
      return [values, "AlreadyPlayed"];
    } else if (v !== undefined && v !== true) {
      currentTurn = "player";
      turnCount++;
      return [values, "missed"];
    } else {
      return [values, "hit"];
    }
  };

  return {
    turnCount,
    currentTurn,
    // determineTurn,
    getTurn,
    changeTurn,
    playerTurn,
    AITurn,
    getRandomAdjacent,
  };
}

export { player };
