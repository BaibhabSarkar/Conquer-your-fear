var bg,Last;
var crate, deadbush, skeleton, tree, Sign, Sign2, bush, bush2;
var tombstone, tombstone2; 
var Jonathan, Jonathan_run, Jonathan_dead, Jonathan_jump;
var Death;

class Upload{
    constructor(){
    
        bg=loadImage("Images/Bg.jpg");
    Last= loadImage("Images/Last.jpg");
    crate= loadImage("Images/Crate.png");
    deadbush= loadImage("Images/DeadBush.png");
    skeleton= loadImage("Images/Skeleton.png");
    tree= loadImage("Images/Tree.png");
    Sign= loadImage("Images/Sign.png");
    Sign2= loadImage("Images/ArrowSign.png");
    bush= loadImage("Images/Bush (1).png");
    bush2= loadImage("Images/Bush (2).png");
    tombstone= loadImage("Images/TombStone (1).png");
    tombstone2= loadImage("Images/TombStone (2).png");
    Death= loadSound("Sounds/Death.mp3");
    Jonathan= loadImage("Boy/Idle.png");
    Jonathan_run= loadAnimation("Boy/Run1.png","Boy/Run2.png", "Boy/Run3.png" );
    Jonathan_dead= loadImage("Boy/Dead.png");
    Jonathan_jump= loadAnimation("Boy/Jump1.png","Boy/Jump2.png","Boy/Jump3.png");
   }
}