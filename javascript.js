// Creates a 16x16 grid of square divs
let grid = document.querySelector(".container");
// grid.style.cssText = "display: flex; flex-wrap: wrap; justify-content: center; align-items: center"; +
//     "max-width: 990px; max-height: 990px;";

for (let i = 0; i < (16**2); i++) {
    let gridDivs = document.createElement("div");
    gridDivs.style.cssText = "color: blue; background: beige; height: 50px; flex: 1 0 50px;";
    grid.appendChild(gridDivs);
    gridDivs.addEventListener("mouseenter", () => {
        gridDivs.style.backgroundColor = "lightblue";
        gridDivs.style.transition = "all 0.3s";
    });
};

let userAnswer;
let btn = document.querySelector("button");
btn.addEventListener("click", () => {
    userAnswer = prompt("How many squares (from 4 to 100) do you want your grid to have?");
    removeGrid(userAnswer);
    newGrid(userAnswer);
});

function removeGrid(userAnswer) {
    while (userAnswer >= 100 || userAnswer < 4) {
        userAnswer = prompt("Please select a valid number from 4 to 100.");
    }
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    return userAnswer;
}

function newGrid(userAnswer) {
    for (let i = 0; i < (userAnswer**2); i++) {
        let gridDivs = document.createElement("div");
        gridDivs.style.cssText = `background: beige; width: ${800/userAnswer}px; height: ${800/userAnswer}px; flex: 1 0 auto;`;
        grid.appendChild(gridDivs);
        gridDivs.addEventListener("mouseenter", () => {
            gridDivs.style.backgroundColor = "lightblue";
        });
    }
    return userAnswer;
}

// Transform the behavior of a square when interacting with the mouse by introducing a series of modifications.
// Rather than squares being the same color throughout the grid, randomize the squares’ RGB values with each 
// interaction.



