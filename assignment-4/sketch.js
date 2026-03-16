/*
Class: ARTG-2262 Prototyping with Code
Name: Lina Wissa
Email: wissa.l@northeastern.edu
Assignment #: 3
Pattern Title: "Pink Pop Hearts"
*/

function setup() {
  createCanvas(650, 650); // size
  noLoop();                 // draw once
}

function draw() {
  background(255, 236, 245); 

  // Create color palette
  let pink1 = color(255, 105, 180); 
  let pink2 = color(255, 170, 210); 
  let purple = color(170, 120, 255); 
  let gold = color(255, 210, 90);   

  // Use a for loop to iterate on shapes
  let step = 128; 
  for (let y = step / 2; y < height; y += step) {
    for (let x = step / 2; x < width; x += step) {

      // Use a conditional statement to design hearts vs. circles
      if ((x / step + y / step) % 2 === 0) {
        // Shape 1: circles
        noStroke();
        fill(pink2);
        circle(x, y, 70);

        fill(purple);
        circle(x, y, 28);

        // Tiny sparkles 
        if ((x + y) % 3 === 0) {
          fill(gold);
          circle(x + 22, y - 18, 10);
          circle(x - 18, y + 20, 7);
        }

      } else {
        // Shape 2: hearts
        drawHeart(x, y, 0.9, pink1);

        // Accent dot
        noStroke();
        fill(gold);
        circle(x, y + 38, 10);
      }
    }
  }
}
// create heart from two circles + a triangle
function drawHeart(cx, cy, s, c) {
  push();
  translate(cx, cy);
  scale(s);

  noStroke();
  fill(c);

  // top lobes
  circle(-18, -10, 36);
  circle(18, -10, 36);

  // bottom point
  triangle(-36, -6, 36, -6, 0, 44);

  pop();
}
