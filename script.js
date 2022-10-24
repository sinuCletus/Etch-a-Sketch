const grid = document.querySelector('#grid');
const controls = document.getElementById('controls');
const cells = document.getElementById('cells');
const copyCat = document.getElementById('copy-cat');
const submit = document.getElementById('gridBtn');

//create grid size display in a 'number x number' format in the controls div
submit.addEventListener('click', userGrid);
function userGrid() {
        copyCat.innerHTML = cells.value + ' x ' + cells.value;
        createGrid();
}

function createGrid() {
const gridSize = cells.value;
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for(let i = 0; i < gridSize * gridSize; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('square');
        grid.appendChild(gridSquare);

        gridSquare.addEventListener('mouseenter', () => {
            gridSquare.classList.add('color');
        });
    }

}