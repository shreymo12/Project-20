var car, wall;

var speed,weight;

function setup() {
  createCanvas(1600,400);
  car=createSprite(50,200,50,50);
  car.velocityX=speed;
  car.shapeColor=(255);
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor=(80,80,80);


  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background(0); 
  if(wall.x-car.x<(car.width/2+wall.width/2)){
       
       var deformtion = 0.5*weight*speed*speed/22509;
       if(deforamtion<100){
         car.shapeColor=color(0,255,0);
       }
       else if(deformation>100&&deformation<180){
         car.shapeColor=color(230,230,0);
       }
       else if(deformtion>180){
         car.shapeColor=color(255,0,0);
       }

  }
  
  drawSprites();
}