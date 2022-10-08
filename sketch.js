function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES); //without that mapping the time onto the degrees wont be possible
}

function draw() {
  background(50, 250, 250);
  translate(200,200);
  rotate(-90); //center/startpoint of bars is top not right
  
  let dy = day();
  let hr = hour();
  let mn = minute();
  let sc = second();  
 // let ms = millis();
  
  noFill();
  strokeWeight(15); //thickness of bars
  
  stroke(255, 0, 255); //barcolor
  let end_sc = map(sc, 0, 60, 0, 360) //mapping time onto degree of arc
  arc(0, 0, 300, 300, 0, end_sc); //printing arc(x, y, diameter x, diameter y, start ,end)
  
  stroke(0, 200, 255);
  let end_mn = map(mn, 0, 60, 0, 360) // -"-
  arc(0, 0, 250, 250, 0, end_mn);
  
  stroke(255, 0, 100);
  let end_hr = map(hr % 12, 0, 12, 0, 360) // -"-
  arc(0, 0, 200, 200, 0, end_hr);
  
  stroke(255, 255, 0);
  let end_dy = map(dy, 0, 31, 0, 360) // -"-
  arc(0, 0, 150, 150, 0, end_dy);
  
  //translate(0,0);
  rotate(90);
  noFill();
  //noStroke();  
  strokeWeight(1)
  
    stroke(255, 0, 100);
  text(dy +  ':' + hr +  ':' + mn +  ':' + sc, -190, -175);
  //let result = text.fontsize(6);
 // stroke(255,86,0);
 // text('31day-12hr-60min-60sec-CLOCK', -70, -175);
    stroke(255, 0, 100);
  text('dev. by Lenus', -190, 180); 
    stroke(255, 0, 100);
  text('purple: seconds', -190, -160);
    stroke(255, 0, 100);
  text('blue: minutes', -190, -145);
    stroke(255, 0, 100);
  text('red: hours', -190, -130);
    stroke(255, 0, 100);
  text('yellow: days', -190, -115);

}
