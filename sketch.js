var mazeImage;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9,
wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall9,
wall20, wall21, wall22, wall23, wall24, wall25, wall26, wall27, wall28, wall29,
wall30, wall31, wall32, wall33, wall34, wall35, wall36, wall37, wall38, wall39,
wall40, wall41, wall42, wall43, wall44, wall45, wall46, wall47, wall48, wall49;
var walls = []
function preload(){

}

function setup() {
  createCanvas(400,400);


   wall1 = createSprite(50, 50, 20, 100);

   wall2 = createSprite(10, 90, 20, 100);
  
   wall3 = createSprite(60, 130, 80, 20);
  
   wall4 = createSprite(90, 70, 20, 100);
  
   wall5 = createSprite(125, 73, 20, 100);
  
   wall6 = createSprite(180, 33, 100, 20);
  
   wall7 = createSprite(200, 70, 100, 20);
  
   wall8 = createSprite(160, 120, 20, 100);
  
   wall9 = createSprite(305, 33, 150, 20);
  
   wall10 = createSprite(324, 70, 150,20);
  
   wall11 = createSprite(125, 200, 20, 230);
  
   wall12 = createSprite(70, 165, 110, 20);
  
   wall13 = createSprite(50, 198, 100, 20);
  
   wall14 = createSprite(90, 240, 20, 80);
  
   wall15 = createSprite(90, 305, 90, 20);
  
   wall16 = createSprite(55, 270, 20, 90);
  
   wall17 = createSprite(35, 270, 30, 90);
  
   wall18 = createSprite(30, 340, 20, 80);
  
   wall19 = createSprite(70, 370, 20, 70);
  
   wall20 = createSprite(105, 340, 20, 80);
  
   wall21 = createSprite(155, 370, 90, 20);
  
   wall22 = createSprite(280, 160, 250, 20);
  
   wall23 = createSprite(250, 200, 250, 20);
  
   wall24 = createSprite(190, 336, 20, 50);

   wall25 = createSprite(220, 303, 80, 20);

   wall26 = createSprite(250, 336, 20, 70);

   wall27 = createSprite(220, 380, 5, 90);

   wall28 = createSprite(315, 361, 110, 20);

   wall29 = createSprite(370, 210, 20, 40);

   wall30 = createSprite(250, 220, 220, 20);

   wall31 = createSprite(150, 250, 20, 50);

   wall32 = createSprite(260, 275, 220, 2);

   wall33 = createSprite(320, 250, 220, 2);

   wall34 = createSprite(360, 320, 20, 90);
  
  // walls = [wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9,
  //    wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall9,
  //    wall20, wall21, wall22, wall23, wall24, wall25, wall26, wall27, wall28, wall29,
  //    wall30, wall31, wall32, wall33, wall34, wall35, wall36, wall37, wall38, wall39,
  //    wall40, wall41, wall42, wall43, wall44, wall45, wall46, wall47, wall48, wall49
  //   ]
  ball = createSprite(10, 10, 10, 10)


  

  





}

function draw() {
  background(0);
  drawSprites()
  fill("red")
  text(mouseX +"," + mouseY, mouseX, mouseY)
  
  if(keyDown(UP_ARROW)){
    ball.velocityY = -4
    ball.velocityX= 0
  }    
  if(keyDown(DOWN_ARROW)){
    ball.velocityY = +4
    ball.velocityX= 0
  }    
  if(keyDown(RIGHT_ARROW)){
    ball.velocityX = +4
    ball.velocityY = 0
  }    
  if(keyDown(LEFT_ARROW)){
    ball.velocityX= -4
    ball.velocityY = 0
  }    

  for(var i = 0; i<49; i++){
    ball.collide(walls[i])
  }

  if (ball.isTouching(cup)) {
    textSize(10);
    text("You Win !!!", 152, 235);
    text("Press R to restart", 152, 270);
    }
    spawnObstacles();
    if (keyDown("R")) {
      gameState = "start";
      ball.x = 10;   
      ball.y = 10;
    } 
}

function spawnObstacles() {
  //write code here to spawn the clouds
  if (World.frameCount % 60 === 0) {
    obstacle = createSprite(360,320,40,10);
    obstacle.lifetime = 134;
  }
  
}
  
