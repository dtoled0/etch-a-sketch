console.log("JS added properly yeehaw!");

const MAX_WIDTH = 480;
const DEFAULT_BOXES = 16;
const container = document.querySelector(".container");

function createDivGrid(maxWidth, boxCount) {
    boxSize = maxWidth / boxCount;

    for (let i = 0; i < boxCount * boxCount; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("box");
        newDiv.setAttribute('style',  `width: ${boxSize}px; height: ${boxSize}px; box-sizing: border-box; border: 1px solid black;`);
        container.appendChild(newDiv);
    }
}

function fillBoxes(boxes) {
    boxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = "#FE7743";
        });
    });
}

createDivGrid(MAX_WIDTH, DEFAULT_BOXES);

let boxes = document.querySelectorAll(".box");
fillBoxes(boxes);

// Change Grid, Reset, and Clear Grid buttons
const changeGrid = document.querySelector(".change-grid");
const reset = document.querySelector(".reset");
const clear = document.querySelector(".clear");

// Event listener and function for changeGrid
changeGrid.addEventListener('click', () => {
    console.log("Change Grid button clicked.");
    container.innerHTML = "";
    
    const newBoxCount = parseInt(prompt("Enter new grid size: \n\nEVEN NUMBERS ONLY!", "20"));
    boxSize = MAX_WIDTH / newBoxCount;

    for (i = 0; i < newBoxCount * newBoxCount; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("box");
        newDiv.setAttribute('style',  `width: ${boxSize}px; height: ${boxSize}px; box-sizing: border-box; border: 1px solid black;`);
        container.appendChild(newDiv);
    }

    let boxes = document.querySelectorAll(".box");
    fillBoxes(boxes);
});

// Event listener and function for reset
reset.addEventListener('click', () => {
    console.log("Reset button clicked.");

    container.innerHTML = "";
    createDivGrid(MAX_WIDTH, DEFAULT_BOXES);
    let boxes = document.querySelectorAll(".box");
    fillBoxes(boxes);
});

// Event listener and function for clear
clear.addEventListener('click', () => {
    console.log("Clear button clicked.");

    let boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.style.removeProperty("background-color");
    });
});