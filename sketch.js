function setup() {
  createCanvas(800,400);
  
}
function preload(){
  backgroundimage= loadImage("snow1.jpg");
  snow1 = loadImage("snow4.webp")
  snow2 = loadImage("snow5.webp")

  snowObject = new snow();
}

function draw() {
  background(backgroundimage);  
  drawSprites();
}