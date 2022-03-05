const container = document.querySelector('#main-content');
let gridContainer;
let rowContainer;
let boxNum = 16;

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

function removeTransition(e) {
    e.classList.remove('shake');
}

function createRow(boxNum) {
    //CREATES A DIV TO PUT THE BOXES IN
    const rowContainer = document.createElement('div');
    rowContainer.classList.add('row__container');
    rowContainer.style.display = 'flex';
    for (i = 1; i <= boxNum; i++) {
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
    //LISTENS FOR CLICK ON BUTTON THEN CHANGES IT TO WHITE

    const reset = document.querySelector('.reset');
    reset.addEventListener('click', () => {
        square.style.backgroundColor = 'white';
        container.classList.add('shake');
        reset.classList.add('rotate_clockwise');
        setTimeout(function () {
            container.classList.remove('shake');
            reset.classList.remove('rotate_clockwise');
        }, 1000);
    });
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

createGrid(boxNum, boxNum);

function removeGrid() {
    container.removeChild(gridContainer);
}

function userPrompt() {
    gridContainer = document.createElement('div');
    gridContainer.classList.add('grid__container');
    boxNum = prompt('Type in a number 1-70!');
    if (boxNum >= 71) {
        boxNum = 70;
    }
    if (boxNum <= 0) {
        boxNum = 16;
    }
    createGrid(boxNum, boxNum);
    return boxNum;
}

const changeGridSize = document.querySelector('.change-size');
changeGridSize.addEventListener('click', () => {
    removeGrid();
    userPrompt();
    changeGridSize.classList.add('rotate_counter');
    setTimeout(function () {
        changeGridSize.classList.remove('rotate_counter');
    }, 1000);
    container.appendChild(gridContainer);
});
