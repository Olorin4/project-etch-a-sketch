// Function for creating a 16x16 grid of square divs
let grid = document.querySelector(".container");
grid.style.cssText = "display: flex; justify-content: center; align-items: center; flex-wrap: wrap;" +
    "max-width: 740px; max-height: 740px; transition: background-color 0.3s ease;";
let gridDivs;
for (let i = 0; i < 16; i++) {
    gridDivs = document.createElement("div");
    gridDivs.textContent = "Grid Divs";
    gridDivs.style.cssText = "color: blue; background: beige; min-width:150px; min-height: 150px; text-align: center;" +
        "display: flex; justify-content: center; align-items: center; ";
    grid.appendChild(gridDivs).classList.add("gridDivs");
    // Add hover effect
    gridDivs.addEventListener("mouseenter", () => {
        gridDivs.style.backgroundColor = "lightblue";
        gridDivs.style.transition = "all 1s";
    });
}

let userAnswer;
let btn = document.addEventListener("click", () => {
    userAnswer = prompt("How many squares do you want your grid to have?");
    removeGrid(userAnswer);
    return userAnswer;
});

function removeGrid(userAnswer) {
    while (userAnswer > 100 || userAnswer < 4) {
        userAnswer = prompt("Please select a number from 4 to 100.");
    }
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}
