const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4, box5, box6, box7, box6, box7;
var hero,monster,rope,ground;
var caja=[];

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(1500, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  

  for(var k=100; k<=900; k=k+80){
    caja.push(new Box(800, k, 70, 70))
  }

  for(var k=200; k<=900; k=k+80){
    caja.push(new Box(700, k, 70, 70))
  }


  
  for(var k=150; k<=900; k=k+80){
    caja.push(new Box(900, k, 70, 70))
  }


  


  


}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
 
  hero.display();
  rope.display();
  monster.display();

  for (var i = 0; i < caja.length; i++) {
    caja[i].display();   
  }




}


function mouseDragged(){
Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY})
}