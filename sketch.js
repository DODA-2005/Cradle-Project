var slingshot

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	bg=loadImage("green.jpg")
}

function setup() {
	//canvas should be 841, 580
	createCanvas(841, 580);
	engine = Engine.create();
	world = engine.world;

	//rod is created
	l1 = new Rod(420,60);
		
	
	//balls are created
	b1 = new Ball(280.5,380);
	b2 = new Ball(350.5,380);
	b3 = new Ball(420.5,380);
	b4 = new Ball(490.5,380);
	b5 = new Ball(560.5,380);

	//creating ropes
	s1 = new Rope(b1.body,{x:280,y:70});
	s2 = new Rope(b2.body,{x:350,y:70});
	s3 = new Rope(b3.body,{x:420,y:70});
	s4 = new Rope(b4.body,{x:490,y:70});
	s5 = new Rope(b5.body,{x:560,y:70});

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(bg);
  stroke("black");
  fill("yellow");
  textSize(25);
  text("Press ⬆ to Play!!",630 ,280);
 

  l1.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  s1.display();
  s2.display();
  s3.display();
  s4.display();
  s5.display();

  drawSprites();
}

function keyPressed(){
if(keyCode===38){
	Matter.Body.applyForce(b1.body,b1.body.position,{x:-30,y:-30})
}}