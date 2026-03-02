const grid = document.querySelector(".grid");
const defaultSize = 16;

function createGrid(size) {
  const width = 1 / size * 100;
  for (let i = 0; i < size*size; i++) {
    createDiv(width);
  }
}

function createDiv(width) {
  const div = document.createElement("div");
  div.style.flexBasis = `${width}%`;
  grid.appendChild(div);
}

createGrid(defaultSize);

grid.addEventListener("mouseover", (e)=> {
  e.target.classList.add("active");
})