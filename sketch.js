var player, background;
var backgroundIMG;
var enemy, enemy2, enemy3, enemy4, enemy5;
var eI, eI2, eI3, eI4, eI5;
var meteor, meteor2;

function preload(){
backgroundIMG = loadImage("Images/background.jpg");
eI = loadImage("Images/e1.png");
eI2 = loadImage("Images/e2.png");
eI3 = loadImage("Images/e3.png");
eI4 = loadImage("Images/e4.png");
eI5 = loadImage("Images/e5.png"); 
meteor = loadImage("Images/asteroid3.png");
meteor2 = loadImage("Images/asteroid4.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  display = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight*20);
  display.addImage(backgroundIMG);
  display.scale=2;
 // display.y = displayHeight/2-100;
  
}

function draw() {
  /*display.velocityY = 5;
 if(display.y>displayHeight){
 display.y = displayHeight/2-100;
 }*/
 spawnEnemy();
 spawnEnemy2();
  drawSprites();
}
function spawnEnemy(){
  if(World.frameCount%10 == 0){
  enemy = createSprite(random(displayWidth/2-500,displayWidth/2+500), 0);
  enemy.velocityY = 3;
  enemy.addImage(meteor);
  enemy.scale = 0.5;
 
  }
}
function spawnEnemy2(){
  if(World.frameCount%10 == 0){
    enemy = createSprite(random(displayWidth/2-500,displayWidth/2+500), 0);
    enemy.velocityY = 3;
    enemy.addImage(meteor2);
    enemy.scale = 0.5;
  }
    
}