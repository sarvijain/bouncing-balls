var canvas;
var music;
var sur1,surf2,surf3,surf4;
var box;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(640,600);
    //create 4 different surfaces
surf1=createSprite(80,590,150,20)
surf1.shapeColor="red";
surf2=createSprite(240,590,150,20)
surf2.shapeColor="blue";
surf3=createSprite(400,590,150,20)
surf3.shapeColor="green";
surf4=createSprite(560,590,150,20)
surf4.shapeColor="magenta";


    //create box sprite and give velocity
    box=createSprite(20,30,20,20)
box.shapeColor="white";
box.velocityX=4;
box.velocityY=-5;

}

function draw() {
    background("black");
    
    //create edgeSprite
 edges=createEdgeSprites();
 box.bounceOff(edges);



    //add condition to check if box touching surface and make it box
    if(surf4.isTouching(box) && box.bounceOff(surf4)){
        box.shapeColor="magenta";
       
    }
    if(surf3.isTouching(box) && box.bounceOff(surf3)){
        box.shapeColor="green";
       
    }
    if(surf2.isTouching(box) && box.bounceOff(surf2)){
        box.shapeColor="blue";
        box.velocityX=0;
        box.velocityY=0;
        music.stop();
    }
    if(surf1.isTouching(box) && box.bounceOff(surf1)){
        music.play();
        box.shapeColor="red";
       
    }
    drawSprites();
}
