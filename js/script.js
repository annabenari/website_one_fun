document.addEventListener("DOMContentLoaded", function () {
  const gridContainer = document.querySelector(".image-stack");

  for (let i = 0; i < 500; i++) {
    let cell = document.createElement("div");
    cell.classList.add("grid-cell");
    gridContainer.appendChild(cell);
  }
});
