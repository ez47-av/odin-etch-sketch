let grid = document.querySelector(".grid");
let gridSize = 16;
const modal = document.querySelector(".modal");
const btnOpen = document.querySelector(".open-modal");
const btnClose = document.querySelector(".close");
const input = document.querySelector("#grid-input");
const btnSubmit = document.querySelector("#grid-submit");
const btnReset = document.querySelector(".reset-colors");


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

function resetGrid() {
  grid.textContent = ''
}

createGrid(gridSize);

grid.addEventListener("mouseover", (e) => {
  if (!e.target.classList.contains("grid")) {
    e.target.classList.add("active");
  }
});

// resets the grid back to white
btnReset.addEventListener("click", () => {
  resetGrid();
  createGrid(gridSize);
})

// opens the modal
btnOpen.addEventListener("click", () => {
  modal.style.display = "block";
})

btnSubmit.addEventListener("click", (e) =>{
  e.preventDefault();
    
  if (Math.floor(input.value) > 0 && input.value <= 100) {
    gridSize = Math.floor(input.value);
    resetGrid();
    createGrid(gridSize);
    closeModal();
  }
})

btnClose.addEventListener("click", closeModal);

function closeModal() {
  modal.style.display = "none";
}