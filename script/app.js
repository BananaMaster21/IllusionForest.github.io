//start game stuff
var playLevel = 0;

var startButton = document.getElementById("startButton");
startButton.onclick = function () {playLevel = 1;}

//canvas
var part1 = document.getElementById("part1");
part1.setAttribute("width", screen.width + "px");
part1.setAttribute("height", screen.height + "px");
var ctx1 = part1.getContext("2d");
var canvasesW = screen.width;
var canvasesH = screen.height;


//ground
var ground = canvasesH /1.25;

//backgrounds part 1
var introBackground = document.getElementById("forest");

//get caracter image states
var bobRight1 = document.getElementById("bobRight1");
var bobRight2 = document.getElementById("bobRight2");
var bobLeft1 = document.getElementById("bobLeft1");
var bobLeft2 = document.getElementById("bobLeft2");
var caracterImage = bobRight1;

//caracter size 
var caracterW = canvasesW /10;
var caracterH = canvasesH /7;

//caracter start coords
var caracterX = canvasesW /25;
var caracterY = ground - caracterH;

//image area
var resetButton = document.getElementById("reviveButton");
var resetW = canvasesW /5;
var resetY = canvasesH /5;
var rock = document.getElementById("rock");
var rockY = ground - caracterH - caracterH;

//hit detection
var hitingLeft = 0;
var leftStop = 0;
var hitingRight = 0;
var rightStop = 0;
var fallStop = 0;
var onPlatform = 1;

//caracter sides
var caracterMoveSide = 0;
var caracterKeepSide = "right";
var side = undefined;

//walking and jumping 
function caracterMove (event) {
side = event.key;
}
function caracterStop () {
caracterMoveSide = 0;
side = undefined;
}

var feetSwitch = 0;
var speed = 0;

var jump = false;
var fall = false;
var onGround = 1;
var upTimer = canvasesH /40;
var fallTimer = 0;

function moving () {
   if (side === "ArrowLeft") {
        caracterMoveSide = 1;
        caracterKeepSide = "left";
        }
    if (side === "ArrowRight") {
        caracterMoveSide = 2;
        caracterKeepSide = "right";
        }
    if (side === " " && onGround === 1 || side === " " && onPlatform === 1) {
        jump = 1;
        }
    //left
    if (caracterMoveSide === 1 && hitingLeft === 0) {
        caracterX = caracterX - speed;
      //add speed
        if (speed <= canvasesW /100) {
        speed = speed + canvasesW /1000;
          }
      //walk animation left
      if (jump === 0) {
        feetSwitch = feetSwitch + 1;
        if (feetSwitch <= 4) {caracterImage = bobLeft1;}
        if (feetSwitch >= 5) {caracterImage = bobLeft2;}
        if (feetSwitch >= 9) {feetSwitch = 0;}
          }
        if (jump === 1) {caracterImage = bobLeft2;}
        }
    //right
    if (caracterMoveSide === 2 && hitingRight === 0) {
        caracterX = caracterX + speed;
      //add speed
        if (speed <= canvasesW /100) {
        speed = speed + canvasesW /1000;
          }
      //walk animation right
      if (jump === 0) {
        feetSwitch = feetSwitch + 1;
        if (feetSwitch <= 4) {caracterImage = bobRight1;}
        if (feetSwitch >= 5) {caracterImage = bobRight2;}
        if (feetSwitch >= 9) {feetSwitch = 0;}
          }
        if (jump === 1) {caracterImage = bobRight2;}
        }
    //center
    if (caracterMoveSide === 0) {
        caracterX = caracterX - 0;
      if (caracterKeepSide === "left") {
        caracterImage = bobLeft1;
            }
      if (caracterKeepSide === "right") {
        caracterImage = bobRight1;
            }
        }
    //jumping and falling stuff
    
    //jumping
    if (jump === 1) {
        onGround = 0;
        onPlatform = 0;
        upTimer = upTimer - canvasesH /800;
        caracterY = caracterY - upTimer;
       }
    //falling
    if (caracterY < ground && onGround === 0 && upTimer === 0 || fallStop === 0 && jump === 0 && onPlatform === 0) {
      if ( fallTimer <= canvasesH /80) {
        fallTimer = fallTimer + canvasesH /800;
            }
        caracterY = caracterY + fallTimer;
        }
    //landing on ground
    if (caracterY >= ground - caracterH) {
        onGround = 1;
        upTimer = canvasesH /40;
        fallTimer = 0;
        jump = 0;
        }
   //landing on obstacle
   if (fallStop === 1) {
       upTimer = canvasesH /40;
       fallTimer = 0;
       jump = 0;
       stopFall = 0;
       }
}

// lives
var heart = document.getElementById("heart");
var lives = 2;
var healTimer = 0;
var whenHeal = 300;
var heart1X = canvasesW /25;
var heart2X = canvasesW /12.5;
var heartsY = canvasesH /20;
var heartsW = canvasesW /50;
var heartsH = canvasesH /25;

//obstacles
var obstaclesHitY = 0;
var obstaclesHitRight = 0;
var obstaclesHitLeft = 0;
function obstacleCollision () {
   
   
}
function obstacleFloor (image, x, y, width, height) {
   ctx1.drawImage(image, x, y, width, height);
   if (x <= caracterX + caracterW && caracterX + caracterW < x + width /2 && caracterY > y - 5) {hitingRight = 1;}else {hitingRight = 0;}
   if (x + width >= caracterX && caracterX > x + width /2 && caracterY > y - 5) {hitingLeft = 1;}else {hitingLeft = 0;}
   if (y <= caracterY && caracterX + caracterW /2 > x && caracterX + caracterW /2 < x + width) {fallStop = 1; onPlatform = 1;}else {fallStop = 0; onPlatform = 0;}
}

function reset () {
   if (lives === 0) {
 pause = 0;
 caracterX = canvasesW /25;
 caracterY = ground - caracterH;
 caracterMoveSide = 0;
 caracterKeepSide = "right";
 side = undefined;
 feetSwitch = 0;
 speed = 0;
 jump = false;
 fall = false;
 onGround = 1;
 upTimer = canvasesH /40;
 fallTimer = 0;
 healTimer = 0;
 whenHeal = 300;
 heart1X = canvasesW /25;
 heart2X = canvasesW /12.5;
 heartsY = canvasesH /20;
 heartsW = canvasesW /50;
 heartsH = canvasesH /25;
 lives = 2;
   }
}
//pausing
var pause = 0;

var TextSize = canvasesH /10;
var Darkness = 0.8;

function liveAndHeal () {
  if (lives === 2) {ctx1.drawImage(heart, heart1X, heartsY, heartsW, heartsH);ctx1.drawImage(heart, heart2X, heartsY, heartsW, heartsH);}
  
    if (lives === 1) {ctx1.drawImage(heart, heart1X, heartsY, heartsW, heartsH); healTimer = healTimer +1;}
  
       if (whenHeal === healTimer) {lives = 2; healTimer = 0;}
  
    if (lives === 0) {
      pause = 1;
      ctx1.fillStyle = "rgba( 0, 0, 0,"+Darkness+")"; ctx1.fillRect(0, 0, canvasesW, canvasesH); 
      ctx1.fillStyle = "lightGrey"; ctx1.textAlign = "center"; ctx1.font = ""+TextSize+"px Arial"; ctx1.fillText("Click to restart", canvasesW /2, canvasesH /4);
      ctx1.drawImage(resetButton, canvasesW /2 - resetW /2, canvasesH /2 - resety /2, resetW, resetY);
    }
}

function gamePart1 () {
requestAnimationFrame(gamePart1);
  if (playLevel === 1) {
    ctx1.drawImage(introBackground, 0, 0, canvasesW, canvasesH);
  }
    //pause
    if (pause === 0) { //start of pause
       
    //running and jumping
    moving();
       
    } //end of pause
   
    //obstacles
    obstacleFloor(rock, 500, rockY, caracterW, caracterH);
   
    //player
    ctx1.drawImage(caracterImage, caracterX, caracterY - caracterH, caracterW, caracterH);
    
    //hearts and damage
    liveAndHeal();
}
requestAnimationFrame(gamePart1);
