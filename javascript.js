// Creates a 16x16 grid of square divs
let grid = document.querySelector(".container");
grid.style.cssText = "display: flex; justify-content: center; align-items: center; flex-wrap: wrap;" +
    "max-width: 800px; max-height: 800px; transition: background-color 0.3s ease;";

for (let i = 0; i < (16**2); i++) {
    let gridDivs = document.createElement("div");
    gridDivs.style.cssText = "color: blue; background: beige; min-width: 20px; min-height: 20px;" + 
        "display: flex; justify-content: center; align-items: center; ";
    grid.appendChild(gridDivs);
    gridDivs.addEventListener("mouseenter", () => {
        gridDivs.style.backgroundColor = "lightblue";
        gridDivs.style.transition = "all 0.5s";
    });
};

let userAnswer;
let btn = document.querySelector("button");
btn.addEventListener("click", () => {
    userAnswer = prompt("How many squares do you want your grid to have?");
    removeGrid(userAnswer);
    newGrid(userAnswer);
});

function removeGrid(userAnswer) {
    while (userAnswer > 100 || userAnswer < 4) {
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
        gridDivs.style.cssText = "background: beige; min-width: 10px; min-height: 10px;" +
            "display: flex; justify-content: center; align-items: center; ";
        grid.appendChild(gridDivs);
        gridDivs.addEventListener("mouseenter", () => {
            gridDivs.style.backgroundColor = "lightblue";
            gridDivs.style.transition = "all 1s";
        });
    }
    return userAnswer;
}
