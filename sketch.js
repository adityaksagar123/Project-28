
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var ground;
function preload()
{
	treeImage = loadImage("tree.png");
	boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);

	tree = createSprite(600,480);
	tree.addImage(treeImage);
	tree.depth = -1; 
	tree.scale = 0.3;
	boy = createSprite(200,600);
	boy.addImage(boyImage); 
	boy.scale = 0.1;
	engine = Engine.create();
	world = engine.world;
	ground = new Ground(400,680,800,40);
	stone = new Stone(400,400);
	rope = new Rope(stone.body, {x: 150  ,y: 550 })
	mango1 = new Mango(500,500);
	mango2 = new Mango(540,500);
	mango3 = new Mango(540,540);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(120);
  ground.display();
  stone.display();
  rope.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango1.detectCollision(stone, mango1);
  mango2.detectCollision(stone, mango2);
  mango3.detectCollision(stone, mango3);
  drawSprites();
 
}

function mouseDragged()
{
    Matter.Body.setPosition(stone.body, {x : mouseX , y : mouseY })
}


function mouseReleased()
{
    rope.fly();
}


