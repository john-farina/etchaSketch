const container = document.querySelector('#main-content');
container.style.display = 'flex';
let sqaureCount = 1;

while (sqaureCount <= 16) {
    sqaureCount++;
    const content = document.createElement('div');
    content.classList.add('colorDiv');
    content.style.flex = '1';
    content.style.backgroundColor = 'red';
    content.textContent = '1';
    container.appendChild(content);
}