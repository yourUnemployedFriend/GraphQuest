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

const functionStringMachine = generateRandomMathFunction()

function drawCanvas() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, width, height);
    drawAxis();
    drawGrid();
    drawFunction(functionStringMachine, xMachine, yMachine, "red");
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

        const power = (getRandomness(0.5)) ? 2 : 4;

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