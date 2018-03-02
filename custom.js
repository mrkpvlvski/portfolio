let yoff = 0.0

function setup() {
  const cnv = createCanvas(window.innerWidth, window.innerHeight)
  cnv.parent(document.querySelector('header'))
}

function draw() {
background(51);

fill(255);
// We are going to draw a polygon out of the wave points
beginShape();

var xoff = 0;       // Option #1: 2D Noise
// var xoff = yoff; // Option #2: 1D Noise

// Iterate over horizontal pixels
for (var x = 0; x <= width; x += 10) {
  // Calculate a y value according to noise, map to

  // Option #1: 2D Noise
  var y = map(noise(xoff, yoff), 0, 1, window.innerHeight*.7,window.innerHeight*.8);

  // Option #2: 1D Noise
  // var y = map(noise(xoff), 0, 1, 200,300);

  // Set the vertex
  vertex(x, y);
  // Increment x dimension for noise
  xoff += 0.05;
}
// increment y dimension for noise
yoff += 0.01;
vertex(width, height);
vertex(0, height);
endShape(CLOSE);
}
