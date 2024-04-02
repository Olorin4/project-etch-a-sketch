let grid = document.querySelector(".container");

// Create a grid of square divs
let userAnswer;
createNewGrid(16);
function createNewGrid(userAnswer) {
    for (let i = 0; i < (userAnswer**2); i++) {
        let gridDivs = document.createElement("div");
        gridDivs.style.cssText = `background: beige; width: ${768/userAnswer}px; height: ${768/userAnswer}px; flex: 1 0 auto;`;
        grid.appendChild(gridDivs);
        gridDivs.addEventListener("mouseenter", () => {
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
            gridDivs.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            gridDivs.style.transition = "all 0.3s";
        });
    }
}

let btn = document.querySelector("button");
btn.addEventListener("click", getUserAnswer);
function getUserAnswer(userAnswer) {
    userAnswer = prompt("How many squares (from 1 to 100) do you want your grid to have?");
    if (userAnswer === null) {
        console.log("User canceled the prompt.");
    } else if (userAnswer > 100 || userAnswer <= 0 || isNaN(userAnswer)) {
        userAnswer = prompt("Please select a valid number from 1 to 100.");
    } else {
        while (grid.firstChild) {
            grid.removeChild(grid.firstChild);
            }
        createNewGrid(userAnswer);
    }
}