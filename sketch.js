let currentColor;
let brushSize = 20;

function setup() {
  createCanvas(400, 400);
  background(255);      
  currentColor = color(51);
}

function draw() {
  if (mouseIsPressed) {   
    fill(currentColor);
    noStroke();
    ellipse(mouseX, mouseY, brushSize, brushSize);
  }
}

function keyPressed() {
  //if you want to change colour just use keyboard
  if (key === 'R') currentColor = color(255, 0, 0);
  if (key === 'G') currentColor = color(0, 255, 0);
  if (key === 'B') currentColor = color(0, 0, 255);
//if you want to change the size of brush:
  if (key === '=') brushSize += 5;
  if (key === '-') brushSize -= 5;
  if (key ==='C') clear();

  brushSize = constrain(brushSize, 5, 100);
  //save your work
  if (key === 'S') {
    save('myCanvas.jpg');
}
}

