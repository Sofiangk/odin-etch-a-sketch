const container = document.querySelector("#container");
const rowsCols = document.querySelector("#rows-cols");

function makeGrid(rows, cols) {
  container.style.setProperty("--grid-rows-cols", rows);
  container.style.setProperty("--grid-rows-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
}

makeGrid(rowsCols, rowsCols);
