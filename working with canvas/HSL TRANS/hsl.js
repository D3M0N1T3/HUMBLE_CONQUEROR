// select the DOM for your canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set the height and width of your work
canvas.width = innerWidth;
canvas.height = innerHeight;

// Declaring variables for Increment
let y = canvas.height / 2 - 70;
let x = 0;
let hue = 0;

//draw your work in a function
function draw() {
  ctx.fillStyle = "hsl(" + hue + ", 100%, 50%)";
  ctx.fillRect(x, canvas.height / 2 - 70, 50, 100);
  ctx.fill();

  //  This is the increment so as to make it move and change color as it moves on
  hue++;
  x++;
}

// create animation
function animate() {
  // ctx.clearRect(0, 0, canvas.width, canvas.height);

  // call the draw function
  draw();

  // I added an if statement that if the work is larger than the canvas it should stop
  if (x > canvas.width) return;
  requestAnimationFrame(animate);
}

// Add an Event Listener to Call the Function When Any Key Is Clicked

addEventListener("keydown", (event) => {
  console.log(event);
  animate();
});
