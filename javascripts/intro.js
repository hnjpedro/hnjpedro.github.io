// javascripts/intro.js
const canvas = document.getElementById("example");
const ctx = canvas.getContext("2d");
const basket = document.getElementById("bball-court");
const soccer = document.getElementById("soccer");
basket.addEventListener("click", bBallCourt);
soccer.addEventListener("click", footballField);

function aguarde() {
  ctx.fillStyle = "white";
  ctx.font = "30px Arial";
  ctx.textAlign = "center";
  ctx.fillText("Aguarde um instante...", canvas.width / 2, canvas.height / 2);
  setTimeout(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, 1000);
}

function footballField() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  setTimeout(() => {
    leftSideField();
    rightSideField();
  }, 1001);
  canvas.style.background = "#4c8527";
  aguarde();
}

function leftSideField() {
  // grande e pequena áreas
  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.strokeStyle = 'white';
  ctx.strokeRect(0,55,200,290);
  ctx.strokeRect(0,125,70,150);

  // marca do pênalti  
  ctx.beginPath();
  ctx.fillStyle = 'white';
  ctx.arc(150,200,8,0,Math.PI * 2);
  ctx.fill()

  // meia-lua
  ctx.beginPath();
  ctx.arc(137,200,90,Math.PI * 1.75, Math.PI * 2.25);
  ctx.stroke()

  // quartos de círculo (escanteios)
  ctx.beginPath();
  ctx.arc(0,0,15,Math.PI * 2, Math.PI * 2.5);
  ctx.stroke()
  ctx.beginPath()
  ctx.arc(0,400,15,Math.PI * 2, Math.PI * 2.5,1);
  ctx.stroke()

  // círculo e linha centrais
  ctx.beginPath();
  ctx.moveTo(400,0);
  ctx.lineTo(400,400);
  ctx.stroke();
  ctx.beginPath()
  ctx.arc(400,200,50,Math.PI * 0.5,Math.PI * 1.5);
  ctx.stroke()
}

function bBallCourt() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  setTimeout(() => {
    leftSideCourt();
    rightSideCourt();
  }, 1001);
  canvas.style.background = "rgb(180,152,96)";
  aguarde();
}

function rightSideField() {
  ctx.translate(canvas.width, 0);
  ctx.scale(-1, 1);
  leftSideField();
  ctx.translate(canvas.width, 0);
  ctx.scale(-1, 1);
}

function leftSideCourt() {
  // linha horizontal superior
  ctx.beginPath();
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 3;
  ctx.moveTo(0, 60);
  ctx.lineTo(60, 60);
  ctx.stroke();
  ctx.closePath();

  // linha horizontal inferior
  ctx.beginPath();
  ctx.moveTo(0, 340);
  ctx.lineTo(60, 340);
  ctx.stroke();
  ctx.closePath();

  // meia-lua
  ctx.beginPath();
  ctx.arc(60, 200, 140, Math.PI * 1.5, Math.PI * 2.5);
  ctx.stroke();
  ctx.closePath();

  // retângulos (preenchido e maior)
  ctx.fillStyle = "rgb(222,148,77)";
  ctx.fillRect(0, 160, 160, 80);
  ctx.strokeRect(0, 145, 160, 110);
  ctx.strokeRect(0, 160, 160, 80);

  // linha vertical dentro do garrafão + menor horizontal + bolinha
  ctx.beginPath();
  ctx.moveTo(33, 175);
  ctx.lineTo(33, 225);
  ctx.moveTo(33, 200);
  ctx.lineTo(40, 200);
  ctx.stroke();
  ctx.arc(47, 200, 7, 0, Math.PI * 2);
  ctx.fillStyle = "white";
  ctx.fill();

  // círculo exterior + círculo interior pontilhado

  ctx.beginPath();
  ctx.arc(160, 200, 40, Math.PI * 1.5, Math.PI * 2.5);
  ctx.stroke();
  ctx.beginPath();
  ctx.setLineDash([8, 2]);
  ctx.arc(160, 200, 40, Math.PI * 1.5, Math.PI * 2.5, 1);
  ctx.stroke();
  ctx.closePath();

  //círculo central + linha central
  ctx.beginPath();
  ctx.fillStyle = "rgb(222,148,77)";
  ctx.arc(400, 200, 45, Math.PI * 1.5, Math.PI * 2.5, 1);
  ctx.setLineDash([]);
  ctx.lineWidth = 7;
  ctx.stroke();
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.moveTo(400, 0);
  ctx.lineTo(400, 400);
  ctx.stroke();
}

function rightSideCourt() {
  ctx.translate(canvas.width, 0);
  ctx.scale(-1, 1);
  leftSideCourt();
  ctx.translate(canvas.width, 0);
  ctx.scale(-1, 1);
}
