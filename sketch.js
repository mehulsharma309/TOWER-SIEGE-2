const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;


var engine, world, holder, ball, ground1, stand1, stand2, slingshot1, polyImg;

function preload(){
polyImg= loadImage("polygon.png")
}

function setup() {
	createCanvas(900, 400);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	ground1= new Ground()

	stand1= new Stand(390,300,250,10);
	stand2= new Stand(700,200,200,10);

	block1= new Block(300,275,30,40);
	block2= new Block(330,275,30,40);
	block3= new Block(360,275,30,40);
	block4= new Block(390,275,30,40);
	block5= new Block(420,275,30,40);
	block6= new Block(450,275,30,40);
	block7= new Block(480,275,30,40);
	block8= new Block(330,235,30,40);
	block9= new Block(360,235,30,40);
	block10= new Block(390,235,30,40);
	block11= new Block(420,235,30,40);
	block12= new Block(450,235,30,40);
	block13= new Block(360,195,30,40);
	block14= new Block(390,195,30,40);
	block15= new Block(420,195,30,40);
	block16= new Block(390,155,30,40);
	B1 = new Block(640,175,30,40);
	B2 = new Block(670,175,30,40);
	B3 = new Block(700,175,30,40);
	B4 = new Block(730,175,30,40);
	B5 = new Block(760,175,30,40);
	B6 = new Block(670,135,30,40);
	B7 = new Block(700,135,30,40);
	B8 = new Block(730,135,30,40);
	B9 = new Block(700,95,30,40);

	polygon= Bodies.circle(50,200,50);
	World.add(world,polygon);
	slingshot1= new slingshot(this.polygon,{x:100,y:200});

}


function draw() {
  rectMode(CENTER);
  background(230);

text(mouseX+','+mouseY,10,15);
textSize(20);
fill("yellow");
text("drag polygon to destory the blocks",300,30)
textSize(10);
text("press space to get a chance to play",65,35)


	ground1.display();

	stand1.display();
	stand2.display();

	strokeWeight(2);

	stroke(15);

	fill("skyBlue");

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("skyBlue");
  B1.display();
  B2.display();
  B3.display();
  B4.display();
  B5.display();
  fill("turquoise");
  B6.display();
  B7.display();
  B8.display();
  fill("pink");
  B9.display();
	fill("gold");

	imageMode(CENTER);
	image(polyImg,polygon.position.x,polygon.position.y,40,40);

  slingshot1.display();

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	slingshot1.fly();
}

function keyPressed(){
	if(keyCode===32){
		slingshot1.attach(this.polygon);
	}
}