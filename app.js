function battleship(ship, x, y) {
  return ({ ship, x, y });
}

const gridSize = 30;

function launchFleets() {
  const ships = ["destroyer", "aircraft_carrier", "frigate", "cruiser"];
  const launchedShips = [];
  for (let i = 0; i < 10; i++) {
    const randomX = Math.floor(Math.random() * gridSize);
    const randomY = Math.floor(Math.random() * gridSize);
    const ship = Math.floor(Math.random() * ships.length);
    launchedShips.push(battleship(ships[ship], randomX, randomY));
  }
  return launchedShips;
}

const myFleet = launchFleets();
const computersFleet = launchFleets();
console.log('computersFleet:');
console.log(computersFleet);
console.log('myFleet:');
console.log(myFleet);

function returnCoordonates(x, y) {
  console.log({ x, y });
  return { x, y };
}

function hitTheEnemy(a, b) {
  let hit = false;
  const coordonates = returnCoordonates(a, b);
  console.log(`enemyShipCoordonates:${coordonates}`);
  for (let i = 0; i < computersFleet.length; i++) {
    const enemyXCoord = computersFleet[i].x;
    const enemyYCoord = computersFleet[i].y;
    console.log(`xCoord = ${enemyXCoord}`);
    console.log(`yCoord = ${enemyYCoord}`);
    console.log(`coordonates.x = ${coordonates.x}`);
    console.log(`coordonates.y = ${coordonates.y}`);
    console.log("============================");
    if (coordonates.x === enemyXCoord && coordonates.y === enemyYCoord) {
      hit = true;
      console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
      console.log("HIT!");
      console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    }
  }
  return hit;
}

function enemyAttack(a, b) {
  let hit = false;
  const coordonates = returnCoordonates(a, b);
  for (let i = 0; i < computersFleet.length; i++) {
    const myXCoord = myFleet[i].x;
    const myYCoord = myFleet[i].y;
    if (coordonates.x === myXCoord && coordonates.y === myYCoord) {
      hit = true;
    }
  }
  return hit;
}

function generateGrids() {
  const yourGrid = document.getElementsByClassName("yourGrid")[0];
  const computersGrid = document.getElementsByClassName("computersGrid")[0];
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const cell1 = document.createElement("div");
      const cell2 = document.createElement("div");
      const cell3 = document.createElement("div");
      const cell4 = document.createElement("div");
      cell1.classList.add("cell1");
      cell2.classList.add("cell2");
      cell3.classList.add("cell1");
      cell3.classList.add("enemysCell");
      cell4.classList.add("cell2");
      cell4.classList.add("enemysCell");
      if (enemyAttack(j, i)) {
        cell1.classList.add("ship");
        cell2.classList.add("ship");
      }
      cell4.addEventListener("click", () => {
        let enemyHitted = hitTheEnemy(j, i);
        console.log("enemyHitted: " + enemyHitted);
        if (enemyHitted) {
          cell4.classList.add("hitted");
        }
        let iGotHitted = enemyAttack(j, i);
        if (iGotHitted) {
          cell2.classList.add("hitted");
        }
      });
      cell3.addEventListener("click", () => {
        let enemyHitted2 = hitTheEnemy(j, i);
        console.log("enemyHitted: " + enemyHitted2);
        if (enemyHitted2) {
          cell3.classList.add("hitted");
        }
        let iGotHitted = enemyAttack(j, i);
        if (iGotHitted) {
          cell1.classList.add("hitted");
        }
      });
      if (i % 2 === 0) {
        if (i + j % 2 - i > 0) {
          yourGrid.appendChild(cell1);
          computersGrid.appendChild(cell3);
        } else {
          yourGrid.appendChild(cell2);
          computersGrid.appendChild(cell4);
        }
      } else {
        if (i + j % 2 - i > 0) {
          yourGrid.appendChild(cell2);
          computersGrid.appendChild(cell4);
        } else {
          yourGrid.appendChild(cell1);
          computersGrid.appendChild(cell3);
        }
      }
    }
  }
}

generateGrids();



