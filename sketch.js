let zBereich;

function setup() { //einmal auszuführen
  zBereich = createCanvas(windowWidth, windowHeight);
  zBereich.position(0,0); //links oben
  zBereich.style('z-index','-1'); //Verschiebung auf der z-Achse
}

function draw() {
  // Ohne background = transparent
  noStroke;
  fill(255, 50);
  circle(mouseX, mouseY, 35);
}
