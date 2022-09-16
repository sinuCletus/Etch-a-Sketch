const grid = document.querySelector('#grid');

let gridSize = 16;

function createGrid() {

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



createGrid();