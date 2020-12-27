class Umbrella{
    constructor(x,y) {
      var options={
          isStatic:true
      }
      this.body=Matter.Bodies.circle(x,y,9,options);
      this.r=300;
      this.image=loadImage("walking_1.png");
      World.add(world,this.body);
    }
    display() {
        push()
     translate(this.body.position.x,this.body.position.y);
     imageMode(CENTER);
     image(this.image,0,0,this.r,this.r);
    pop();
    }
}