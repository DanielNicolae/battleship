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
console.log(computersFleet);

function returnCoordonates(x, y) {
  console.log({ x, y });
  return { x, y };
}

function hit(a, b) {
  const coordonates = returnCoordonates(a, b);
  console.log(coordonates);
  for (let i = 0; i < computersFleet.length; i++) {
    const xCoord = computersFleet[i].x;
    const yCoord = computersFleet[i].y;
    console.log(`xCoord = ${xCoord}`);
    console.log(`yCoord = ${yCoord}`);
    console.log(`coordonates.x = ${coordonates.x}`);
    console.log(`coordonates.y = ${coordonates.y}`);
    console.log("============================");
    if (coordonates.x === xCoord && coordonates.y === yCoord) {
      console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
      console.log("HIT!");
      console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    }
  }
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
      cell4.addEventListener("click", () => hit(j, i));
      cell3.addEventListener("click", () => hit(j, i));
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



