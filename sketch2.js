function setup() {
    createCanvas(windowHeight, windowWidth);
  }
  
  function draw() {
    let mX= mouseX;
    let mY= mouseY;
    fill(255,0,0)
    text('you are here', mouseX, mouseY)
    print(mouseX)
  }