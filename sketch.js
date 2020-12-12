const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine
var ground1, division
var div1,div2,div3
var particles = [];
var plinkos = [];

var divisionHeight = 300

function setup() {
  engine = Engine.create();
	world = engine.world;
  createCanvas(800,400);
  ground1 = new Ground(600,height,1200,20); 
div1 = new Division(540,320,20,220);
div2 = new Division(450,320,20,220);
div3 = new Division(350,320,20,220);
}

function draw() {
  Engine.run(engine);
  background('black');
  for(var k = 0;k < width; k = k + 80){
     division.push(new Division(k,height,divisionHeight/2,10,divisionHeight))
  }  
for (var j = 40;j<width;j=j+50){
  plinkos.push(new Plinko(j,70));
}
for(var j = 15;j<width-10;j = j+50){
  plinkos.push(new Plinko(j,175));
}
if(frameCount% 60===0){
particles.push(new particles(random(width/2-10,width/2+10),10,10))
}
for(var j = 0;j< particles.length;j++){
  particles[j].display();
}
for(var k = 0 ; k < division.lenght;k++){

}

  drawSprites();
  ground1.display();
  div1.display();
  div2.display();
  div3.display();
}