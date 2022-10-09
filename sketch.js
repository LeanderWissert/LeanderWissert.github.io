let zBereich;

function setup() { //einmal auszuführen
  zBereich = createCanvas(windowWidth, windowHeight);
  zBereich.position(0,0); //links oben
  zBereich.style('z-index','-1'); //Verschiebung auf der z-Achse
  
}

function draw() {
  // Ohne background = transparent
  text("X-Koordinate der Maus: " + mouseX , 120, 200);
  noStroke;
 // if(  ){}else{}
  fill(mouseX/windowWidth*255, mouseY/windowHeight*255, 100); //fill(r,g,b)
  circle(mouseX, mouseY, 35);
  
}
