const container = document.querySelector(".container");
const div = document.createElement("div");
const gridSize = 16;

function createGrid(size) {
  for (let i = 0; i < size*size; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
  }

  const temp = document.querySelectorAll("div");
  console.log(temp);
}

createGrid(gridSize);