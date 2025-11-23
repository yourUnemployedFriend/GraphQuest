const canvas = document.getElementById("graphCanvas");
const ctx = canvas.getContext("2d");

const width = 600;
const height = 600;

const widthParts = 20;
const heightParts = 20;

const xScale = width / (widthParts);
const yScale = height / (heightParts);

const xCenter = width / 2;
const yCenter = height / 2;

canvas.height = height;
canvas.width = width;

let xMachine = [];
let yMachine = [];

function drawCanvas() {
    clearCanvas();
    drawAxis();
    drawGrid();
    drawNumbers();
    drawFunction(xMachine, yMachine, "red");
}

function getFunctionCoordinates(functionStr, x, y) {
    step = 0.1;

    for (let i = 0; i <= width; i += step) {
        const puntoX = (i - xCenter) * xScale;
        const puntoY = math.evaluate(functionStr, { x: (i - xCenter) }) * -1 * yScale;

        x.push(puntoX);
        y.push(puntoY);
    }
}

function comprobarLineas() {
    for (let index = 0; index < xMachine.length; index++) {
        if (xMachine[index] != xUser[index] || yMachine[index] != yUser[index]) {
            return false;
        }
        else {
            return true;
        }

    }
}

function clearCanvas() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, width, height);
    xUser = [];
    yUser = [];
}

function drawAxis() {
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.lineWidth = 2; 

    ctx.moveTo(0,yCenter);
    ctx.lineTo(width,yCenter); 

    ctx.moveTo(xCenter,0);
    ctx.lineTo(xCenter,height);
    ctx.stroke(); 
}

function drawGrid() {
    ctx.strokeStyle = "grey";
    ctx.beginPath();
    ctx.lineWidth = 0.5;

    for (let index = 0; index < widthParts; index++) {
        if (index*xScale != xCenter)
        {
            ctx.moveTo(index*xScale, 0);
            ctx.lineTo(index*xScale, height);
        }
    }

    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 0.5;

    for (let index = 0; index < heightParts; index++) {
        if (index*yScale != yCenter)
        {
            ctx.moveTo(0,index*yScale);
            ctx.lineTo(width,index*yScale);
        }
        
    }

    ctx.stroke();

}

function drawNumbers() {
    ctx.font = "10px Arial";
    for (let index = -widthParts / 2 + 1; index < widthParts / 2; index++) {
        if (index != 0) {
            ctx.fillText(index, xCenter + (index * xScale) - 3, yCenter + 10);
        }
    }

    ctx.textAlign = "right";

    for (let index = -heightParts / 2 + 1; index < heightParts / 2; index++) {
        if (index != 0) {
            ctx.fillText(index * -1, xCenter - 5, yCenter + (index * yScale))
        }
    }

}

function generateRandomMathFunction() {

    const signs = ["+", "-", "*", "/"];

    let functionString = "x";

    if (getRandomness(0.2)) {
        
        let multiplication = generateRandomInt(20, -10);

        if (multiplication != 0) {
            functionString = multiplication + functionString;
        }

    }

    if (getRandomness(0.8)) {

        const power = generateRandomInt(10, 0);

        functionString += "^" + power;
    }

    if (getRandomness(0.7)) {
        functionString += signs[generateRandomInt(3, 0)] + generateRandomInt(4, 0)
    }

    console.log(functionString);
    

    return functionString;

}

function generateRandomInt(max, min) {
    return Math.round(Math.random() * max + min);
}

function getRandomness(percentage) {
    return Math.random() >= percentage;
}