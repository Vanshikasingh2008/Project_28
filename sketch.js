var ground;
var crumbledPaper,dustbinPart1,dustbinPart2,dustbinPart3,paperObjectImg,dustbinImg,sling;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function preload(){
	dustbinImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create a Ground
	push();
	ground = Bodies.rectangle(width/2, 488, width, 10 , {isStatic:true} );
	fill("yellow");
	pop();
 	World.add(world, ground);

	push();
	ground1 = createSprite(400,488,800,27);
	ground1.shapeColor = rgb(127,127,127);
	pop();

	crumbledPaper = new Paper(100,470,30);
	dustbinPart1 = new Dustbin(605,465,15,150);
	dustbinPart2 = new Dustbin(530,385,150,20);
	dustbinPart3 = new Dustbin(680,385,150,20);

	sling = new Launcher(crumbledPaper.body,{x:200,y:100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230,230,230);
  strokeWeight(4);

  crumbledPaper.display();
  dustbinPart1.display();
  dustbinPart2.display();
  dustbinPart3.display();
  sling.display();

  imageMode(CENTER);
  image(dustbinImg,605,385,185,180);
  
  drawSprites();
 
}

/*function keyPressed(){
	if(keyCode === UP_ARROW){

	Matter.Body.applyForce(crumbledPaper.body,crumbledPaper.body.position,{x:120,y:-175});

	}
}*/

function mouseDragged(){
	Matter.Body.setPosition(crumbledPaper.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
	sling.fly();
}



