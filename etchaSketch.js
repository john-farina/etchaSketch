const container = document.querySelector('#main-content');
let gridContainer;
let rowContainer;
let boxNum = 16;
// gridContainer.classList.add('grid__container');
// const rowContainer = document.createElement('div');
// rowContainer.classList.add('row__container');
// container.appendChild(gridContainer);
let userChoice = 16;

function addPaintListen(square) {
    const divs = document.querySelectorAll('.grid');
    //CHANGE BACKGROUND EVENT VARIABLE
    const changeBackgroundColor = (e) => {
        e.target.style.backgroundColor = 'black';
    };
    const eraseBackgroundColor = (e) => {
        e.target.style.backgroundColor = 'white';
    };

    square.addEventListener('mouseenter', changeBackgroundColor);
    square.addEventListener('click', eraseBackgroundColor);
}

function createRow(boxNum) {
    //CREATES A DIV TO PUT THE BOXES IN
    const rowContainer = document.createElement('div');
    rowContainer.classList.add('row__container');
    rowContainer.style.display = 'flex';
    //LOOP TO ITEMNUMBER, CREATES A BOX
    for (i = 1; i <= boxNum; i++) {
        const reset = document.querySelector('.reset');
        //LISTENS FOR CLICK ON BUTTON THEN CHANGES IT TO WHITE
        reset.addEventListener('click', () => {
            square.style.backgroundColor = 'white';
        });
        let square = createSquare();
        addPaintListen(square);
        rowContainer.appendChild(square);
    }
    return rowContainer;
}

function createSquare() {
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
    } else {
        square.style.width = '20px';
        square.style.height = '20px';
    }
    return square;
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
    let boxNum = prompt('1-70');
    createGrid(boxNum, boxNum);
    return boxNum;
}

const changeGridSize = document.querySelector('.change-size');
changeGridSize.addEventListener('click', () => {
    removeGrid();
    userPrompt();
    container.appendChild(gridContainer);
});
