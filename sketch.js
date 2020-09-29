var background1,moveingGround;
var bow,bow1;
var pinkb,pinkb1,pinkg;
var redb,redb1,redg;
var blueb,blueb1,blueg;
var green,greenb1,greeng;
var arrow,arrow1,arrowg;
var score = 0;



function preload(){
 //load your images here 
 moveingGround = loadImage("background0.png");
  bow1 = loadImage ("bow0.png")
  pinkb1 = loadImage ("pink_balloon0.png")
  redb1 = loadImage ("red_balloon0.png")
  blueb1 = loadImage ("blue_balloon0.png")
  greenb1 = loadImage ("green_balloon0.png")
  arrow1 = loadImage ("arrow0.png")
  
  
  
  
}



function setup() {
  createCanvas(600, 600);
  
     text("Score:"+ score, 500,50);

  
  background1 = createSprite (0,0,600,600);
  background1.velocityX=-5;
  background1.addImage("background0.png", moveingGround);
  background1.x= background1.width/2;
  background1.scale = 3;
  
  bow = createSprite(550,300,20,55);
  bow.addImage("bow0.png",bow1);
  
  arrowg = new Group();
  pinkg = new Group();
  redg = new Group();
  blueg = new Group();
  greeng = new Group();
  
  score = 0;
}
function draw() {
  
  
  
  //add code here
  background("white");
  
  
  if (background1.x<0)
  {
  background1.x=background1.width/2;
  }
  
 
  
  if(arrowg.isTouching(redg)){
    redg.destroyEach();
    arrowg.destroyEach();
    score = score +1;
     }
  
  if(arrowg.isTouching(blueg)){
    blueg.destroyEach();
    arrowg.destroyEach();
    score = score +3;
     }
  
  if(arrowg.isTouching(greeng)){
    greeng.destroyEach();
    arrowg.destroyEach();
    score = score +2;
     }
  
  if(arrowg.isTouching(pinkg)){
    pinkg.destroyEach();
    arrowg.destroyEach();
    score = score +2;
     }
  
  
  
  
  
  
  
  
  
  
  
  
  
  bow.y = mouseY
  launchArrow();
  drawSprites();
  spawnBalloon();
  spawnBalloon1();
  spawnBalloon2()
  spawnBalloon3()
  
}

function launchArrow(){

  if(keyDown("enter")){
   var arrow = createSprite(550,300,20,20)
   arrow.addImage("arrow",arrow1)
   arrow.y = bow.y;
   arrow.velocityX = -10;
   arrow.scale = 0.3;
   arrowg.add(arrow);

}
  
}

function spawnBalloon(){
  
  if(frameCount%120 === 0){
    greenb = createSprite(150,400, 20, 20);
    greenb.addImage("gre",greenb1);
    greenb.scale = 0.07;
  
    greenb.velocityX=5;
    greenb.y = Math.round(random(30,500));
    greenb.lifetime = 75;
    greeng.add(greenb);

  }
  }

function spawnBalloon1(){
  
  if(frameCount%135 === 0){
    blueb = createSprite(100, 300, 20, 20);
    blueb.addImage("blueb",blueb1);
    blueb.scale = 0.08
  
    blueb.velocityX=5;
    blueb.y = Math.round(random(30,500));
    blueb.lifetime = 75;
    blueg.add(blueb);

  }
  }

function spawnBalloon2(){
  
  if(frameCount%93 === 0){
    redb = createSprite(50, 300, 20, 20);
    redb.addImage("red_balloon0.png", redb1);
    redb.scale = 0.07
  
    redb.velocityX=5;
    redb.y = Math.round(random(30,500));
    redb.lifetime = 75;
    redg.add(redb);

  }
  }


function spawnBalloon3(){

 if(frameCount%93 === 0){
    pinkb = createSprite(200,300)
    pinkb.addImage("pink_balloon0.png",pinkb1)
  
    pinkb.velocityX=5;
    pinkb.y = Math.round(random(30,500));
    pinkb.lifetime = 75;
    
   pinkg.add(pinkb);
  }  
  }











