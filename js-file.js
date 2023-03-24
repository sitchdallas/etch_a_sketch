const container = document.querySelector("#gridContainer");

function makeRows(gridNumber) {
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

makeRows(64);