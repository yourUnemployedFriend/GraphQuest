// Global Variables

const canvas = document.getElementById("graphCanvas");
const ctx = canvas.getContext("2d");

const width = 600;
const height = 400;

const widthParts = 6;
const heightParts = 8;

const xScale = width / (widthParts);
const yScale = height / (heightParts);

const xCenter = width / 2;
const yCenter = height / 2;

// Draw Axis

ctx.strokeStyle = "blue";
ctx.beginPath();
ctx.lineWidth = 2; 

ctx.moveTo(0,yCenter);
ctx.lineTo(width,yCenter); 

ctx.moveTo(xCenter,0);
ctx.lineTo(xCenter,height);
ctx.stroke(); 

// Draw units in axis (100xp each) horizontally

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

// Draw units in axis (100xp each) vertically

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

// Draw graph function x^2 from x = -3 to x = 3 

ctx.translate(xCenter,yCenter); 
let x = [];
let y = [];

let xx;

for (let i = 0; i < width+1; i++) {
    x[i] =xCenter-i;
    xx=x[i]/xScale;
    y[i] = -yScale*Math.pow(xx,2);
}

ctx.strokeStyle = "red";
ctx.beginPath();
ctx.lineWidth = 2;

for (i=0;i<=600;i++)
{
    ctx.moveTo(x[i],y[i]);
    ctx.lineTo(x[i+1],y[i+1]);

    console.log(`(${x[i]}, ${y[i]}), (${x[i+1]}, ${y[i+1]})`);

} 

ctx.stroke()