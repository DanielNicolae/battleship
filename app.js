// const battleship = require("battleship");

function generateGrids() {
  const yourGrid = document.getElementsByClassName("yourGrid")[0];
  const computersGrid = document.getElementsByClassName("computersGrid")[0];
  console.log(computersGrid)
  for (let i = 0; i < 30; i++) {
    for (let j = 0; j < 30; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      yourGrid.appendChild(cell);
      computersGrid.appendChild(cell);
    }
  }
}

generateGrids();