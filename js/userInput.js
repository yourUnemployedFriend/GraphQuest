const userInput = document.getElementById("userInput");
const buttonDrawGraph = document.getElementById("drawGraph");
const buttonReloadGraph = document.getElementById("reloadGraph");
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popupTitle");
const popupSubtitle = document.getElementById("popupSubtitle");


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


buttonDrawGraph.addEventListener("click", drawUserFunction);
userInput.addEventListener("keydown", function (event) {
    if(event.key === 'Enter') {
        drawUserFunction();     
    }
})

function drawUserFunction() {
    drawCanvas();
    getFunctionCoordinates(userInput.value, xUser, yUser);
    drawFunction(xUser, yUser, USER_LINE_COLOR);
    if (comprobarLineas()) {
        showPopup(true);
    } else {
        showPopup(false);
    }
}

buttonReloadGraph.addEventListener("click", function() {
    xMachine = [];
    yMachine = [];
    functionStringMachine = generateRandomMathFunction();
    getFunctionCoordinates(functionStringMachine, xMachine, yMachine);
    drawCanvas();
})

function showPopup(correct) {

    if (correct)
    {
        popup.style.backgroundColor = "#87eb75";
        popup.style.boxShadow = "0px 0px 20px #87eb75";
        popupTitle.innerText = "You guessed it :D";
        popupSubtitle.innerText = 'Press "Reload" for another one';
    } else {
        popup.style.backgroundColor = "#eb7575";
        popup.style.boxShadow = "0px 0px 20px #eb7575";
        popupTitle.innerText = "You got it wrong :[";
        popupSubtitle.innerText = 'Go try again';
    }

    popup.style.top = "10%";
    setTimeout(() => {
        popup.style.top = "-10%";
    }, 2000);

}