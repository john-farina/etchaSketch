const container = document.querySelector("#main-content");
const changeGridSize = document.querySelector(".change-size");
const reset = document.querySelector(".reset");
let gridContainer;
let rowContainer;
let boxNum = 16;

function addPaintListen(square) {
  const changeBackgroundColor = (e) => {
    e.target.style.backgroundColor = "black";
  };
  const events = ["mouseenter", "ontouch", "ontouchmove", "ontouchend"];

  events.map((evnt) => {
    return square.addEventListener(evnt, changeBackgroundColor);
  });
}

function removeTransition(e) {
  e.classList.remove("shake");
}

function createSquare() {
  let square = document.createElement("div");

  square.classList.add("grid");

  square.style.borderStyle = "solid";

  square.style.borderWidth = ".06rem";

  square.style.backgroundColor = "white";

  if (boxNum <= 23) {
    square.style.width = "20px";

    square.style.height = "20px";
  } else if (boxNum > 23 && boxNum <= 40) {
    square.style.width = "10px";

    square.style.height = "10px";
  } else if (boxNum > 40 && boxNum <= 70) {
    square.style.width = "6px";

    square.style.height = "6px";
  } else {
    square.style.width = "20px";

    square.style.height = "20px";
  }

  reset.addEventListener("click", () => {
    if (square.style.backgroundColor === "black") {
      square.classList.add("fade__transition");
    }
    square.style.backgroundColor = "white";
  });

  return square;
}

function createRow(boxNum) {
  const rowContainer = document.createElement("div");

  rowContainer.classList.add("row__container");

  rowContainer.style.display = "flex";

  for (i = 1; i <= boxNum; i++) {
    let square = createSquare();

    addPaintListen(square);

    rowContainer.appendChild(square);
  }

  return rowContainer;
}

function createGrid(rowNum, columnNum) {
  let c = 1;

  gridContainer = document.createElement("div");

  gridContainer.classList.add("grid__container");

  container.appendChild(gridContainer);

  while (c <= columnNum) {
    c++;

    let rowContainer = createRow(rowNum);

    gridContainer.appendChild(rowContainer);
  }
}

function removeGrid() {
  container.removeChild(gridContainer);
}

function userPrompt() {
  gridContainer = document.createElement("div");

  gridContainer.classList.add("grid__container");

  boxNum = prompt("Type in a number 1-70!");

  boxNum = parseInt(boxNum);

  if (!boxNum || boxNum <= 0) {
    boxNum = 16;
  }

  if (boxNum >= 71) {
    boxNum = 70;
  }

  createGrid(boxNum, boxNum);

  return boxNum;
}

createGrid(boxNum, boxNum);

reset.addEventListener("click", () => {
  container.classList.add("shake");

  reset.classList.add("rotate_clockwise");

  setTimeout(() => {
    container.classList.remove("shake");

    reset.classList.remove("rotate_clockwise");
  }, 1000);
});

changeGridSize.addEventListener("click", () => {
  removeGrid();

  userPrompt();

  changeGridSize.classList.add("rotate_counter");

  setTimeout(() => {
    changeGridSize.classList.remove("rotate_counter");
  }, 1000);

  container.appendChild(gridContainer);
});
