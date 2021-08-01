// const battleship = require("battleship");

function generateGrids() {
  const yourGrid = document.getElementsByClassName("yourGrid")[0];
  const computersGrid = document.getElementsByClassName("computersGrid")[0];
  console.log(yourGrid);
  for (let i = 0; i < 30; i++) {
    for (let j = 0; j < 30; j++) {
      const cell1 = document.createElement("div");
      const cell2 = document.createElement("div");
      const cell3 = document.createElement("div");
      const cell4 = document.createElement("div");
      cell1.classList.add("cell1");
      cell2.classList.add("cell2");
      cell3.classList.add("cell1");
      cell4.classList.add("cell2");
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