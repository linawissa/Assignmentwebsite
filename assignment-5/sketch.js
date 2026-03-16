/*
ARTG-2262+63: Prototyping with Code
Name: Lina Wissa
Email: wissa.l@northeastern.edu
Assignment #: 5
Piece Name: Animated Background Clock
*/

let xs = [];
let ys = [];
let sp = [];
let sz = [];
let mode = [];
let al = [];

let n;          
let fade = 20;  

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  pixelDensity(1);

  n = floor((width * height) / 20000);
  if (n < 120) n = 120;
  if (n > 450) n = 450;

  for (let i = 0; i < n; i++) {
    xs[i] = random(width);
    ys[i] = random(height);

    sp[i] = random(0.8, 2.2) * (min(width, height) / 700);
    sz[i] = random(2, 7);
    al[i] = random(60, 150);

    mode[i] = floor(random(4)); 
  }
}

function draw() {
  background(5, 6, 12, fade);

  for (let i = 0; i < n; i++) {
    let nx = xs[i] / width;
    let ny = ys[i] / height;

    // simple flow using noise
    let ang = noise(nx * 2.2, ny * 2.2, frameCount * 0.004) * TWO_PI * 2;

    xs[i] += cos(ang) * sp[i];
    ys[i] += sin(ang) * sp[i];

    // wrap edges
    if (xs[i] < -10) xs[i] = width + 10;
    if (xs[i] > width + 10) xs[i] = -10;
    if (ys[i] < -10) ys[i] = height + 10;
    if (ys[i] > height + 10) ys[i] = -10;

    // color (simple)
    let r, g, b;
    if (mode[i] === 0) { r = 255; g = 90;  b = 170; }  // pink
    else if (mode[i] === 1) { r = 90;  g = 220; b = 255; } // cyan
    else if (mode[i] === 2) { r = 180; g = 120; b = 255; } // purple
    else { r = 255; g = 210; b = 90; } // gold

    fill(r, g, b, al[i]);
    circle(xs[i], ys[i], sz[i]);

    fill(255, 255, 255, 25);
    circle(xs[i] + 1, ys[i] - 1, sz[i] * 0.45);

    if (random() < 0.002) {
      xs[i] = random(width);
      ys[i] = random(height);
      mode[i] = floor(random(4));
    }
  }

  // clock thing
  let hh = nf(hour(), 2);
  let mm = nf(minute(), 2);
  let ss = nf(second(), 2);
  
  let varMonth = nf(month(), 2);
  let varDay = nf(day(),2);
  let varYear = year();

  let dateStr = varMonth + "/" + varDay + "/" + varYear;
  let timeStr = hh + ":" + mm + ":" + ss;

  fill(0, 130);
  rect(12, 12, 200, 58, 10);

  fill(255);
  textSize(16);
  textAlign(LEFT, TOP);
  text(timeStr, 24, 20);

  fill(200);
  textSize(12);
  text(dateStr, 24, 44);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
