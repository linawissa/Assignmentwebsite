/*
Class: ARTG-2262/63 Prototyping with Code
Name: Lina Wissa
Email: wissa.l@northeastern.edu
Assignment: [6] Drawing App

Instructions:
- Drag mouse to draw
- Press E to switch to eraser
- Press D to switch back to drawing
- Press R/G/B/K to change color
- Press C to clear
- Press S to save
*/

let strokeClr = [0,0,0,127];
let eraser = false;

function setup() {
  createCanvas(600,600);
  background(255);
}

function draw() {

  if(mouseIsPressed){

    let d = dist(pmouseX, pmouseY, mouseX, mouseY);
    strokeWeight(0.2*d);

    if(eraser){
      stroke(255);
    } else{
      stroke(strokeClr);
    }

    line(pmouseX, pmouseY, mouseX, mouseY);
  }

  // instruction panel
  noStroke();
  fill(255);
  rect(0,0,600,60);

  fill(0);
  textSize(12);
  text("Drag mouse to draw | E = erase | D = draw",10,20);
  text("R = red | G = green | B = blue | K = black",10,35);
  text("C = clear | S = save",10,50);
}

function keyPressed(){

  if(key == 'C' || key == 'c'){
    background(255);
  }

  else if(key == 'S' || key == 's'){
    saveCanvas('drawing','png');
  }

  else if(key == 'E' || key == 'e'){
    eraser = true;
  }

  else if(key == 'D' || key == 'd'){
    eraser = false;
  }

  else if(key == 'R' || key == 'r'){
    strokeClr = [255,0,0,127];
  }

  else if(key == 'G' || key == 'g'){
    strokeClr = [0,255,0,127];
  }

  else if(key == 'B' || key == 'b'){
    strokeClr = [0,0,255,127];
  }

  else if(key == 'K' || key == 'k'){
    strokeClr = [0,0,0,127];
  }

}