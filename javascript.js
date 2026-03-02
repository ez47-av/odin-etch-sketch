let grid = document.querySelector(".grid");
const modal = document.querySelector(".modal");
const btnReset = document.querySelector(".reset-colors");
const btnOpen = document.querySelector(".open-modal");
const btnClose = document.querySelector(".close");
let gridSize = 16;

function createGrid(size) {
  const width = 1 / size * 100;
  for (let i = 0; i < size*size; i++) {
    createDiv(width);
  }
  grid.addEventListener("mouseover", onHover);
}

function createDiv(width) {
  const div = document.createElement("div");
  div.style.flexBasis = `${width}%`;
  grid.appendChild(div);
}

function resetGrid() {
  let temp = grid.cloneNode();
  grid.parentNode.appendChild(temp);
  grid.remove();
  grid = temp;
}

function onHover(e) {
  if (!e.target.classList.contains("grid")) {
    e.target.classList.add("active");
  }
}

createGrid(gridSize);

// resets the grid back to white
btnReset.addEventListener("click", () => {
  resetGrid();
  createGrid(gridSize);
})

// opens the modal
btnOpen.addEventListener("click", () => {
  modal.style.display = "block";

  const input = document.querySelector("#grid-input");
  const submitBtn = document.querySelector("#grid-submit");

  submitBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    
    if (input.value > 0 && input.value <= 100) {
      console.log(input.value);
      gridSize = input.value;
      resetGrid();
      createGrid(gridSize);
      closeModal();
    }
  })
})

btnClose.addEventListener("click", closeModal);

function closeModal() {
  modal.style.display = "none";
}