// Global Variables

const canvas = document.getElementById("graphCanvas");
const ctx = canvas.getContext("2d");
const userInput = document.getElementById("userInput");
const buttonDrawGraph = document.getElementById("drawGraph");

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

let xUser = [];
let yUser = [];

drawCanvas();

function drawFunction(functionStr, x, y, color) {
    ctx.setTransform(1, 0, 0, 1, 0, 0); 
    ctx.translate(xCenter, yCenter); 

    for (let i = 0; i <= width; i++) {
        const puntoX = (i - xCenter) * xScale;
        const puntoY = math.evaluate(functionStr, { x: (i - xCenter) }) * -1 * yScale;

        x[i] = puntoX;
        y[i] = puntoY;

        console.log(puntoX, puntoY);

    }

    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.lineWidth = 2;

    for (let i = 0; i < width; i++) {
        ctx.moveTo(x[i], y[i]);
        ctx.lineTo(x[i + 1], y[i + 1]);
    }

    ctx.stroke();
}


buttonDrawGraph.addEventListener("click", function () {
    drawCanvas();
    drawFunction(userInput.value, xUser, yUser, "lightblue");
    if (comprobarLineas()) {
        console.log("Son iguales, acertaste");
    } else {
        console.log("Fallaste, no son iguales");
    }
});

function drawCanvas() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, width, height);
    drawAxis();
    drawGrid();
    drawFunction("sin(x)", xMachine, yMachine, "red");
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