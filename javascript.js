// Function for creating a 16x16 grid of square divs
let grid = document.querySelector(".container");
grid.style.cssText = "display: flex; justify-content: center; align-items: center; flex-wrap: wrap; max-width: 700px; max-height: 700px;";
for (let i = 0; i < 16; i++) {
    let div = document.createElement("div");
    grid.appendChild(div);
    div.setAttribute("id", i);
    div.textContent = "div";
    div.style.cssText = "color: blue; background: beige; min-width:150px; min-height: 150px; text-align: center;" +
                                 "display: flex; justify-content: center; align-items: center; ";
}
