const container = document.querySelector('#main-content');
let gridContainer;
let rowContainer;
// gridContainer.classList.add('grid__container');
// const rowContainer = document.createElement('div');
// rowContainer.classList.add('row__container');
// container.appendChild(gridContainer);
let userChoice = 16;

function addPaintListen() {
    //FINDS ALL DIVS WITH GRID CLASS
    const divs = document.querySelectorAll('.grid');
    //CHANGE BACKGROUND EVENT VARIABLE
    const changeBackgroundColor = (e) => {
        e.target.style.backgroundColor = 'black';
    };
    const eraseBackgroundColor = (e) => {
        e.target.style.backgroundColor = 'white';
    };
    //EACH DIV ADDS AN EVENT LISTEN FOR THE MOUSE ENTERING,THEN CHANGE
    //BACKGROUND
    divs.forEach((div) => {
        div.addEventListener('mouseenter', changeBackgroundColor);
    });
    //EACH DIV ADDS AN EVENT LISTEN FOR THE MOUSE CLICK,THEN CHANGE
    //BACKGROUND
    divs.forEach((div) => {
        div.addEventListener('click', eraseBackgroundColor);
    });
}

function createRow(boxNum) {
    //CREATES A DIV TO PUT THE BOXES IN
    const rowContainer = document.createElement('div');
    rowContainer.classList.add('row__container');
    rowContainer.style.display = 'flex';
    // gridContainer.appendChild(rowContainer);
    //LOOP TO ITEMNUMBER, CREATES A BOX
    for (i = 1; i <= boxNum; i++) {
        // //FINDS RESET BUTTON
        const reset = document.querySelector('.reset');
        //LISTENS FOR CLICK ON BUTTON THEN CHANGES IT TO WHITE
        reset.addEventListener('click', () => {
            square.style.backgroundColor = 'white';
        });
        let square = document.createElement('div');
        square.classList.add('grid');
        square.style.borderStyle = 'solid';
        square.style.borderWidth = '.06rem';
        square.style.backgroundColor = 'white';
        if (boxNum <= 23) {
            square.style.width = '20px';
            square.style.height = '20px';
        } else if (boxNum > 23 && boxNum <= 40) {
            square.style.width = '10px';
            square.style.height = '10px';
        } else if (boxNum > 40 && boxNum <= 70) {
            square.style.width = '6px';
            square.style.height = '6px';
        }
        rowContainer.appendChild(square);
    }
    addPaintListen();
    return rowContainer;
}

function createSquare(boxNum) {
    let square = document.createElement('div');
    square.classList.add('grid');
    square.style.borderStyle = 'solid';
    square.style.borderWidth = '.06rem';
    square.style.backgroundColor = 'white';
    if (boxNum <= 23) {
        square.style.width = '20px';
        square.style.height = '20px';
    } else if (boxNum > 23 && boxNum <= 40) {
        square.style.width = '10px';
        square.style.height = '10px';
    } else if (boxNum > 40 && boxNum <= 70) {
        square.style.width = '6px';
        square.style.height = '6px';
    }
}

function createGrid(rowNum, columnNum) {
    gridContainer = document.createElement('div');
    gridContainer.classList.add('grid__container');
    container.appendChild(gridContainer);
    let c = 1;
    while (c <= columnNum) {
        c++;
        let rowContainer = createRow(rowNum);
        gridContainer.appendChild(rowContainer);
    }
}

createGrid(userChoice, userChoice);

function removeGrid() {
    container.removeChild(gridContainer);
}

function userPrompt() {
    gridContainer = document.createElement('div');
    gridContainer.classList.add('grid__container');
    let userChoice = prompt('1-70');
    createGrid(userChoice, userChoice);
}

const changeGridSize = document.querySelector('.change-size');
changeGridSize.addEventListener('click', () => {
    removeGrid();
    userPrompt();
    container.appendChild(gridContainer);
});
