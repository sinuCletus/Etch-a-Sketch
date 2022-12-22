const grid = document.querySelector('#grid');
const controls = document.getElementById('controls');
const cells = document.getElementById('cells');
const copyCat = document.getElementById('copy-cat');
const submit = document.getElementById('gridBtn');


//default grid when page first loads
const DEFAULT_SIZE = 16;

window.onload = () => {
    createGrid(DEFAULT_SIZE);
    copyCat.innerHTML = DEFAULT_SIZE + ' x ' + DEFAULT_SIZE;
    cells.value = DEFAULT_SIZE;
}

//create grid size display in a 'number x number' format in the controls div
submit.addEventListener('click', newGrid);

//FUNCTIONS

function newGrid() {
        copyCat.innerHTML = cells.value + ' x ' + cells.value;
        grid.innerHTML='';
        createGrid(cells.value);
}

function createGrid(size) {
        grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
        for(let i = 0; i < size * size; i++) {
            let gridSquare = document.createElement('div');
    
            gridSquare.classList.add('square');
            grid.appendChild(gridSquare);
    
            gridSquare.addEventListener('mouseenter', () => {
                gridSquare.classList.add('color');
            });
        }
}
