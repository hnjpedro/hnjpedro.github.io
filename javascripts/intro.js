// javascripts/intro.js
const canvas = document.getElementById("example");
const ctx = canvas.getContext("2d");
const basket = document.getElementById("bball-court");
const soccer = document.getElementById("soccer");
const nfl = document.getElementById("nfl");
const volley = document.getElementById("vball-court");
var nflLogo = new Image();
nflLogo.src = "../images/nfl-logo.png";
basket.addEventListener("click", bBallCourt);
soccer.addEventListener("click", footballField);
nfl.addEventListener("click", nflField);
volley.addEventListener("click", vBallCourt);

function aguarde() {
  ctx.setLineDash([0, 0]);
  ctx.fillStyle = "white";
  ctx.font = "30px Arial";
  ctx.textAlign = "center";
  ctx.fillText("Aguarde um instante...", canvas.width / 2, canvas.height / 2);
  setTimeout(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, 1000);
}

function bBallCourt() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  setTimeout(() => {
    leftSideCourt();
    rightSideCourt();
  }, 1200);
  canvas.style.background = "rgb(180,152,96)";
  aguarde();
}

function footballField() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  setTimeout(() => {
    leftSideField();
    rightSideField();
  }, 1200);
  canvas.style.background = "#4c8527";
  aguarde();
}

function nflField() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  setTimeout(() => {
    leftSideNFLField();
    rightSideNFLField();
    ctx.drawImage(
      nflLogo,
      canvas.width / 2 - nflLogo.width / 16,
      canvas.height / 2 - nflLogo.height / 16,
      nflLogo.width / 8,
      nflLogo.height / 8
    );
  }, 1200);
  canvas.style.background = "rgb(41,165,0)";
  aguarde();
}

function vBallCourt() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  setTimeout(() => {
    leftSidevBall();
    rightSidevBall();
  }, 1200);
  canvas.style.background = "#10abbf";
  aguarde();
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

function leftSideField() {
  // grande e pequena áreas
  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.strokeStyle = "white";
  ctx.strokeRect(0, 55, 200, 290);
  ctx.strokeRect(0, 125, 70, 150);

  // marca do pênalti
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.arc(150, 200, 8, 0, Math.PI * 2);
  ctx.fill();

  // meia-lua
  ctx.beginPath();
  ctx.arc(137, 200, 90, Math.PI * 1.75, Math.PI * 2.25);
  ctx.stroke();

  // quartos de círculo (escanteios)
  ctx.beginPath();
  ctx.arc(0, 0, 15, Math.PI * 2, Math.PI * 2.5);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 400, 15, Math.PI * 2, Math.PI * 2.5, 1);
  ctx.stroke();

  // círculo e linha centrais
  ctx.beginPath();
  ctx.moveTo(400, 0);
  ctx.lineTo(400, 400);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(400, 200, 50, Math.PI * 0.5, Math.PI * 1.5);
  ctx.stroke();
}

function rightSideField() {
  ctx.translate(canvas.width, 0);
  ctx.scale(-1, 1);
  leftSideField();
  ctx.translate(canvas.width, 0);
  ctx.scale(-1, 1);
}

function leftSideNFLField() {
  // marcações de 5 jardas e end zone
  ctx.beginPath();
  ctx.fillStyle = "rgb(9,93,12)";
  ctx.strokeStyle = "white";
  ctx.lineWidth = 3;
  ctx.fillRect(0, 0, (canvas.width * 1) / 12, canvas.height);
  ctx.moveTo((canvas.width * 1) / 12, 0);
  ctx.lineTo((canvas.width * 1) / 12, canvas.height);
  ctx.stroke();
  ctx.closePath();

  for (let i = 3 / 24; i <= 1 / 2; i += 1 / 24) {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.moveTo(canvas.width * i, 0);
    ctx.lineTo(canvas.width * i, canvas.height);
    ctx.stroke();
  }

  // marcações menores
  for (let i = 1 / 12; i <= 1 / 2; i += 1 / 24 / 5) {
    ctx.beginPath();
    ctx.moveTo(canvas.width * i, 0);
    ctx.lineTo(canvas.width * i, 15);
    ctx.moveTo(canvas.width * i, 140);
    ctx.lineTo(canvas.width * i, 150);
    ctx.moveTo(canvas.width * i, 250);
    ctx.lineTo(canvas.width * i, 260);
    ctx.moveTo(canvas.width * i, 385);
    ctx.lineTo(canvas.width * i, 400);
    ctx.stroke();
    ctx.closePath();
  }

  // marcações das jardas
  let yard = 0;
  for (let i = 1 / 8; i < 2 / 5; i += 1 / 12) {
    yard += 10;
    ctx.fillStyle = "white";
    ctx.font = "30px Tahoma";
    canvas.textAlign = "center";
    ctx.fillText(yard, canvas.width * i + 32, 350);
  }

  yard = 50;
  for (let i = 13 / 24; i < 0.8; i += 1 / 12) {
    yard -= 10;
    ctx.fillStyle = "white";
    ctx.font = "30px Tahoma";
    canvas.textAlign = "center";
    ctx.fillText(yard, canvas.width * i + 32, 350);
  }
  ctx.fillText("50", canvas.width / 2, 350);
}

function rightSideNFLField() {
  ctx.translate(canvas.width, canvas.height);
  ctx.scale(-1, -1);
  leftSideNFLField();
  ctx.translate(canvas.width, canvas.height);
  ctx.scale(-1, -1);
}

function leftSidevBall() {
  // quadra
  ctx.beginPath();
  ctx.fillStyle = "#e68064";
  ctx.fillRect(
    (canvas.width * 1) / 8,
    (canvas.height * 1) / 5,
    (canvas.width * 3) / 8,
    (canvas.height * 3) / 5
  );
  ctx.strokeStyle = "white";
  ctx.setLineDash([0, 0]);
  ctx.lineWidth = 2;
  ctx.strokeRect(
    (canvas.width * 1) / 8,
    (canvas.height * 1) / 5,
    (canvas.width * 3) / 8,
    (canvas.height * 3) / 5
  );
  ctx.closePath();

  // pontilhado superior
  ctx.beginPath();
  ctx.setLineDash([6, 8]);
  ctx.moveTo((canvas.width * 1) / 8, (canvas.height * 1) / 10);
  ctx.lineTo((canvas.width * 3) / 8, (canvas.height * 1) / 10);
  ctx.lineTo((canvas.width * 3) / 8, (canvas.height * 1) / 5);
  ctx.stroke();
  ctx.closePath();

  // linha dos 3 metros
  ctx.beginPath();
  ctx.setLineDash([0, 0]);
  ctx.moveTo((canvas.width * 3) / 8, (canvas.height * 1) / 5);
  ctx.lineTo((canvas.width * 3) / 8, (canvas.height * 4) / 5);
  ctx.stroke();

  // pontilhado inferior
  ctx.beginPath();
  ctx.setLineDash([6, 8]);
  ctx.moveTo((canvas.width * 3) / 8, (canvas.height * 4) / 5);
  ctx.lineTo((canvas.width * 3) / 8, (canvas.height * 4.5) / 5);
  ctx.stroke();
  ctx.closePath();
}

function rightSidevBall() {
  ctx.translate(canvas.width, 0);
  ctx.scale(-1, 1);
  leftSidevBall();
  ctx.translate(canvas.width, 0);
  ctx.scale(-1, 1);
}
