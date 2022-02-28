const container = document.querySelector('#main-content');

const rowContainer = document.createElement('div');
rowContainer.classList.add('rowCont');
rowContainer.style.display = 'flex';
rowContainer.style.gap = '2px';
container.appendChild(rowContainer);

function createRow(itemNum) {
    //CREATES A DIV TO PUT THE BOXES IN
    const rowContainer = document.createElement('div');
    rowContainer.classList.add('rowCont');
    rowContainer.style.display = 'flex';
    container.appendChild(rowContainer);
    //LOOP TO
    let sqaureCount = 1;
    while (sqaureCount <= itemNum) {
        sqaureCount++;
        const contentOne = document.createElement('div');
        contentOne.classList.add('square');
        contentOne.style.backgroundColor = 'red';
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
