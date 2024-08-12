let gridLength = 16;

function makegrid() {
  const gridLengthDisplay = document.querySelectorAll(".gridLength");
  gridLengthDisplay.forEach((display) => {
    display.textContent = gridLength;
  });
  const body = document.querySelector("body");
  const grid = document.querySelector(".gridDiv");
  body.removeChild(grid);
  const newGrid = document.createElement("div");
  newGrid.classList.add("gridDiv");
  body.appendChild(newGrid);

  const yBox = document.querySelector(".gridDiv");
  for (let i = 0; i < gridLength; i++) {
    const newYBox = document.createElement("div");
    for (let j = 0; j < gridLength; j++) {
      const newXBox = document.createElement("div");
      newXBox.classList.add("xBox");
      newYBox.appendChild(newXBox);
    }
    newYBox.classList.add("yBox");
    yBox.appendChild(newYBox);
  }

  const allBoxes = document.querySelectorAll(".xBox");
  allBoxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
        // box.style.backgroundColor = "aquamarine";
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      box.style.opacity = "0.6";
    });
  });
}

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  gridLength = parseInt(prompt("Enter Length: "));
  makegrid();
});

makegrid();
