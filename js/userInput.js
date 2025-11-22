const userInput = document.getElementById("userInput");
const buttonDrawGraph = document.getElementById("drawGraph");

let xUser = [];
let yUser = [];

function drawFunction(functionStr, x, y, color) {
    ctx.setTransform(1, 0, 0, 1, 0, 0); 
    ctx.translate(xCenter, yCenter); 

    step = 0.1;

    for (let i = 0; i <= width; i += step) {
        const puntoX = (i - xCenter) * xScale;
        const puntoY = math.evaluate(functionStr, { x: (i - xCenter) }) * -1 * yScale;

        x.push(puntoX);
        y.push(puntoY);
    }

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
    drawFunction(userInput.value, xUser, yUser, "lightblue");
    if (comprobarLineas()) {
        console.log("Son iguales, acertaste");
    } else {
        console.log("Fallaste, no son iguales");
    }
});