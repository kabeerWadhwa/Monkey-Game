//Global Variables
var monkey,monkey_running,ground,Background,bananaGroup,obstacleGroup,bananaImage,obstacle_Img;
var score = 0;


function preload(){
monkey_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")

BackgroundImage = loadImage("jungle.jpg");

bananaImage = loadImage("Banana.png");

obstacle_Img = loadImage("stone.png");

ground = loadImage("ground.jpg");
}


function setup() {
  createCanvas(600,300);
  
  Background = createSprite(300,150,20,20);
  Background.addImage(BackgroundImage);
  
  monkey = createSprite(20,280,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(300,300,600,10);
  ground.velocityX = -4;
  ground.visibility = false;
  
  bananaGroup = new Group();
  
  obstacleGroup = new Group();
  
}


function draw(){
 background(255);
  
if(Background.x <0) {
  Background.x = Background.width/2;
}
  
 if(ground.x <0) {
  ground.x = ground.width/2; 
 }
  
 if(bananaGroup.isTouching(monkey)) {
   score = score + 2
   bananaGroup.destroyEach();
 }
  
  switch(score){
      case 10: monkey.scale = 0.12
        break; 
      case 20: monkey.scale = 0.14
        break;
      case 30: monkey.scale = 0.16
        break;
      case 40: monkey.scale = 0.18
        break;
      default:break;
}
  
if (keyDown("space")) {
    monkey.velocityY = -5;
}

monkey.velocityY = monkey.velocityY + 0.8;
  
monkey.collide(ground);
if (obstacleGroup.isTouching(monkey)){
  monkey.scale = 0.1;
}

  banana();
  
  obstacles();
  
  drawSprites();
  
  stroke("White");
  textSize(20);
  fill("White");
  text("score" + score, 500,50)
}

function banana() {
  if(World.frameCount%80 === 0) {
    var bananas = createSprite(300,150,20,20);
    bananas.addImage(bananaImage)
    bananas.velocityX = -4;
    bananas.scale = 0.1;
    bananas.lifetime = 100;
    bananaGroup.add(bananas);
  }
}

function obstacles() {
  if(World.frameCount%300 === 0) {
    var rocks = createSprite(300,280,20,20);
    rocks.addImage(obstacle_Img);
    rocks.velocityX = -4;
    rocks.scale = 0.1
    rocks.lifetime = 100;
    
  obstacleGroup.add(rocks);
  }
}