const container = document.querySelector("#gridContainer");

function makeRows(gridNumber) {
    rows = gridNumber;
    cols = gridNumber;
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.innerText = ('');
        container.appendChild(cell).className = "gridSquare";
    };
};

makeRows(16);