const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2,box3,box4
var ground;
var Pig1;
var Pig2;
var log1,log2,log3,log4;
var bird1;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(900, 320, 70,70);
    box3 = new Box(700,230,70,70);
    box4 = new Box(900,230,70,70);
    ground = new Ground(600,380,1200,20);
    Pig1 = new pig(800,320);
    Pig2 = new pig(800,230);
    log1= new logs(800, 250, 300, PI/2);
    log2= new logs(800, 200, 300, PI/2);
    log3= new logs(750,120,150, PI/7);
    log4= new logs(870,120,150, -PI/7);
    bird1= new bird(275, 200);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    Pig1.display();
    Pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();

}