const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


function preload(){
// playerImg = loadImage("images/hero1-removebg-preview.png");
groundImg = loadImage("images/platform.jpg");
enemyImg = loadImage("images/ghost.png");
backgroundImg = loadImage("images/night sky.jpg");
startImg = loadImage("images/start.png");

}

function setup(){
  createCanvas(windowWidth,windowHeight);

engine = Engine.create();
world = engine.world;

 base = new Ground(windowWidth/2,windowHeight-50,windowWidth,100);
//  base.addImage(groundImg);
 player = new Player(50,windowHeight-117,50,50);
//  player.addImage(playerImg);
// player.scale = 1.2

enemy = createSprite(windowWidth-100,windowHeight-125)
enemy.addImage(enemyImg)
enemy.scale = 0.6
}

function draw(){
  background(backgroundImg);
  player.display();
  base.display();
  drawSprites()
}

// function keyPressed(){
//   if(keyCode == RIGHT_ARROW){
//     player.x = player.x+10
//   }
//   if(keyCode == LEFT_ARROW){
//     player.x = player.x-5;
//   }
//   if(keyCode == 32){
//     player.y = player.y - 50
//   }
// }