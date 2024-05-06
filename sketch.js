let video;
let angle = 0;
let segments = 6;
let maxSegments = 12;

function setup() {
  createCanvas(600, 600);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide(); 
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  let hue = map(mouseX, 0, width, 0, 360);
  let saturation = map(mouseY, 0, height, 50, 100);
  background(hue, saturation, 100);

  segments = int(map(mouseX, 0, width, 3, maxSegments));

  let speed = map(mouseY, 0, height, 0.1, 5);

  translate(width / 2, height / 2);
  rotate(angle);
  
  for (let i = 0; i < segments; i++) {
    push();
    rotate((360 / segments) * i);
    let w = width / 2;
    let h = height / 2;
    image(video, 0, 0, w, h, w / 2, h / 2, w, h);
    pop();

    push();
    scale(-1, 1); 
    rotate((360 / segments) * i);
    image(video, 0, 0, w, h, w / 2, h / 2, w, h);
    pop();
  }

  angle += speed; 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
