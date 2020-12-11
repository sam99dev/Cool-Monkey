
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground;
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas (600,400);
  
  ground = createSprite(300,350,650,10);
  
   monkey = createSprite (100,300);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.18
  
  

}


function draw() {
background ("white");
  
monkey.collide (ground);
  
if (keyWentDown("space") && monkey.y >=280){
    monkey.velocityY = -20
  }
monkey.velocityY =   monkey.velocityY +1
  
  stroke ("black")
  textSize (20)
  fill ("black")
  text ("Score : "+ score,300,50);
  
 if (frameCount % 10 === 0){
   score = score +1
 }
  
  
  bananas();
  obstacles();
  drawSprites();
}
function obstacles(){
    if (frameCount % 200 === 0){
    obstacle = createSprite (700,310);
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.2
    obstacle.velocity.x = -4
    obstacle.lifetime = 600
  }
  
}
function bananas(){
   if (frameCount % 100 === 0){
    banana = createSprite (600,100);
  banana.addImage(bananaImage);
  banana.scale = 0.1
  banana.velocity.x = -4
  banana.lifetime = 600
}
}





