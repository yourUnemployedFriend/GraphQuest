const userInput = document.getElementById("userInput");
const buttonDrawGraph = document.getElementById("drawGraph");
const buttonReloadGraph = document.getElementById("reloadGraph");
let USER_LINE_COLOR = USER_LINE_COLOR_DARK;

let xUser = [];
let yUser = [];

function drawFunction(x, y, color) {
    ctx.setTransform(1, 0, 0, 1, 0, 0); 
    ctx.translate(xCenter, yCenter); 

    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.lineWidth = 2;

    for (let i = 0; i < x.length; i++) {
        ctx.moveTo(x[i], y[i]);
        ctx.lineTo(x[i + 1], y[i + 1]);
    }

    ctx.stroke();
}


buttonDrawGraph.addEventListener("click", function () {
    drawCanvas();
    getFunctionCoordinates(userInput.value, xUser, yUser);
    drawFunction(xUser, yUser, USER_LINE_COLOR);
    if (comprobarLineas()) {
        console.log("Son iguales, acertaste");
    } else {
        console.log("Fallaste, no son iguales");
    }
});

buttonReloadGraph.addEventListener("click", function() {
    xMachine = [];
    yMachine = [];
    functionStringMachine = generateRandomMathFunction();
    getFunctionCoordinates(functionStringMachine, xMachine, yMachine);
    drawCanvas();
})