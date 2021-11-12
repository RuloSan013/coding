var pelota ;
var edges;
function setup() {
  createCanvas(400,400);
  pelota=createSprite(200,200.10,10);
 edges=createEdgeSprites();
 pelota.shapeColor="red"
}

function draw() 
{
  background(30);
drawSprites();
pelota.bounceOff(edges);
if (keyDown("a")){
pelota.velocityX=-1
pelota.velocityY=0
}
if (keyDown("d")){
pelota.velocityX=1
pelota.velocityY=0
}
if (keyDown("w")){
pelota.velocityY=-1
pelota.velocityX=0
}
if (keyDown("s")){
  pelota.velocityY=1
  pelota.velocityX=0
  }
}




