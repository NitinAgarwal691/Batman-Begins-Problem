const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var player;
var maxDrops=100;
var drops=[];

function preload(){
    
}

function setup(){
    createCanvas(600,900);
    engine = Engine.create();
    world = engine.world;
    player=new Umbrella(300,450);
    for(var i=0;i<maxDrops;i++){
        drops.push(new Drop(random(0,600),random(0,300)))
    }
}

function draw(){
    Engine.update(engine);
    background(0);
    for (var i = 0; i < drops.length; i++) {
     
        drops[i].display();

        drops[i].update();
        
      }
    player.display();
}   

