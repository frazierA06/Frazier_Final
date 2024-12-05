function preload(){
  img1 =loadImage("assets/tpab.jpg")
  img2 =loadImage("assets/turbo.webp")
  gif1 =loadImage("assets/ocean.gif")
}
let pos = [1]
let position = [0];
let myArray = [];
let a = [];
let b = [];
let c = []; 
let d = [];
let w = [];
let where1 = 400; 
let where2 = 0;
let where = 0;
let squareX;
let squareY;
let changeX;
let changeY;
function setup() {
 createCanvas(550, 550);
  
    angleMode(DEGREES);
  spiral();
  pensize( 5, 5, 5, 50.1); 
  myArray = ["sky", "clounds", "snail", "grass", ];
  print(myArray.length);
  for (let i=0; i<myArray.length; i++) {
        console.log(myArray[i]);
 a = color(255, 0, 0);
 b = color(0, 255, 0);
 c = color(0, 0, 255);
 d = color(150, 75, 0);
 w = color(255,255,255);
 clouds = color(17,13,50)
    squareX = 100;
  squareY = 100;
  changeX = 1;
  changeY = 2;
  angleMode(DEGREES);
      noStroke()

  }
}
function draw() {
  background(223,103,0)
  noStroke()
  spiral();
  rect(squareX,squareY,50,50);
  checkEnd(squareX,squareY,50,50);
  moveSquare();
let mx = mouseX ;
let my = mouseY ; 
  position[0] = mouseX;
  pos[1] = mouseY;
  image(img2,mouseX - 20,220,100,100)
  noStroke()
  ellipse(100, 100, 70, 50);
  ellipse(110 , 110 , 70, 50);
  ellipse(80 , 110 , 70, 50);
  ellipse(400, 100, 70, 50);
  ellipse(410 , 110 , 70, 50);
  ellipse(380 , 110 , 70, 50);  
    noStroke()

    if (where2 >= 575) {
    where2 = 0;
  } else {
    where2 += 1;
  }
  for (let i = 0; i < 5; i++) {
   strokeWeight(0);
  stroke(51);
  rect(where2 + i * 25, where1, 25); 
  }   
  }
function mousePressed() {
print("baa");
  if ((mouseX > 0) && (mouseX < 600) && (mouseY < 600) && (mouseY > 300)){
   fill(d);
  }
  else {
    fill(a);
  }
}
function moveSquare(){
  squareX = squareX+changeX ;
  squareY = squareY+changeY ;
}
function checkEnd(x, y,thisWidth,thisHeight){
  if (x >= width-thisWidth || x <= 0){
    changeX = -changeX;
  }
  if (y >= height-thisHeight || y <= 0){
    changeY = -changeY;
    
  return 0;
  }
}
function keyPressed() {
  if ((mouseX > 100) && (mouseX < 300) && (mouseY < 100) && (mouseY > 300)){
     fill(c);
    }
    else {
    fill(w);
  }
}

//https://editor.p5js.org/frazieraj24/sketches/BO5VNzynF 
function spiral()
{
    pencolor("red");
    for(let i = 0; i < 100; i++)
    {
        forward(i * 1);
        right(100);
    }
}