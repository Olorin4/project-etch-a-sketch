let grid = document.querySelector(".container");
let btn = document.querySelector("button");
let gridSize;

// Create a grid of square divs
createGrid(16);
function createGrid(gridSize) {
    for (let i = 0; i < (gridSize**2); i++) {
        let gridDivs = document.createElement("div");
        gridDivs.style.cssText = `background: beige; width: ${768/gridSize}px; height: ${768/gridSize}px; flex: 1 0 auto;`;
        grid.appendChild(gridDivs);
        // Add hover effect
        gridDivs.addEventListener("mouseenter", () => {
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
            gridDivs.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        });
    }
}

// Ask user for a grid size
btn.addEventListener("click", getUserAnswer => {
    gridSize = prompt("How many squares (from 1 to 100) do you want your grid to have?");
    if (gridSize === null) {
        console.log("User canceled the prompt");
    } else if (gridSize > 100 || gridSize <= 0 || isNaN(gridSize)) {
        gridSize = prompt("Please select a valid number from 1 to 100.");
    } else {
        // Remove old grid
        while (grid.firstChild) {
            grid.removeChild(grid.firstChild);
        }
        createGrid(gridSize);
    }
});