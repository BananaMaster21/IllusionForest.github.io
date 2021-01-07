//start game stuff
var playLevel = 0;
var nextLevel = 0;

var startButton = document.getElementById("startButton");
startButton.onclick = function () {playLevel = 0;}

//canvas
var part1 = document.getElementById("part1");
part1.setAttribute("width", screen.width + "px");
part1.setAttribute("height", screen.height + "px");
var ctx1 = part1.getContext("2d");
var canvasesW = screen.width;
var canvasesH = screen.height;


//ground
var ground = canvasesH /1.25;

//backgrounds
var introBack = document.getElementById("introback");
var lvl_1Back = document.getElementById("lvl1back");
var house = document.getElementById("house");

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
var heart = document.getElementById("heart");
var resetButton = document.getElementById("reviveButton");
var rock = document.getElementById("rock");
var spikeFloor = document.getElementById("spikeFloor");

//hit detection
var hitingLeft = 0;
var leftStop = 0;
var hitingRight = 0;
var rightStop = 0;
var fallStop = 0;
var sliping = 0;

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
    if (side === " " && onGround === 1) {
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
        upTimer = upTimer - canvasesH /800;
        caracterY = caracterY - upTimer;
       }
    //falling
    if (caracterY < ground && onGround === 0 && upTimer === 0 || sliping === 1) {
      if ( fallTimer <= canvasesH /80) {
        fallTimer = fallTimer + canvasesH /800;
            }
        caracterY = caracterY + fallTimer;
        }
    //landing
    if (caracterY >= ground - caracterH || fallStop === 1) {
        onGround = 1;
        upTimer = canvasesH /40;
        fallTimer = 0;
        jump = 0;
        }
}

//obstacles
var ob = {
fall_1: 0,
left_1: 0,
right_1: 0,
fall_2: 0,
left_2: 0,
right_2: 0,
fall_3: 0,
left_3: 0,
right_3: 0,
fall_4: 0,
left_4: 0,
right_4: 0,
}

//obstacles
var floor = ground - caracterH;

//sliping off obstacles 
function slip () {
   if(ob.fall_1 + ob.fall_2 + ob.fall_3 + ob.fall_4 === 4 && caracterY < ground - caracterH && jump === 0) {fallStop = 0; sliping = 1; }else {sliping = 0;}
}
function wallRight () {
   if(ob.right_1 + ob.right_2 + ob.right_3 + ob.right_4 === 4) {hitingRight = 0;}else {ob.right_1 = 0; ob.right_2 = 0; ob.right_3 = 0; ob.right_4 = 0;}
}
function wallLeft () {
   if(ob.left_1 + ob.left_2 + ob.left_3 + ob.left_4 === 4) {hitingLeft = 0;}else {ob.left_1 = 0; ob.left_2 = 0; ob.left_3 = 0; ob.left_4 = 0;}
}
function obstacle (image, x, y, width, height, number) {
   ctx1.drawImage(image, x, y, width, height);
   
   //colision right
   if (x <= caracterX + caracterW && caracterX + caracterW < x + width /2 && caracterY - caracterH /2 > y && caracterY - caracterH /2 < y + height) {hitingRight = 1;}else {
         if (number === 1) {ob.right_1 = 1;}else if (number === 2) {ob.right_2 = 1;}else if (number === 3) {ob.right_3 = 1;}else if (number === 4) {ob.right_4 = 1;}}
   
   //colision left
   if (x + width >= caracterX && caracterX > x + width /2 && caracterY - caracterH /2 > y && caracterY - caracterH /2 < y + height) {hitingLeft = 1;}else {
         if (number === 1) {ob.left_1 = 1;}else if (number === 2) {ob.left_2 = 1;}else if (number === 3) {ob.left_3 = 1;}else if (number === 4) {ob.left_4 = 1;}}
   
   //colision top
   if (y <= caracterY && caracterY < y + height /2 && caracterX + caracterW /2 > x && caracterX + caracterW /2 < x + width) {fallStop = 1; if (number === 1) {ob.fall_1 = 0;}else if (number === 2) {ob.fall_2 = 0;}else if (number === 3) {ob.fall_3 = 0;}else if (number === 4) {ob.fall_4 = 0;}}else {
      if (number === 1) {ob.fall_1 = 1;}else if (number === 2) {ob.fall_2 = 1;}else if (number === 3) {ob.fall_3 = 1;}else if (number === 4) {ob.fall_4 = 1;}}
}

//traps
var damageActivated = 0;
var damageReset = 0;
var inTrap = 0;
function damageTimer () {
   if (damageActivated === 1 ) {damageReset += 1;if (damageReset === 75) {damageActivated = 0;}}
}
function trap (image, x, y, width, height) {
   ctx1.drawImage(image, x, y, width, height);
   
   if (caracterX + caracterW /2 > x && caracterX + caracterW /2 < x + width && caracterY - caracterH /3 >= y && caracterY - caracterH /3 <= y + height ) {if (damageActivated === 0){if(lives === 2){lives = 1; damageReset = 0; damageActivated = 1;}else if (lives === 1){lives = 0;}}} 
}

function reset () {
   if (lives === 0 || nextLevel === 1) {
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
 lives = 2;
 nextLevel === 0;
   }
}

//going to next level function
function next () {
   if (caracterX >= 0 + canvasesW) {
       if (playLevel === 0) {playLevel === 1;}reset();
    }
}

//pausing
var pause = 0;


// lives
var lives = 2;
var healTimer = 0;
var whenHeal = 300;
var heart1X = canvasesW /25;
var heart2X = canvasesW /12.5;
var heartsY = canvasesH /20;
var heartsW = canvasesW /50;
var heartsH = canvasesH /25;


function liveAndHeal () {
  if (lives === 2) {ctx1.drawImage(heart, heart1X, heartsY, heartsW, heartsH);ctx1.drawImage(heart, heart2X, heartsY, heartsW, heartsH);}
  
    if (lives === 1) {ctx1.drawImage(heart, heart1X, heartsY, heartsW, heartsH); healTimer = healTimer +1;}
  
       if (whenHeal === healTimer) {lives = 2; healTimer = 0;}
  
    if (lives === 0) {
       //death screen
       var TextSize = canvasesH /10;
       var Darkness = 0.8;
       var resetW = canvasesW /5;
       var resetY = canvasesH /5;
      pause = 1;
      ctx1.fillStyle = "rgba( 0, 0, 0,"+Darkness+")"; ctx1.fillRect(0, 0, canvasesW, canvasesH); 
      ctx1.fillStyle = "lightGrey"; ctx1.textAlign = "center"; ctx1.font = ""+TextSize+"px Arial"; ctx1.fillText("Click to restart", canvasesW /2, canvasesH /4);
      ctx1.drawImage(resetButton, canvasesW /2 - resetW /2, canvasesH /2 - resetY /2, resetW, resetY);
    }
}
var instructionTimer = 0;

function gamePart1 () {
requestAnimationFrame(gamePart1);
  if (playLevel === 0) {
      ctx1.drawImage(introBack, 0, 0, canvasesW, canvasesH);
  }
  if (playLevel === 1) {
      ctx1.drawImage(lvl_1Back, 0, 0, canvasesW, canvasesH);
      ctx1.drawImage(house, 0 - caracterW *1.5, floor - caracterH *2, caracterW *3, caracterH *2);
  }
   
   //go to next level
   next();
   
    //pause
    if (pause === 0) { //start of pause
       
    //running and jumping
    moving();
       
    } //end of pause
   
    //obstacles
    slip();
    wallRight();
    wallLeft();
    damageTimer();
   
    if (playLevel === 0) {
      instructionTimer += 1;
      
      ctx1.fillStyle = "black";
      ctx1.textAlign = "start";
      ctx1.font = ""+canvasesH /20+"px Arial";
      
      //spike hurt instructions
      ctx1.fillText("Spikes hurt", canvasesW *4/5, floor - caracterH *1.5 );
    
      obstacle(rock, canvasesW *1/3 - caracterW /2, floor - caracterH, caracterW, caracterH, 1);
      obstacle(rock, canvasesW *1/2 - caracterW /2, floor - caracterH *2, caracterW, caracterH *2, 2);
      obstacle(rock, canvasesW *2/3 - caracterW /2, floor - caracterH, caracterW, caracterH, 3);
       
      //obstacles not in use
      obstacle(rock, 0, 0, 0, 0, 4);
      
      //where hearts are instructions
      ctx1.fillText("Your lives", heart2X *1.5, canvasesH /20 + canvasesH /40);
      
      //controls instructions
      ctx1.textAlign = "center";
      if (instructionTimer < 225) {
      ctx1.fillText("Arrow keys to move left and right, Space to jump", canvasesW /2,floor - caracterH *3);}else {
      ctx1.fillText("Next level this way =~~~>", canvasesW /2,floor - caracterH *3);
      }
      
      //player
      ctx1.drawImage(caracterImage, caracterX, caracterY - caracterH, caracterW, caracterH);
      
      //traps
      trap(spikeFloor, canvasesW *3/8, floor - caracterH /2, caracterW, caracterH /2);
      trap(spikeFloor, canvasesW *4/5, floor - caracterH /2, caracterW *4/3, caracterH /2);
   }  
   if (playLevel === 1) {
      
      
      //player
      ctx1.drawImage(caracterImage, caracterX, caracterY - caracterH, caracterW, caracterH);
      
      //traps
      
   }
    
    //hearts and damage
    liveAndHeal();
}
requestAnimationFrame(gamePart1);
