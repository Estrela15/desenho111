function setup() {
    createCanvas(800, 800);
    background("black");
  }
  
  function draw() {
    
    
    stroke("yellow")
    fill("red")
    
    //console.log(mouseisPressed);
    
    if (mouseIsPressed){
    rect(mouseX, mouseY, 100, 100);
    }
  }