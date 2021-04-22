var movingRec,fixRec;

function setup() {
   createCanvas(800,400);
  movingRec=createSprite(400, 200, 50, 50);
  fixRec=createSprite(600, 200, 100, 50);

  movingRec.shapeColor="green";
  fixRec.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  movingRec.x=mouseX;
  movingRec.y=mouseY;
  if(movingRec.x-fixRec.x<fixRec.width/2+movingRec.width/2 && fixRec.x-movingRec.x<fixRec.width/2+movingRec.width/2 && movingRec.y-fixRec.y<fixRec.width/2+movingRec.width/2 && fixRec.y-movingRec.y<fixRec.width/2+movingRec.width/2){
    movingRec.shapeColor="red";
    fixRec.shapeColor="red";

  }
  else{

    movingRec.shapeColor="green";
  fixRec.shapeColor="green";
  }
 
  drawSprites();
}
