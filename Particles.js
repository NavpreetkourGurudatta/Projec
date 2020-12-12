class Particles{
    constructor(x,y){
        var options = {
        restitutions:0.4,
        }
        this.body = Bodies.circle(x,y,10,options);
        this.r = 10;
 this.color = color(random(0,255),random(0,255),random(0,255))
World.add(this.body,world);
    }
}