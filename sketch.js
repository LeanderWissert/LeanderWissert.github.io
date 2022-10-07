let zBereich;

var radius = 0;
var winkel = 0;

function setup() { //einmal auszuführen
  zBereich = createCanvas(windowWidth, windowHeight);
  zBereich.position(0,0); //links oben
  zBereich.style('z-index','-1'); //Verschiebung auf der z-Achse
  
    background(0);
  frameRate(60);
  smooth();
}

function draw() {
  // Ohne background = transparent
  text("X-Koordinate der Maus: " + mouseX , 100, 180);
  noStroke;
 // if(  ){}else{}
  fill(mouseX/windowWidth*255, mouseY/windowHeight*255, 100); //fill(r,g,b)
  circle(mouseX, mouseY, 35);
  
  var x = radius*cos(winkel); //Polarkoordinate von x
  var y = radius*sin(winkel); //Polarkoordinate von y
  noStroke();
  fill(random(0, 255), random(0,255), random(0,255));
  circle(200+x,200+y,10);
  winkel = winkel+1/10;
  radius = radius+1;
}
