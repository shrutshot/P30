const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var r, strin;
var stand;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  stand=new Ground(400,400,800,10);


  b1= new Box(780,375,30,40);
  b2= new Box(750,375,30,40);
  b3= new Box(720,375,30,40);
  b4= new Box(690,375,30,40);
  b5= new Box(660,375,30,40);
  b6= new Box(600,375,30,40);
  b7= new Box(630,375,30,40);

  b8= new Box(630,335,30,40);
  b9= new Box(660,335,30,40);
  b10= new Box(690,335,30,40);
  b11= new Box(720,335,30,40);
  b12= new Box(750,335,30,40);
  b13= new Box(660,295,30,40);
  b14= new Box(690,295,30,40);
  b15= new Box(720,295,30,40);
  b16= new Box(690,255,30,40);

  r= new Ball(200,200,40);

  strin= new SlingShot(r.body,{x:250,y:200});
  
  
}

function draw() {
  background("lavender");  
 // drawSprites();
 Engine.update(engine);
  stand.display();

  b16.display();
  b15.display();
  b14.display();
  b13.display();
  b12.display();
  b11.display();
  b10.display();
  b9.display();
 // console.log("before display")
  b8.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  r.display();
  strin.display();
  
  
  
}

function keyPressed(){
  if(keyCode === 32){
     strin.attach(r.body);
  }
}

function mouseDragged(){
  Matter.Body.setPosition(r.body, {x: mouseX , y: mouseY});
}




function mouseReleased(){
  strin.fly();
}