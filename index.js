let color = "black";
let click = true;

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
    cell.style.border = "0.1px solid black";
    grid.insertAdjacentElement("beforeend", cell);
  }
}

createGrid(16);

function colorCell() {
  if (click) {
    if (color === "rainbow") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = color;
    }
  }
}

function changeSize(size) {
  if (size >= 2 && size <= 100) {
    let alertMessage = document.querySelector("#alert");
    alertMessage.textContent = "";
    createGrid(size);
  } else {
    let alertMessage = document.querySelector("#alert");
    alertMessage.textContent = "Please enter a number between 2 and 100";
  }
  createGrid(size);
  let num = document.querySelector("#size");
  num.textContent = `${size}`;
}

function changeColor(choice) {
  color = choice;
}

function resetGrid() {
  let grid = document.querySelector(".grid");
  let cells = grid.querySelectorAll("div");
  cells.forEach((div) => (div.style.backgroundColor = "white"));
}

document.querySelector("body").addEventListener("click", () => {
  click = !click;
  if (click) {
    document.querySelector(".mode").textContent = "Coloring";
  } else {
    document.querySelector(".mode").textContent = "Not Coloring";
  }
});
