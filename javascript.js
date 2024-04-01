// Function for creating a 16x16 grid of square divs
let grid = document.querySelector(".container");
grid.style.cssText = "display: flex; justify-content: center; align-items: center; flex-wrap: wrap;" +
    "max - width: 700px; max - height: 700px; transition: background-color 0.3s ease;";

for (let i = 0; i < 16; i++) {
    let gridDivs = document.createElement("div");
    gridDivs.textContent = "Grid Divs";
    gridDivs.style.cssText = "color: blue; background: beige; min-width:150px; min-height: 150px; text-align: center;" +
        "display: flex; justify-content: center; align-items: center; ";
    grid.appendChild(gridDivs).setAttribute("id", i + 1);
    // Add hover effect
    gridDivs.addEventListener("mouseenter", () => {
        gridDivs.style.backgroundColor = "lightblue";
        gridDivs.style.transition = "all 1s";
    });
    // Remove hover effect
    gridDivs.addEventListener("mouseout", () => {
        gridDivs.style.backgroundColor = "beige";
        gridDivs.style.transition = "all 4s";
    });
}