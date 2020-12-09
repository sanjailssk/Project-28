
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1,boyIMG,treeIMG,gardenIMG;
var boy,tree;
var mango1,mango2,mango3,mango4,mango5;
var stone,constrains;

function preload(){
   boyIMG = loadImage("boy.png");
   treeIMG = loadImage("tree.png");
   gardenIMG = loadImage("lawn.jpg");
}

function setup() {
	createCanvas(1400, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = createSprite(300,500);
	boy.scale = 0.125;
	boy.addImage(boyIMG);

	tree = createSprite(1100,320);
	tree.scale = 0.45;
	tree.addImage(treeIMG);

	ground1 = new Ground(650,593,1500,18);
	mango1 = new Mango(1050,200,40);
	mango2 = new Mango(1200,210,40);
	mango3 = new Mango(1130,130,40);
	mango4 = new Mango(920,210,40);
	mango5 = new Mango(1000,300,40);
	mango6 = new Mango(1300,300,40);
	mango7 = new Mango(1300,200,40);
	mango8 = new Mango(1010,120,40);
	mango9 = new Mango(1230,130,40);
	stone = new Stone(235,440,20);
	constrains = new Constrains(stone.body,{x:235,y:430});

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(220);
  background(gardenIMG);
 
  fill("black");
  textSize(30);
  text("*PRESS SPACE TO PICK UP THE STONE*",60,150);
  
  drawSprites();

  ground1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  stone.display();
  constrains.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
	
function mouseReleased(){
	constrains.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body, {x:235,y:440})
    constrains.attach(stone.body);
  }
}

function detectCollision(lstone,lmango){
	stoneBodyPosition = lstone.body.position;
	mangoBodyPosition = lmango.body.position;
  
	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance <= lmango.r + lstone.r){
	  Matter.Body.setStatic(lmango.body, false);
	}
}
  
	



