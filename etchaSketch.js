const container = document.querySelector('#main-content');

const rowContainer = document.createElement('div');
rowContainer.classList.add('rowCont');
rowContainer.style.display = 'flex';
rowContainer.style.gap = '2px';
container.appendChild(rowContainer);

function createRow(boxNum) {
    //CREATES A DIV TO PUT THE BOXES IN
    const rowContainer = document.createElement('div');
    rowContainer.classList.add('rowContainer');
    rowContainer.style.display = 'flex';
    // rowContainer.style.gap = '2px';
    // rowContainer.style.marginBottom = '2px';
    container.appendChild(rowContainer);
    //LOOP TO ITEMNUMBER, CREATES A BOX
    for (i = 1; i <= boxNum; i++) {
        const contentOne = document.createElement('div');
        contentOne.classList.add('grid');
        contentOne.style.borderStyle = 'solid';
        contentOne.style.width = '20px';
        contentOne.style.height = '20px';
        rowContainer.appendChild(contentOne);
    }
}

let c = 1;
while (c <= 16) {
    c++;
    createRow(16);
}

let divs = document.querySelectorAll('.grid');
const changeBackgroundColor = (e) => {
    e.target.style.backgroundColor = 'black';
};
divs.forEach((div) => {
    div.addEventListener('click', changeBackgroundColor, { once: true });
});
