let color = "black";

function createGrid(size) {
  let grid = document.querySelector(".grid");
  let cells = grid.querySelectorAll("div");
  cells.forEach((div) => div.remove());
  grid.style.display = "grid";
  grid.style.gap = 0;
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let cell = document.createElement("div");
    cell.addEventListener("mouseover", colorCell);
    cell.style.backgroundColor = "white";
    cell.classList.add("cell");
    grid.insertAdjacentElement("beforeend", cell);
  }
}

createGrid(16);

function colorCell() {
  if (color === "rainbow") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = color;
  }
}

function changeSize(size) {
  if (size > 2 && size < 100) {
    alert.textContent = "";
    createGrid(size);
  } else {
    let alert = document.querySelector("#alert");
    alert.textContent = "Please enter a number between 2 and 100";
  }
  createGrid(size);
}

function changeColor(choice) {
  color = choice;
}

function resetGrid() {
  let grid = document.querySelector(".grid");
  let cells = grid.querySelectorAll("div");
  cells.forEach((div) => (div.style.backgroundColor = "white"));
}
