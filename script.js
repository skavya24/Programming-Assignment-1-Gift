/*
   Description: Too(2) Surprised
   Author: Kavya S
   Date of last edit: Feb 27, 2022
*/
/*
  Interactions: 
  -Present box (mouse press)
  -Hanging gray lights (any key)
  -Light bulb (mouse press)
  Note: Open in a tall & wide tab 
*/

let phoneY = 150; //phone
let lidX = 20; //lid
let l1 = 200; //light top
let l2 = 255; //light bottom

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //variables used in if statements for efficiency & organization
  let giftX = windowWidth/2 - 100; 
  let giftY = windowHeight/2 - 50; 

  let bulbX = windowWidth/2; 
  let bulbY = 50;

  strokeWeight(2);
  stroke(200);

  //if bulb is pressed, it will reveal the dark side, else normal 
  if (mouseIsPressed==true && mouseX>=bulbX-25 && mouseY>=bulbY-40 && mouseX<=bulbX+25 && mouseY<=bulbY+25) {
    background(200);

    //red lights  
    stroke(0);
    noFill();
    bezier(bulbX-100, bulbY+30, bulbX-100, bulbY+100, bulbX+100, bulbY+100, bulbX+100, bulbY+30);    
    bezier(bulbX-300, bulbY+30, bulbX-300, bulbY+100, bulbX-100, bulbY+100, bulbX-100, bulbY+30);    
    bezier(bulbX+100, bulbY+30, bulbX+100, bulbY+100, bulbX+300, bulbY+100, bulbX+300, bulbY+30);    
    fill(185, 1, 1, 255);
    circle(bulbX-100, bulbY+30, 10);
    circle(bulbX-300, bulbY+30, 10);
    circle(bulbX+100, bulbY+30, 10);
    circle(bulbX+300, bulbY+30, 10);
    circle(bulbX, bulbY+82, 10);
    circle(bulbX-200, bulbY+82, 10);
    circle(bulbX+200, bulbY+82, 10);

    //confetti 
    noStroke();
    frameRate(10);
    let a = random(giftY); 
    let b = random(giftY);
    let c = random(giftY);
    let d = random(giftY);
    let e = random(giftY);
    fill(185, 1, 1, 255);
    circle(giftX-10, a, random(15));
    circle(giftX-30, b, random(15));
    rect(giftX-50, c, random(20), random(15));
    circle(giftX+10, d, random(15));
    circle(giftX+30, e, random(15));
    rect(giftX+50, a, random(20), random(15));
    circle(giftX+70, c, random(15));
    rect(giftX+90, b, random(20), random(15));
    circle(giftX+110, d, random(15));
    circle(giftX+130, e, random(15));
    rect(giftX+150, a, random(20), random(15));
    circle(giftX+170, b, random(15));
    circle(giftX+190, d, random(15));
    rect(giftX+210, c, random(20), random(15));
    for(i = 0; i < 100; i++){
      a += 1;
      b += 1;
      c += 1;
    }
    
    //phone comes out of the box
    stroke(200);
    fill(0);
    rect(giftX+60, phoneY, 80, 150, 8);
    fill(200);
    rect(giftX+85, phoneY+15, 30, 2, 8);
    rect(giftX+70, phoneY+30, 60, 100);
    if(phoneY >= 85){
      phoneY -= 5;
    } 
    
    //creepy message
    fill(255, 0, 0);
    noStroke();
    text('Hi', giftX+94, phoneY+75);
    text('There', giftX+85, phoneY+90);  
    
    fill(0);
    square(giftX, giftY, 200, 10); //box
    
    //open lid
    rect(giftX-lidX, giftY-30, 240, 50, 5); 
    if (lidX <= 230) {
      lidX += 8; 
    } 
    
    //black bulb
    strokeWeight(3);
    rect(windowWidth/2-22, 10, 44, 10, 3);
    noStroke();
    square(windowWidth/2-15, 20, 30);
    ellipse(bulbX, bulbY, 50, 50);
    
    //eyes
    fill(255);
    ellipse(giftX+50, giftY+50, 50, 30);
    ellipse(giftX+150, giftY+50, 50, 30);
    fill(61, 180, 183);
    circle(giftX+50, giftY+50, 10);
    fill(235, 219, 14, 255);
    circle(giftX+150, giftY+50, 10);
    
    //smile
    noFill();
    strokeWeight(5);
    stroke(185, 1, 1, 255);
    bezier(giftX+50,giftY+100,giftX+100,giftY+140,giftX+100,giftY+140,giftX+150,giftY+100);    
    noStroke();

    //tiny presents
    noStroke();
    fill(0);
    square(giftX+170, giftY+120, 100, 10);
    square(giftX-100, giftY+80, 130, 10);
    fill(185, 1, 1, 255);
    rect(giftX+170, giftY+140, 100, 20); //horizontal ribbon right
    rect(giftX+210, giftY+120, 20, 100); //vertical ribbon right
    rect(giftX-100, giftY+130, 130, 20); //horizontal ribbon left
    rect(giftX-45, giftY+80, 20, 130); //vertical ribbon left
    stroke(0);
    strokeWeight(2);
    fill(61, 180, 183);
    bezier(giftX+220,giftY+120,giftX+265,giftY+80,giftX+235,giftY+70,giftX+220,giftY+120);//Rgift right bow
    bezier(giftX+220,giftY+120,giftX+215,giftY+80,giftX+175,giftY+70,giftX+220,giftY+120);//Rgift left bow
    fill(235, 219, 14, 255);
    bezier(giftX-35,giftY+80,giftX+10,giftY+40,giftX-20,giftY+30,giftX-35,giftY+80);//Lgift right bow
    bezier(giftX-35,giftY+80,giftX-40,giftY+40,giftX-80,giftY+30,giftX-35,giftY+80);//Lgift bow 
    
  } else {
    background(245);

    //grey lights  
    noFill();
    bezier(bulbX-100,bulbY+30,bulbX-100,bulbY+100,bulbX+100,bulbY+100,bulbX+100,bulbY+30);    
    bezier(bulbX-300,bulbY+30,bulbX-300,bulbY+100,bulbX-100,bulbY+100,bulbX-100,bulbY+30);    
    bezier(bulbX+100,bulbY+30,bulbX+100,bulbY+100,bulbX+300,bulbY+100,bulbX+300,bulbY+30);    
    fill(l1);
    circle(bulbX-100, bulbY+30, 10);
    circle(bulbX-300, bulbY+30, 10);
    circle(bulbX+100, bulbY+30, 10);
    circle(bulbX+300, bulbY+30, 10);
    noFill();
    fill(l2);
    circle(bulbX, bulbY+82, 10);
    circle(bulbX-200,bulbY+82, 10);
    circle(bulbX+200,bulbY+82, 10);
    
    //if box is pressed, lid opens for confetti and phone
    if (mouseIsPressed && mouseX>=giftX && mouseY>=giftY && mouseX<=giftX+200 && mouseY<=giftX+200) {
      //opens lid
      if (lidX <= 230) { 
        lidX += 8; 
      } 
      
      //confetti 
      noStroke();
      frameRate(10);
      let a = random(giftY); 
      let b = random(giftY);
      let c = random(giftY);
      let d = random(giftY);
      let e = random(giftY);
      fill(random(100,255), random(100), random(100,255));
      circle(giftX-10, a, random(15));
      circle(giftX-30, b, random(15));
      rect(giftX-50, c, random(20), random(15));
      circle(giftX+10, d, random(15));
      circle(giftX+30, e, random(15));
      rect(giftX+50, a, random(20), random(15));
      circle(giftX+70, c, random(15));
      rect(giftX+90, b, random(20), random(15));
      circle(giftX+110, d, random(15));
      circle(giftX+130, e, random(15));
      rect(giftX+150, a, random(20), random(15));
      circle(giftX+170, b, random(15));
      circle(giftX+190, d, random(15));
      rect(giftX+210, c, random(20), random(15));
      for(i = 0; i < 100; i++){
        a += 1;
        b += 1;
        c += 1;
      }
      
      //phone comes out of the box
      fill(61, 180, 183);
      rect(giftX+60, phoneY, 80, 150, 8);
      fill(250);
      rect(giftX+85, phoneY+15, 30, 4, 8);
      rect(giftX+70, phoneY+30, 60, 100);
      if(phoneY >= 85){
        phoneY -= 5;
      } 
    } else { //present not pressed 
      //close lid
      if (lidX >= 25) {
        lidX -= 8; 
      } 
      //phone goes back in the box
      noStroke();
      fill(61, 180, 183);
      rect(giftX+60, phoneY, 80, 150, 8);
      fill(250);
      rect(giftX+85, phoneY+15, 30, 4, 8);
      rect(giftX+70, phoneY+30, 60, 100);
      if(phoneY <= giftY-10) {
        phoneY +=5;
      }
    }
    
    //nice message
    fill(random(100,255), random(100), random(100,255));
    noStroke();
    text('Happy', giftX+85, phoneY+75);
    text('Birthday', giftX+80, phoneY+90);

    //box 
    strokeWeight(2);
    stroke(230);
    fill(230);
    square(giftX, giftY, 200, 10);
    
    fill(185, 1, 1, 255);
    rect(giftX, giftY+90, 200, 20); //horizontal ribbon
    rect(giftX+90, giftY, 20, 200); //vertical ribbon
    noStroke();
    
    //lid
    fill(230);
    rect(giftX-lidX, giftY-30, 240, 50, 5);
    
    //bulb
    stroke(245);
    fill(235, 219, 14, 255);
    strokeWeight(.5);
    rect(windowWidth/2-22, 10, 44, 10, 3);
    noStroke();
    square(windowWidth/2-15, 20, 30);
    ellipse(bulbX, bulbY, 50, 50);

    //right tiny presents
    square(giftX+170, giftY+120, 100, 10);
    fill(61, 180, 183);
    rect(giftX+170, giftY+140, 100, 20); //horizontal ribbon
    rect(giftX+210, giftY+120, 20, 100); //vertical ribbon
    stroke(210);
    strokeWeight(2);
    fill(220)
    bezier(giftX+220,giftY+120,giftX+265,giftY+80,giftX+235,giftY+70,giftX+220,giftY+120);//right bow
    bezier(giftX+220,giftY+120,giftX+215,giftY+80,giftX+175,giftY+70,giftX+220,giftY+120);//left bow

    //left tiny present
    noStroke();
    fill(185, 1, 1, 255);
    square(giftX-100, giftY+80, 130, 10);
    fill(240);
    rect(giftX-100, giftY+130, 130, 20); //horizontal ribbon
    rect(giftX-45, giftY+80, 20, 130); //vertical ribbon
    stroke(50, 170, 170);
    fill(61, 180, 183);
    bezier(giftX-35,giftY+80,giftX+10,giftY+40,giftX-20,giftY+30,giftX-35,giftY+80);//right bow
    bezier(giftX-35,giftY+80,giftX-40,giftY+40,giftX-80,giftY+30,giftX-35,giftY+80);//left bow
      
  }
}

//changes which string light is on 
function keyPressed(){
   if (l1 == 200){
    l1 = 255;
     l2 = 200;
   } else {
     l1 = 200;
     l2 = 255;
  }
}