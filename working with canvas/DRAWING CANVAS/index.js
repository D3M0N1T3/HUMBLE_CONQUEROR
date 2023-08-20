const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

// resize canvas
canvas.height = innerHeight;
canvas.width = innerWidth;

function drawing() {
  //variables
  let painting = false;
  let thickness = document.querySelector("#number");
  let color = document.querySelector("#text");

  // declaring functions

  function startPosition(e) {
    painting = true;
    draw(e);
  }

  function endPosition() {
    painting = false;
    ctx.beginPath();
  }

  function draw(e) {
    if (!painting) return;
    ctx.lineWidth = thickness.value;
    ctx.strokeStyle = color.value;
    ctx.lineCap = "round";

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  }

  // adding Event Listener

  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", endPosition);
  canvas.addEventListener("mousemove", draw);

  // toying with my DOM

  // thickness.style.border = "1px solid '-color.value-'";
}

// creating a button that on click will clear the canvas
let reset = document.querySelector("#reset");

reset.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
