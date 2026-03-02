const container = document.querySelector(".container");
const div = document.createElement("div");
const gridSize = 16;

function createGrid(size) {
  const width = 1 / size * 100;

  for (let i = 0; i < size*size; i++) {
    createDiv(width);
  }
}

function createDiv(width) {
  const div = document.createElement("div");
  div.style.flexBasis = `${width}%`;
  div.style.aspectRatio = "1 / 1";
  container.appendChild(div);
}

createGrid(gridSize);