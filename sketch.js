function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  // fill(random(255), random(255), random(255));
  // lollipop1
  lollipop(mouseX, 200, 150,100, color(random(255), random(255), random(255)), color(random(255), random(255), random(255)));

  // lillipop2
  lollipop(100, mouseY, 100, 50, color(random(255), random(255), random(255)), color(random(255), random(255), random(255)));

  lollipop(170, 130, 80, 20, color(random(255), random(255), random(255)), color(random(255), random(255), random(255)));
}

function lollipop(x, y, stickLength, lolliDiameter, lolliHeadColor, lolliStickColor){
  fill(lolliStickColor);
  rect(x-10, y, 20, stickLength);

  fill(lolliHeadColor);
  ellipse(x, y, lolliDiameter);
}