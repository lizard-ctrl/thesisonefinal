let img;
function preload() {
  img = loadImage('image.png');
}
function setup() {
  // Top-left corner of the img is at (0, 0)
  // Width and height are the img's original width and height
 createCanvas(2000,900)
}

function draw() {
   
  image(img, mouseX, mouseY, 100,100);
}