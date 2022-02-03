// javascripts/intro.js
var canvas = document.getElementById("example");
var ctx = canvas.getContext("2d");

/*
// javascripts/intro.js
// ...

// ****************************
// draw rectangle:
// ****************************

// start the path
ctx.beginPath();
// starting position is x=50, y=50
ctx.moveTo(50, 50);
// draw the line that has final coordinates x=250, y=50
ctx.lineTo(250, 50);
 
// .stroke() executes the drawing

// draw the line that has final coordinates x=250, y=100
ctx.lineTo(250, 100);
// .stroke() executes the drawing
ctx.fill();

// javascripts/intro.js
// ...

// ****************************
// draw circle
// ****************************

ctx.beginPath();
// ctx.arc(x, y, radius, startAngle, endAngle)
ctx.arc(150, 170, 75, Math.PI * .5, Math.PI * 2,0);
ctx.lineWidth = 20;
ctx.strokeStyle = 'green'; // !
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(150, 170, 35, 0, Math.PI * 2);
ctx.fillStyle = 'red'; // !
// fills the inner circle with red color
ctx.fill();
ctx.closePath();

*/

// RSS/wifi symbol //
/*

roundedRect(ctx, 5, 5, 200, 200, 20);
ctx.fillStyle = "orange";
ctx.fill();
ctx.strokeStyle = "grey";
ctx.lineWidth = 10;
ctx.stroke();
ctx.strokeStyle = "red";
ctx.lineWidth = 6;
ctx.stroke();

ctx.beginPath();
ctx.arc(45, 165, 18, 0, Math.PI * 2);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(27, 183, 75, Math.PI * 1.5, Math.PI * 2);
ctx.strokeStyle = "white";
ctx.lineWidth = 25;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(27, 183, 125, Math.PI * 1.5, Math.PI * 2);
ctx.stroke();
ctx.closePath();

function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.lineTo(x, y + height - radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.lineTo(x + width - radius, y + height);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctx.lineTo(x + width, y + radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.lineTo(x + radius, y);
  ctx.arcTo(x, y, x, y + radius, radius);
  ctx.stroke();
}

*/

ctx.beginPath();
ctx.strokeStyle = '#ffffff';
ctx.lineWidth = 3;
ctx.moveTo(0,50);
ctx.lineTo(65,50);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(0,250);
ctx.lineTo(65,250);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(65, 150, 100, Math.PI * 1.5, Math.PI * 2.5);
ctx.stroke();
ctx.closePath();

ctx.fillStyle ='rgb(222,148,77)';
ctx.fillRect(0,117,120,66);
ctx.strokeRect(0,105,120,90);
ctx.strokeRect(0,112,120676);
