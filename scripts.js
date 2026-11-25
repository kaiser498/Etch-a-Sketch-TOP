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

const blackClr = document.createElement("button");
const whiteClr = document.createElement("button");
const redClr = document.createElement("button");
const greenClr = document.createElement("button");
const yellowClr = document.createElement("button");
const blueClr = document.createElement("button");
const brownClr = document.createElement("button");
const orangeClr = document.createElement("button");
const pinkClr = document.createElement("button");
const purpleClr = document.createElement("button");
const grayClr = document.createElement("button");

blackClr.textContent = "black";
whiteClr.textContent = "white";
redClr.textContent = "red";
greenClr.textContent = "green";
yellowClr.textContent = "yellow";
blueClr.textContent = "blue";
brownClr.textContent = "brown";
orangeClr.textContent = "orange";
pinkClr.textContent = "pink";
purpleClr.textContent = "purple";
grayClr.textContent = "gray";

const colorBtns = document.querySelectorAll("button");

colorContainer.append(...colorBtns);