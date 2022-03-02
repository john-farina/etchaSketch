const container = document.querySelector('#main-content');
const gridContainer = document.createElement('div');
gridContainer.classList.add('grid__container');
// const rowContainer = document.createElement('div');
// rowContainer.classList.add('row__container');
// container.appendChild(gridContainer);
let userChoice = 16;

function createRow(boxNum) {
    //CREATES A DIV TO PUT THE BOXES IN
    const rowContainer = document.createElement('div');
    rowContainer.classList.add('row__container');
    rowContainer.style.display = 'flex';
    // gridContainer.appendChild(rowContainer);
    //LOOP TO ITEMNUMBER, CREATES A BOX
    for (i = 1; i <= boxNum; i++) {
        const contentOne = document.createElement('div');
        contentOne.classList.add('grid');
        contentOne.style.borderStyle = 'solid';
        contentOne.style.borderWidth = '.06rem';
        contentOne.style.backgroundColor = 'white';

        //VARIABLE TO RESET BACKGROUND COLOR
        const resetBackgroundColor = (e) => {
            e.target.style.backgroundColor = 'white';
        };
        //FINDS RESET BUTTON
        const reset = document.querySelector('.reset');
        //LISTENS FOR CLICK ON BUTTON THEN CHANGES IT TO WHITE
        reset.addEventListener('click', () => {
            contentOne.style.backgroundColor = 'white';
        });

        if (boxNum <= 23) {
            contentOne.style.width = '20px';
            contentOne.style.height = '20px';
        } else if (boxNum > 23 && boxNum <= 40) {
            contentOne.style.width = '10px';
            contentOne.style.height = '10px';
        } else if (boxNum > 40 && boxNum <= 70) {
            contentOne.style.width = '6px';
            contentOne.style.height = '6px';
        }
        rowContainer.appendChild(contentOne);
    }
    gridContainer.appendChild(rowContainer);
}

function createGrid(rowNum, columnNum) {
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('grid__container');
    container.appendChild(gridContainer);
    let c = 1;
    while (c <= columnNum) {
        c++;
        createRow(rowNum);
    }
}

createGrid(userChoice, userChoice);

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

function removeGrid() {
    container.removeChild(gridContainer);
}

function userPrompt() {
    let gridContainer = document.createElement('div');
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
