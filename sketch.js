
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var h1,g1
function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
h1=new hammer(50,50)
g1=new ground(600,550,1200,20)

	
  
}


function draw() {
 
  background("lightblue");
  Engine.update(engine)
  h1.display()
  g1.display()
  drawSprites();
 
}



