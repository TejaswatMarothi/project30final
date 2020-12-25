const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var ground,player,slingshot,ground2,ground3;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25;

var gameState = "ONSLING"

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(1000,height/2-10,200,20);
    ground2 = new Ground(650,height/2+80,250,20);
    ground3 = new Ground(width/2,380,width,20)
    player = new Player(150,100,20)
    box1 = new Box(560,245);
    box2 = new Box(590,245);
    box3 = new Box(620,245);
    box4 = new Box(650,245);
    box5 = new Box(680,245);
    box6 = new Box(710,245);
    box7 = new Box(740,245);
    box8 = new Box(590,205);
    box9 = new Box(620,205);
    box10 = new Box(650,205);
    box11 = new Box(680,205);
    box12 = new Box(710,205);
    box13 = new Box(620,165);
    box14 = new Box(650,165);
    box15 = new Box(680,165);
    box16 = new Box(650,125);
    box17 = new Box(940,160);
    box18 = new Box(970,160);
    box19 = new Box(1000,160);
    box20 = new Box(1030,160);
    box21 = new Box(1060,160);
    box22 = new Box(970,120);
    box23 = new Box(1000,120);
    box24 = new Box(1030,120);
    box25 = new Box(1000,80);
    slingshot = new SlingShot(player.body,{x:150,y:100})

}

function draw(){
   background("brown")
    Engine.update(engine);
    
    fill("yellow")
    ground.display();
    ground2.display();
    player.display();
    ground3.display();
    slingshot.display();
    fill("blue");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    fill("red");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    fill("pink");
    box13.display();
    box14.display();
    box15.display();
    fill("yellow");
    box16.display();
    fill("blue");
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display()
    fill("red");
    box22.display();
    box23.display();
    box24.display();
    fill("pink");
    box25.display();
   
}

function mouseDragged(){
  Body.setPosition(player.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fire();
}

function keyPressed(){
  if (keyCode === 32){
    slingshot.attach(player.body);
  }
}