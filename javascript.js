let grid = document.querySelector(".container");

// Create a 16x16 grid of square divs
for (let i = 0; i < (16**2); i++) {
    let gridDivs = document.createElement("div");
    gridDivs.style.cssText = "color: blue; background: beige; height: 48px; flex: 1 0 48px;";
    grid.appendChild(gridDivs);
    gridDivs.addEventListener("mouseenter", () => {
        // Generate random values for red, green, and blue components
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        gridDivs.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        gridDivs.style.transition = "all 0.3s";
    });
};

let userAnswer;
let btn = document.querySelector("button");
btn.addEventListener("click", question => {
    userAnswer = prompt("How many squares (from 4 to 100) do you want your grid to have?");
    if (userAnswer === null) {
        console.log("User canceled the prompt.");
    } else {
        removeGrid(userAnswer);
        createNewGrid(userAnswer);
    }
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

function createNewGrid(userAnswer) {
    for (let i = 0; i < (userAnswer**2); i++) {
        let gridDivs = document.createElement("div");
        gridDivs.style.cssText = `background: beige; width: ${768/userAnswer}px; height: ${768/userAnswer}px; flex: 1 0 auto;`;
        grid.appendChild(gridDivs);
        gridDivs.addEventListener("mouseenter", () => {
            // Generate random values for red, green, and blue components
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
            gridDivs.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            gridDivs.style.transition = "all 0.3s";
        });
    }
    return userAnswer;
}

// Transform the behavior of a square when interacting with the mouse by introducing a series of modifications.
// Rather than squares being the same color throughout the grid, randomize the squares’ RGB values with each 
// interaction.



