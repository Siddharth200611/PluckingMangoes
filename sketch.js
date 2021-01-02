const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var stone;
var Ground;
var Tree,treeImg;
var mango1, mango2, mango5, mango4,mango5;
var slingshot;
function preload()
{
	treeImg=loadImage("tree.png")
	boy=loadImage("boy.png");
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
stone=new Stone (500,600,40)
Ground=new ground (500,650,1000,30)
Tree=new tree(640,540,40,200)
mango1=new Mango(550,400,41)
mango2=new Mango(770,350,42)
mango3=new Mango(700,300,38)
mango4=new Mango(660,370,50)
mango5=new Mango(600,390,45)
slingshot=new Sling(stone.body,{x:180,y:500})

	Engine.run(engine);
	
	
}


function draw() {
  rectMode(CENTER);

  background("lightblue");
  textSize(30);
  fill('purple');
  text("Press the space bar to get another try.",50 ,50);
 // background("grey");
  Engine.update(engine);
  //image(treeImg,480,410,100,300)
  image(boy ,140,420,200,300);
 stone.display();
 Ground.display();
 Tree.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 slingshot.display();

 detectollision(stone,mango1);
 detectollision(stone,mango2);
 detectollision(stone,mango3);
 detectollision(stone,mango4);
 detectollision(stone,mango5);	
 drawSprites();
}


function mouseDragged(){

	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
	
	}
	
	function mouseReleased(){
	
		slingshot.fly();
	
	}
	
	function detectollision(lstone,lmango){
		mangoBodyPosition=lmango.body.position
		stoneBodyPosition=lstone.body.position
	  
		var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
		if (distance<=lmango.r+lstone.r)
	   {
		 Matter.Body.setStatic(lmango.body , false);
	   } 
	  }

	  function keyPressed() {
		if (keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x:180, y:500}) 
		  slingshot.attach(stone.body);
		}
	  }























