const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.globalComposition = "destination-over";

canvas.height = innerHeight;
canvas.width = innerWidth;

const button = document.getElementById("button");
const txt = document.getElementById("demo");
let form = Math.random(); // * (10 - 4) + 4; //prompt("Pick A Digit");

// create a function  to draw the work  on the canvas
let number = 0;
let scale = 10;
let hue = 0;
let hue2 = 0;
function draw() {
  let angle = number * form;
  let radius = scale * Math.sqrt(angle);
  let x = radius * Math.sin(angle) + canvas.width / 2;
  let y = radius * Math.cos(angle) + canvas.height / 2;

  ctx.fillStyle = "hsl(" + hue + ", 100%, 50%)";
  ctx.strokeStyle = "black"; //"hsl(" + hue2 + ", 100%, 50%)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(x, y, 8, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  number++;
  hue++;
  hue2++;
}

let rare;

function animate() {
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw();
  if (number > canvas.height && canvas.width) return;
  rare = requestAnimationFrame(animate);
}

window.addEventListener("keydown", () => {
  animate();
  txt.innerHTML = form;
});

let dan = false;

button.addEventListener("click", () => {
  dan = true;

  if (dan === true) {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    cancelAnimationFrame(rare);
    number = 0;
    dan = false;
  } //else {
  //return;
  //}
});
