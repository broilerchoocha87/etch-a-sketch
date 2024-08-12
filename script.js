let gridLength = 50;

function makegrid() {
  //     const body = document.querySelector("body");
  // body.removeChild(".gridDiv");

  const yBox = document.querySelector(".gridDiv");
  for (let i = 0; i < gridLength; i++) {
    const newYBox = document.createElement("div");
    for (let j = 0; j < gridLength; j++) {
      const newXBox = document.createElement("div");
      newXBox.textContent = ".";
      newXBox.classList.add("xBox");
      newYBox.appendChild(newXBox);
    }
    newYBox.classList.add("yBox");
    yBox.appendChild(newYBox);
  }
}

makegrid();
