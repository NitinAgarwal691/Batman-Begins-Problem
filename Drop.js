class Drop{
    constructor(x,y) {
        var options={
            isStatic:false,
            friction:0.1
        }
        this.body=Matter.Bodies.circle(x,y,9,options);
        this.r=9;
        World.add(world,this.body);
    }

 update() {
     
     if(this.body.position.y>900){
      Matter.Body.setPosition(this.body,{x:random(0,600),y:random(0,300)});   
     }

  }

    display() {
        push();
        translate(this.body.position.x,this.body.position.y);
        fill("blue");
        ellipse(0,0,this.r,this.r);
       pop();
    }
}