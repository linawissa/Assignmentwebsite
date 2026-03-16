/*
Name: Lina Wissa
Email: Wissa.l@northeastern.edu
Course: ARTG-2262 Prototyping with Code
Lab #: 3
Assignment #: 3
Assignment Title: "Self-Portrait"
*/

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(235, 225, 210); 

  // Pyramids
  noStroke();
  fill(210, 180, 120); 
  triangle(80, 340, 220, 140, 360, 340);

  fill(190, 160, 105); 
  triangle(260, 360, 400, 160, 540, 360);

  //Side Hair
  noStroke();
  fill(90, 55, 35); 
  ellipse(190, 350, 80, 200);
  ellipse(410, 350, 80, 200); 

  // Face
  noStroke();
  fill(245, 210, 180); 
  ellipse(300, 350, 220, 260);

  // Top Hair
  noStroke();
  fill(90, 55, 35);
  arc(300, 265, 230, 170, PI, TWO_PI);

  // Eyes
  fill(255);
  ellipse(255, 340, 50, 30);
  ellipse(345, 340, 50, 30);

  fill(90, 60, 30); 
  ellipse(255, 340, 18, 18);
  ellipse(345, 340, 18, 18);

  fill(0);
  ellipse(255, 340, 8, 8);
  ellipse(345, 340, 8, 8);

  // Nose
  noFill();
  stroke(120, 80, 60);
  strokeWeight(3);
  beginShape();
  vertex(300, 350);
  vertex(290, 390);
  vertex(305, 400);
  endShape();

  //  Lips 
  stroke(160, 80, 90);
  strokeWeight(4);
  noFill();
  arc(300, 440, 70, 30, 0, PI);

  // Eyebrows
  stroke(120, 80, 60);
  strokeWeight(2);
  line(230, 295, 270, 295);
  line(330, 295, 370, 295);

  // Title bottom right 
  noStroke();
  fill(40);
  textSize(16);
  textAlign(RIGHT, BOTTOM);
  text("Lina at the Pyramids", width - 15, height - 15);
}
