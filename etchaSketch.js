const container = document.querySelector('#main-content');
const rowContainer = document.createElement('div');
let userChoice = 16;

rowContainer.classList.add('rowCont');
rowContainer.style.display = 'flex';
rowContainer.style.gap = '2px';
container.appendChild(rowContainer);

function createRow(boxNum) {
    //CREATES A DIV TO PUT THE BOXES IN
    const rowContainer = document.createElement('div');
    rowContainer.classList.add('rowContainer');
    rowContainer.style.display = 'flex';
    container.appendChild(rowContainer);
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
}

function createGrid(rowNum, columnNum) {
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

divs.forEach((div) => {
    div.addEventListener('click', eraseBackgroundColor);
});

const changeGridSize = document.querySelector('.change-size');

changeGridSize.addEventListener('click', () => {
    userChoice = prompt('Choose a # 1-70');
    container.parentNode.removeChild(container);
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    console.log(userChoice);
});
