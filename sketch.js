var fixedRect, movingRect;
var movingRect1, fixedRect1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  fixedRect1 = createSprite(400, 200, 50, 80);
  fixedRect1.shapeColor = "green";
  fixedRect1.debug = true;
  movingRect1 = createSprite(400, 600,80,30);
  movingRect1.shapeColor = "green";
  movingRect1.debug = true;
  gameObject1 = createSprite(100,100,50,50); 
  gameObject1.shapeColor = "green"; 
  gameObject2 = createSprite(200,100,50,50); 
  gameObject2.shapeColor = "green"; 
  gameObject3 = createSprite(300,100,50,50); 
  gameObject3.shapeColor = "green"; 
  gameObject4 = createSprite(400,100,50,50); 
  gameObject4.shapeColor = "green";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);
  
  movingRect1.x = World.mouseX; 
  movingRect1.y = World.mouseY;

  if(isTouching(movingRect1,gameObject4)) 
  { 
    movingRect1.shapeColor = "red"; 
    gameObject4.shapeColor = "red"; 
  } 
  else 
  { 
    movingRect1.shapeColor = "green"; 
    gameObject4.shapeColor = "green"; 
  }

  bounceOff(fixedRect, movingRect);
  drawSprites();
}

