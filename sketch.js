
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800,700)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper=new Paper()
ground=new Ground()
//console.log(paper.body.position);
var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });
	Engine.run(engine);
  leftSide = new Dustbin(550, 620, 20, 100); 
  bottom = new Dustbin(610, 660, 100, 20); 
  rightSide = new Dustbin(670, 620, 20, 100);
}


function draw() {
  rectMode(CENTER);
  background("blue");
  paper.display()
  ground.display()
 drawSprites();
 leftSide.display()
 rightSide.display()
 bottom.display()
}
function keyPressed() { 
  if (keyCode === UP_ARROW) 
 { Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15}); 
} }


