/*
Matter {
  Engine {
    create()
    run()
    update()
  }
  World {
    add()
    remove()
  }
  Bodies {
    circle();
    rectangle()
    polygon()
  }
}

Matter.Engine.create()
Matter.World.add()              

Namespacing: giving nicknames or shorter names for ease of use.
*/
/*used constant instead of variable because so that if engine is declared again in the code there will be an 
error detected otherwise if we declare variable if the engine is for eg declred again as a sprite it will 
show sprite and the engine will top working*/
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint ;

//variable is used for storage for the particular name declared
var myEngine, myWorld;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var logC, sling;
var platForm;
var backgroundImg;
var mainBg;

var score = 0;

//gameState 
var gameState = onsling;

//preloads images
function preload() {
  time();
}

function setup() {
  //creates canvas
  createCanvas(1200,400);

  //our physics engine
  myEngine = Engine.create();
  // myEngine.world
  myWorld = myEngine.world;

  //1st compartment
  box1 = new Box(800,360,50,50);
  box2 = new Box(950,360,50,50);
  pig1 = new Pig(875 ,370);
  log1 = new Log(875,335,250,PI/2);

  //2nd compartment
  box3 = new Box(800,300,50,50);
  box4 = new Box(950,300,50,50);
  pig2 = new Pig(875,315);
  log2 = new Log(875,270 ,250,PI/2);

  //middle box on above
  box5 = new Box(875,240,50,50);

  //2 logs placed on box
  log3 = new Log(825,230,120,PI/4);
  log4 = new Log(925,230,120,-PI/4);

  //logC = new Log(150,150, 25, PI);
  //angry bird
  bird = new Bird(100,10);
  bird2 = new Bird(80,220);
  bird3 = new Bird(50,220)

  //SlingShot1 = new SlingShot(bird.body,logC.body);

  //sling  
  sling = new SlingShot (bird.body,{x:125,y:90});

  //sling = new Chain (bird.body,logC.body)
  // box1 = new box();
  // box2 = new box();
 
  //created a ground rectangular body using physics engine
  ground = new Ground(600,390,1200,10 );
  //platform
  platForm = new Ground(150,320,300,150);
}

function draw() {
  if(mainBg)
  background(mainBg);  
  textSize(55)
  fill ("yellow")
  text ("Score:" + score ,900,50 )
  //updates images
  Engine.update(myEngine); 
      
  //1st compartment display
  box1.display();
  box2.display();
  ground.display();
  pig1.display();
  pig1.score();
  log1.display();

  //2nd compartment display
  box3.display();
  box4.display();
  pig2.display();
  pig2.score()
  log2.display();

  //middle box on above displays
  box5.display();

  //two logs on middle box
  log3.display();
  log4.display();

  //logC.display();

  //display
  bird.display();

  sling.display();
  platForm.display();
  
} 
//if mouse is dragged
function mouseDragged(){
  //gamestate shouldnt be launched("!" stands for not)
  if(gameState!== "launched"){
    //sets position of body of bird to mouse's position
   Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})  

  }
}

//if mouse is released
function mouseReleased(){
  //sling fly function executes
  sling.fly();
  gameState = "launched";

}

function keyPressed(){
  if (keyCode === 32){  
    sling.attach(bird.body) ;
    gameState = "onsling";
    bird.trajectory = []
    Matter.Body.setPosition(bird.body,{x:100,y:10})  

  }

}

async function time(){
  var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/kolkata");
  console.log(response);
  var responseJSON =   await response.json();
  console.log(responseJSON);
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>= 06 &&  hour <=18){
    bg = "sprites/bg.png";
  } else{
    bg = "sprites/bg2.jpg";
  }
  mainBg = loadImage(bg);
}