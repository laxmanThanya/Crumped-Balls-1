
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground=new Ground(100,680,1500,20);
	World.add(world,ground);

	ball=new Paper(50,630,60);
	World.add(world,ball);

	d1=new Dustbin(550,620,20,100);
	World.add(world,d1);

	d2=new Dustbin(750,620,20,100);
	World.add(world,d2);

	d3=new Dustbin(650,660,200,20);
	World.add(world,d3);

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  ground.display();

  ball.display();

  d1.display();
  d2.display();
  d3.display();

  
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.position,{x:600,y:2000});
        
	}
}


