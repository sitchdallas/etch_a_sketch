const container = document.querySelector("#gridContainer");
const changeRes = document.querySelector('#changeResolutionButton');
const reset = document.querySelector('#resetGameButton');
let userInput;
let gridNumber = 16;

function makeRows(gridNumber = 16) {
    rows = gridNumber;
    cols = gridNumber;
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let gridSquare = document.createElement("div");
        container.appendChild(gridSquare).className = "gridSquare";
        gridSquare.addEventListener('mouseover', function(e) {
            this.style.backgroundColor = 'black'
        }
    )};
};

makeRows();

function clearGrid(gridNumber) {
    container.innerHTML = ''
}

function changeResolution() {
    clearGrid(gridNumber);
    gridInput = prompt("Please choose a number smaller than 100.", "16");
    if (gridNumber > 24 || gridNumber < 12) {
        alert('Try again.');
        return;
    }
    makeRows(gridInput);
}

function clearGame() {
    container.innerHTML = ''
    makeRows(gridInput);
};

