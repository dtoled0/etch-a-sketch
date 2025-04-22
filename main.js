console.log("JS added properly yeehaw!");

const MAX_WIDTH = 960;
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

createDivGrid(MAX_WIDTH,DEFAULT_BOXES);

let boxes = document.querySelectorAll(".box");
fillBoxes(boxes);