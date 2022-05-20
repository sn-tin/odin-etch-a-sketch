/* Creating Grid */
const mainGrid = document.querySelector(".main-grid");

function createGrid(rowsCol){
    for(let i = 0; i < rowsCol * rowsCol; i++){
            let createDIVs = document.createElement("div");
            createDIVs.classList.add("grid-element");
            mainGrid.insertAdjacentElement("beforeend", createDIVs);

            mainGrid.style.gridTemplateColumns = `repeat(${rowsCol}, 1fr)`;
            mainGrid.style.gridTemplateRows = `repeat(${rowsCol}, 1fr)`;
    }
}


/* Reset size of grid with user's input */
const inputGridSize = document.querySelector(".input-grid-size").value;
const setButton = document.querySelector(".set-btn");

function resetGridSize() {
    setButton.addEventListener("click", function() {
        let grid = document.querySelectorAll(".grid-element");
        grid.remove();
        createGrid(inputGridSize);
        console.log(inputGridSize)
    })
}

/* Main Sketching */
function sketch(){
    createGrid(16);
    resetGridSize();
}

sketch();