const grid = document.querySelector('#grid');
const controls = document.getElementById('controls');
const cells = document.getElementById('cells');
const copyCat = document.getElementById('copy-cat');
const submit = document.getElementById('gridBtn');


//default grid when page first loads
defaultGrid();


//create grid size display in a 'number x number' format in the controls div
submit.addEventListener('click', userGrid);

//FUNCTIONS

function userGrid() {
        copyCat.innerHTML = cells.value + ' x ' + cells.value;
        createGrid();
}

function defaultGrid() {
    const gridSize = 16;

    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for(let i = 0; i < gridSize * gridSize; i++) {
        let gridSquare = document.createElement('div');

        gridSquare.classList.add('square');
        grid.appendChild(gridSquare);

        gridSquare.addEventListener('mouseenter', () => {
            gridSquare.classList.add('color');
        });
    }
}

function createGrid() {
    const gridSize = cells.value;

    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for(let i = 0; i < gridSize * gridSize; i++) {
        let gridSquare = document.createElement('div');

        gridSquare.classList.add('square');
        grid.appendChild(gridSquare);

        gridSquare.addEventListener('mouseenter', () => {
            gridSquare.classList.add('color');
        });
    }
}