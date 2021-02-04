
//GameStates
var PLAY=2;
var START=1;
var END=0;
var gameState=START;

var edges;
var score=0;
var timer=60;

var boy, boy_dead, boy_run,boy_jump;

function preload(){
    upload=new Upload();
}

function setup(){
   createCanvas(990,700);

   boy=createSprite(100,650,20,40);
        boy.addImage(Jonathan);
        boy.scale=0.2;
}

function draw(){
    background(bg);
if(gameState===START){
  //Bakcground of start state
  background("black");
  
  //Assigning visibility false to all sprites
  
  
  //To declare instructions
  textSize(60);
  fill("White");
  text("SCARY MAZE RUNNER", 180,70);
  textSize(20);
  text("Read all the instructions before playing the game",30,130);
  text("1.Press Space Key to make jump",50,170);
  text("2.Collect items to score the points",50,200);
  text("3.Don't touch the obstacles",50,230);
  text("4.Jump on the wood to rest for sometime",50,255);
  text("5.Save the boy from ghost",50,285);
  text("6.Use left and right Arrow key to move the boy left and right",50,315);
  text("7.There is Timer in game",50,345);
  text("8.Protect your boy from getting killed by ghost",50,375);
  
  textSize(30);
  text("Are you Ready to Conquer your Fear???",250,450);

  textSize(40);
  text("ALL THE BEST!!",330,550);
  
  textSize(28);
  text("Press Space Key to Start the Game",250,600);
  
  //To start the game when space key is presses
  if(keyDown("space")){
    gameState=PLAY; 
    
  }
}
else if(gameState===PLAY){
    background(bg);
    timer=timer-0.05;
    textSize(25);
    fill("yellow")
    text("TIME REMANING:"+Math.round(timer),600,30);
    text("score= " + score,50,30);
      edges=createEdgeSprites();

// Make Sprites visible
     

// Giving control to boy
boy.velocityX=0;
boy.velocityY=0;
boy.bounceOff(edges);

if(keyDown("UP_ARROW")){
  boy.velocityY=-8; 
}
  if(keyDown("DOWN_ARROW")){
  boy.velocityY=8; 
}
   if(keyDown("LEFT_ARROW")){
  boy.velocityX=-8; 
}
   if(keyDown("RIGHT_ARROW")){
  boy.velocityX=8; 
}

}
    drawSprites();
}   

