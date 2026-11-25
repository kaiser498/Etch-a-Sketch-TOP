const container = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.toggle("oneSquareDiv");
    container.append(div);
}

const divsInGrid = document.querySelectorAll(".oneSquareDiv");

divsInGrid.forEach((div) => {
    div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = "black";
    })
})