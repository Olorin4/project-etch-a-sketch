// Function for creating a 16x16 grid of square divs
let grid = document.querySelector(".container");
for (let i = 0; i <= 16; i++) {
    let div = document.createElement("div");
    grid.appendChild(div);
}
