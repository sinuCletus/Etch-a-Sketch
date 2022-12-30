/*
Name: Scletus
Project: Etch-a-Sketch
Description: 
*/

//CONSTANTS
const grid = document.querySelector('#grid');
const controls = document.getElementById('controls');
const cells = document.getElementById('cells');
const copyCat = document.getElementById('copy-cat');
const submit = document.getElementById('gridBtn');
const palette = document.getElementById('form');
let colorPicker = document.getElementById('colorPicker');
let colorTheme = '';

//default grid size is 16x16 when page first loads
const DEFAULT_SIZE = 16;

window.onload = () => {
    createGrid(DEFAULT_SIZE);
    copyCat.innerHTML = DEFAULT_SIZE + ' x ' + DEFAULT_SIZE;
}

/* Event Listener that creates a new grid WHEN user clicks 'Submit' button.
Provides a check to see if number is valid */
submit.addEventListener('click', newGrid);

//FUNCTIONS

//creates new grid, triggered by click on submit button. see above
function newGrid() {
        grid.innerHTML = '';
        colorTheme = ''; 

        //when page reloads, this unchecks radio buttons so user can then select how to draw  
        let radInput = document.getElementsByName('color');
        for(let i = radInput.length-1; i >= 0; i--) {
            if('radio' === radInput[i].type) {
                radInput[i].checked = false;
            }
        }

        //a check to see if user inputs a number between 2-99, creates the new grid if cleared to do so
        if(cells.value > 1 && cells.value < 100 && cells.value != isNaN) {
            createGrid(cells.value);
            copyCat.innerHTML = cells.value + ' x ' + cells.value;
        } else {
            createGrid(DEFAULT_SIZE);
            alert('Please Select A Number between 2 & 99');
        }
}

//creates the default grid, used to set custom grid in the newGrid() function above
function createGrid(size) {

        //used css grid to create the grid, this sets the columns and rows
        grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

        //creates divs that fill each column and row of grid
        for(let i = 0; i < size * size; i++) {
            let gridSquare = document.createElement('div');
            console.log('works');

            //class that gives each div a width and height
            gridSquare.classList.add('square');
            grid.appendChild(gridSquare);

            //when radio button is selectd, sets the color if selected and overall colorTheme
            palette.addEventListener('change', function() {
                colorPicker = this.colorPicker.value;
                colorTheme = this.color.value;
            })

            /*colors in each div element 
            when mouse enters it with 
            the colorTheme or color
            selected by the user */
            gridSquare.addEventListener('mouseenter', () => {
                switch(colorTheme) {
                    case 'custom': 
                        gridSquare.style.backgroundColor = colorPicker;
                        break;
                    case 'rainbow':
                        gridSquare.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
                        break;
                    case 'darken':
                        console.log('darken')
                        break;
                    case 'lighten':
                        console.log('lighten');
                        break;
                }
            });
        }
}