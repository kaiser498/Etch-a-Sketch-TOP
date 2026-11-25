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

const colorContainer = document.createElement("div");

const colorChoices = [
    "Black", "White", "Red", "Green", "Yellow", "Blue", "Brown", "Orange",
    "Pink", "Purple", "Grey"
];

colorChoices.forEach((color) => {
    const btn = document.createElement("button");
    btn.textContent = color;
    btn.classList.toggle("colorBtn");
    colorContainer.append(btn);
})

const body = document.body;
body.insertBefore(colorContainer, container);

const colorBtns = document.querySelectorAll(".colorBtn");
colorBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        divsInGrid.forEach((div) => {
            div.addEventListener("mouseenter", () => {
                div.style.backgroundColor = btn.textContent;
            })
        })
    })
})