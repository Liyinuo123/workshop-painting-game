let currentColor;
let brushSize = 20;

function setup() {
  createCanvas(400, 400);
  background(255);      
  currentColor = color(51);
  fill(100); // 文字颜色（灰色）
  textSize(16); // 文字大小
  textAlign(CENTER); // 文字居中
  text("这是一个画画游戏", width / 2, 30); 
  text("按 R, G, B 换色 | C 清屏 | S 保存", width / 2, 55);
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

