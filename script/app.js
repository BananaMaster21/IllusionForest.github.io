var playLevel = 99;
var nextLevel = 0;
var startButton = document.getElementById("startButton");
startButton.onclick = function () {playLevel = 0;}
var mycanvas = document.getElementById("mycanvas");
mycanvas.setAttribute("width", window.outerWidth + "px");
mycanvas.setAttribute("height", window.outerHeight + "px");
var canvasesW = window.outerWidth;
var canvasesH = window.outerHeight;
var ctx1 = mycanvas.getContext("2d");
var ground = canvasesH /1.25;
var onGround = 1;

//----------------------------------------------------------
//BACKGROUND IMAGE STUFF
//----------------------------------------------------------
var introBack = document.getElementById("introback");
var lvl_1Back = document.getElementById("lvl1back");
var lvl_2Back = document.getElementById("lvl2back");
var lvl_3Back = document.getElementById("lvl3back");
var lvl_5Back = document.getElementById("lvl5back");

//----------------------------------------------------------
//CARACTER STUFF
//----------------------------------------------------------
var c = {
    w: canvasesW /10,
    h: canvasesH /7,
    x: canvasesW /25,
    y: undefined,
    
    keep: "right",
    move: 0,
    side: undefined,
    otherside: undefined,
    
    r1: document.getElementById("bobRight1"),
    r2: document.getElementById("bobRight2"),
    l1: document.getElementById("bobLeft1"),
    l2: document.getElementById("bobLeft2"),
    image: undefined,
}
c.y = ground - c.h;
c.image = c.r1;

var caracterH = c.h;
var caracterW = c.w;



var bobRight1 = document.getElementById("bobRight1");
var bobRight2 = document.getElementById("bobRight2");
var bobLeft1 = document.getElementById("bobLeft1");
var bobLeft2 = document.getElementById("bobLeft2");
var tom = document.getElementById("tom");
var caracterImage = bobRight1;
var caracterMoveSide = 0;
var caracterKeepSide = "right";
var side = undefined;
var otherSide = undefined;

var b = {
    w: canvasesW /10,
    h: canvasesH /7,
}

//----------------------------------------------------------
//IMAGE STUFF
//----------------------------------------------------------
var meter1 = document.getElementById("meter1");
var meter2 = document.getElementById("meter2");
var meter3 = document.getElementById("meter3");
var meter4 = document.getElementById("meter4");
var meter5 = document.getElementById("meter5");
var meter6 = document.getElementById("meter6");
var meter7 = document.getElementById("meter7");
var heart = document.getElementById("heart");
var resetButton = document.getElementById("reviveButton");
var house = document.getElementById("house");
var rock = document.getElementById("rock");
var vineImg = document.getElementById("vine");
var spikeFloor = document.getElementById("spikeFloor");
var spikeWall = document.getElementById("spikeWall");
var spikeBall = document.getElementById("spikeBall");
var door = document.getElementById("door");
var crystal1 = document.getElementById("cristal1");
var crystal2 = document.getElementById("cristal2");
var crystal3 = document.getElementById("cristal3");
var crystal4 = document.getElementById("cristal4");
var crystal5 = document.getElementById("cristal5");
var villageDoor = document.getElementById("villageDoor");
var ruin = document.getElementById("ruin");
var sign = document.getElementById("sign");
var box = document.getElementById("box");
var water = document.getElementById("water");



var hitingLeft = 0;
var leftStop = 0;
var hitingRight = 0;
var rightStop = 0;
var fallStop = 0;
var sliping = 0;

//----------------------------------------------------------
//Control STUFF
//----------------------------------------------------------
function caracterMove (event) {c.side = event.key;c.otherside = event.key;}
function caracterStop (event) {var offKey = event.key;if (offKey === "ArrowLeft" || offKey === "ArrowRight") {c.move = 0;c.side = undefined;}if (offKey === " ") {c.otherside = 0}}
function controls () {if (c.side === "ArrowLeft") {c.move = 1;c.keep = "left";}if (c.side === "ArrowRight") {c.move = 2;c.keep = "right";}if (c.otherside === " " && onGround === 1) {jump = 1;}}


//----------------------------------------------------------
//WALKING STUFF
//----------------------------------------------------------
var feetSwitch = 0;
var speed = 0;

function walking () {
    if(c.move===1&&hitingLeft===0){c.x=c.x-speed;if(speed<=canvasesW/100 && h.c1 === 0){speed=speed+canvasesW/1000;}else if (speed<=canvasesW/85 && h.c1 === 1){speed=speed+canvasesW/850;}if(jump===0){feetSwitch+=1;if(feetSwitch<=4){c.image=c.l1;}if(feetSwitch>=5){c.image=c.l2;}if(feetSwitch>=9){feetSwitch=0;}if(jump===1){c.image=c.l2;}}
    if(c.move===2&&hitingRight===0){c.x=c.x+speed;if(speed<=canvasesW/100 && h.c1 === 0){speed=speed+canvasesW/1000;}else if(speed<=canvasesW/85 && h.c1 === 1){speed=speed+canvasesW/850;}if(jump===0){feetSwitch+=1;if(feetSwitch<=4){c.image=c.r1;}if(feetSwitch>=5){c.image=c.r2;}if(feetSwitch>=9){feetSwitch=0;}if(jump===1){c.image=c.r2;}}
    if(c.move===0)c.x = c.x - 0;if (c.keep === "left") {c.image = c.l1;}if (c.keep === "right") {c.image = c.r1;}
}

//----------------------------------------------------------
//JUMPING AND FALLING STUFF
//----------------------------------------------------------
var jump = false;
var fall = false;
var upTimer = canvasesH /40;
var fallTimer = 0;

function jumpFallLand () {
    if(jump===1){onGround=0;upTimer=upTimer-canvasesH/800;c.y=c.y-upTimer;}
    if(c.y<ground&&onGround===0&&upTimer===0||sliping===1){onGround=0;if(fallTimer<=canvasesH/80){fallTimer=fallTimer+canvasesH/800;}c.y=c.y+fallTimer;}
    if(c.y>=ground - c.h||fallStop===1){onGround=1;upTimer=canvasesH/40;fallTimer=0;jump=0;}
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
    
v1: 0,
}

//obstacles
var floor = ground - caracterH;
//sliping off obstacles 
function slip(){if(ob.fall_1+ob.fall_2+ob.fall_3+ob.fall_4+ob.v1===5&&c.y<ground-c.h&&jump===0){fallStop=0;sliping=1;}else{sliping=0;}}
function wallRight(){if(ob.right_1+ob.right_2+ob.right_3+ob.right_4===4){hitingRight=0;}else{ob.right_1=0;ob.right_2=0;ob.right_3=0;ob.right_4=0;}}
function wallLeft(){if(ob.left_1+ob.left_2+ob.left_3+ob.left_4===4){hitingLeft=0;}else{ob.left_1=0;ob.left_2=0;ob.left_3=0;ob.left_4=0;}}

function obstacle (image, x, y, width, height, number) {
   ctx1.drawImage(image, x, y, width, height);
    
   //colision right
   if (x <= c.x + c.w && c.x + c.w < x + width /2 && c.y - c.h /2 > y && c.y - c.h /2 < y + height) {hitingRight = 1;}else {
         if (number === 1){ob.right_1 = 1;}else if (number === 2){ob.right_2 = 1;}else if (number === 3){ob.right_3 = 1;}else if (number === 4){ob.right_4 = 1;}}
   
   //colision left
   if (x + width >= c.x && c.x > x + width /2 && c.y - c.h /2 > y && c.y - c.h /2 < y + height) {hitingLeft = 1;}else {
         if (number === 1){ob.left_1 = 1;}else if (number === 2){ob.left_2 = 1;}else if (number === 3){ob.left_3 = 1;}else if (number === 4){ob.left_4 = 1;}}
   
   //colision top
   if (y <= c.y && c.y < y + height /2 && c.x + c.w *1/3 > x && c.x + c.w *1/3 < x + width || y <= c.y && c.y < y + height /2 && c.x + c.w *2/3 < x + width && c.x + c.w *2/3 > x) {fallStop = 1; if (number === 1) {ob.fall_1 = 0;}else if (number === 2) {ob.fall_2 = 0;}else if (number === 3) {ob.fall_3 = 0;}else if (number === 4) {ob.fall_4 = 0;}}else {
      if (number === 1) {ob.fall_1 = 1;}else if (number === 2) {ob.fall_2 = 1;}else if (number === 3) {ob.fall_3 = 1;}else if (number === 4) {ob.fall_4 = 1;}}
}

//----------------------------------------------------------
//VINE STUFF
//----------------------------------------------------------
function vine (x, y, width, height, number) {
   ctx1.drawImage(vineImg, x, y, width, height);
   if (c.x + c.w /2 > x && c.x + c.w /2 < x + width && c.y - c.h /3 >= y && c.y - c.h /3 <= y + height ) {fallStop = 1; if (number === 1) {ob.v1 = 0;}}else {if (number === 1) {ob.v1 = 1;}}
}



//----------------------------------------------------------
//NEEDED FOR ALL TRAP STUFF
//----------------------------------------------------------
var t = {
    da: 0,
    dr: 0,
    it: 0,
}

//-----timer for damage-----//
function damageTimer () {
   if (t.da === 1 ) {t.dr += 1;if (t.dr === 75) {t.da = 0;}}
}



//----------------------------------------------------------
//STATIC TRAP STUFF
//----------------------------------------------------------

//-----build static trap-----//
function trap (image, x, y, width, height) {
   ctx1.drawImage(image, x, y, width, height);
   if (c.x + c.w /2 > x && c.x + c.w /2 < x + width && c.y - c.h /3 >= y && c.y - c.h /3 <= y + height ) {if (t.da === 0){if(lives === 3){lives = 2;t.dr = 0; t.da = 1;}else if(lives === 2){lives = 1; t.dr = 0; t.da = 1;}else if (lives === 1){lives = 0;}}} 
}

//-----build water trap-----//
function aqua (x, y, width, height) {
   ctx1.drawImage(water, x, y, width, height); 
   if (c.x > x && c.x + c.w < x + width && c.y - c.h > y) {lives = 0;}
}


//----------------------------------------------------------
//MOVING TRAP STUFF
//----------------------------------------------------------
var traping = {
   mh1: 0,//move horizontal + number
   mv1: 0,//move vertical + number
   d1: undefined,//direction + number
   mh2: 0,
   mv2: 0,
   d2: undefined,
}

//-----build moving trap-----//
function movingTrap (image, x, oldX, y, oldY, width, height, distance, axis, speed, number) {//    ← What is thisssssssssssssssss so many 
   ctx1.drawImage(image, x, y, width, height);

 if (number === 1) {
     
   if (axis === "horizontal" &&  traping.d1 === undefined) {traping.d1 = "right";}
   if (axis === "vertical" && traping.d1 === undefined) {traping.d1 = "down";}
   
   if (axis === "horizontal" && traping.d1 === "right") {if (x <= oldX + distance /2) {traping.mh1 += speed}else if (x > oldX + distance /2) {traping.d1 = "left";}}
   if (axis === "horizontal" && traping.d1 === "left") {if (x >= oldX - distance /2) {traping.mh1 -= speed}else if (x < oldX - distance /2) {traping.d1 = "right";}} 
   
   if (axis === "vertical" && traping.d1 === "down") {if (y <= oldY + distance /2) {traping.mv1 += speed}else if (y > oldY + distance /2) {traping.d1 = "up";}}
   if (axis === "vertical" && traping.d1 === "up") {if (y >= oldY - distance /2) {traping.mv1 -= speed}else if (y < oldY - distance /2) {traping.d1 = "down";}}
  
 }else if (number === 2) {
     
   if (axis === "horizontal" &&  traping.d2 === undefined) {traping.d2 = "right";}
   if (axis === "vertical" && traping.d2 === undefined) {traping.d2 = "down";}
   
   if (axis === "horizontal" && traping.d2 === "right") {if (x <= oldX + distance /2) {traping.mh2 += speed}else if (x > oldX + distance /2) {traping.d2 = "left";}}
   if (axis === "horizontal" && traping.d2 === "left") {if (x >= oldX - distance /2) {traping.mh2 -= speed}else if (x < oldX - distance /2) {traping.d2 = "right";}} 
   
   if (axis === "vertical" && traping.d2 === "down") {if (y <= oldY + distance /2) {traping.mv2 += speed}else if (y > oldY + distance /2) {traping.d2 = "up";}}
   if (axis === "vertical" && traping.d2 === "up") {if (y >= oldY - distance /2) {traping.mv2 -= speed}else if (y < oldY - distance /2) {traping.d2 = "down";}}

 }
   if (c.x + c.w /2 > x && c.x + c.w /2 < x + width && c.y - c.h /2 >= y && c.y - c.h /2 <= y + height ) {if (t.da === 0){if(lives === 3){lives = 2; t.dr = 0; t.da = 1;}else if(lives === 2){lives = 1; t.dr = 0; t.da = 1;}else if (lives === 1){lives = 0;}}} 
 }



//----------------------------------------------------------
//DOOR STUFF
//----------------------------------------------------------
var isEbeingPressed = 0;

function teleport (event) {var thing = event.key; if (thing === "e" || thing === "E" ){isEbeingPressed = 1;}else {isEbeingPressed = 0;}}
function portal (x, y, number) {
   ctx1.drawImage(door, x, y, b.w, b.h *1.5);
   if (c.x + c.w /2 >= x && c.x + c.w /2 <= x + b.w && c.y - c.h /3 >= y && c.y - c.h /3 <= y + b.h *1.5) {
        
       //writing
        ctx1.fillStyle = "black";
        ctx1.textAlign = "center";
        ctx1.font = ""+canvasesH /20+"px cursive";
        ctx1.fillText("Press E to enter", x + caracterW /2, y);
       
       //do thing
       if (isEbeingPressed === 1) {if (number === 1){playLevel = 70923742194;}if (number === 2){playLevel = 0180481080;}if (number === 111){playLevel = 3;}if (number === 222){playLevel = 6;}}
   }
}

//----------------------------------------------------------
//CRISTAL STUFF
//----------------------------------------------------------
h = {
    c1: 0,
    c2: 0,
    c3: 0,
    c4: 0,
    c5: 0,
}

function crystal (what, thing, x, y)  {
    if(thing === 0){ctx1.drawImage(what, x, y, b.w *0.5, b.h *0.75);}
    if (c.x + c.w /2 > x && c.x + c.w /2 < x + b.w *0.5 && c.y - c.h /3 >= y && c.y - c.h /3 <= y + b.h *0.75 ) {
        if (what === crystal1) {h.c1 = 1;}
        if (what === crystal2) {if(h.c2 === 0){lives = 3;}h.c2 = 1;}
        if (what === crystal3) {h.c3 = 1;}
        if (what === crystal4) {h.c4 = 1;}
        if (what === crystal5) {h.c5 = 1;}
    }
}


//----------------------------------------------------------
//CARACTER STUFF
//----------------------------------------------------------

function caracter () {
   //if (h.c4 === 1){c.w = c.w *0.75;c.h = c.h *0.75;}
   ctx1.drawImage(c.image, c.x, c.y - c.h, c.w, c.h); 
}


var instructionTimer = 0;

//----------------------------------------------------------
//RESETING WHEN DIE STUFF
//----------------------------------------------------------
mycanvas.onclick = function () {if(lives === 0){reset();}}
function reset () {
   if (lives === 0) {
 pause = 0;
 if (playLevel > 0 && playLevel < 3) {playLevel = 1;
     }else if (playLevel > 0 && playLevel < 6 || playLevel === 70923742194 || playLevel === 27393487593 || playLevel === 986593659) {playLevel = 3;
               }else if (playLevel > 0) {playLevel = 6;}
 instructionTimer = 0;
 c.x = canvasesW /25;
 c.y = ground - c.h;
 c.move = 0;
 c.keep = "right";
 c.side = undefined;
 feetSwitch = 0;
 speed = 0;
 jump = false;
 fall = false;
 onGround = 1;
 upTimer = canvasesH /40;
 fallTimer = 0;
 healTimer = 0;
 h.c1 = 0;
 h.c2 = 0;
 h.c3 = 0;
 h.c4 = 0;
 h.c5 = 0;
 lives = 2;
 pause = 0;
   }
}

//----------------------------------------------------------
//SWITCHING LEVELS STUFF
//----------------------------------------------------------
function next (next_lvl) {
   if (c.x > 0 + canvasesW) {
       
       playLevel = next_lvl;
       
       traping.d1 = undefined;
       traping.mh1 = 0;
       traping.mv1 = 0;
       traping.d2 = undefined;
       traping.mh2 = 0;
       traping.mv2 = 0;
       instructionTimer = 0;
       c.x = canvasesW /25;
       c.y = ground - c.h;
    }
}
function prev (previous_lvl) {
   if (c.x < 0) {
       playLevel = previous_lvl;
       traping.d1 = undefined;
       traping.mh1 = 0;
       traping.mv1 = 0;
       traping.d2 = undefined;
       traping.mh2 = 0;
       traping.mv2 = 0;
       instructionTimer = 0;
       c.x = canvasesW *24/25;
       c.y = ground - c.h;
    }
}


//----------------------------------------------------------
//LIFE SYSTEM STUFF AND DEATH SCREEN THING
//----------------------------------------------------------
var lives = 2;

//-----heart positioning-----//
var heart1X = canvasesW /25;
var heart2X = canvasesW /12.5;
var heart3X = canvasesW /8.3;
var heartsY = canvasesH /20;
var heartsW = canvasesW /50;
var heartsH = canvasesH /25;

//-----pause when die-----//
var pause = 0;

//-----place hearts and activate death if needed-----//
function live () {
  if (lives === 3) {ctx1.drawImage(heart, heart1X, heartsY, heartsW, heartsH);ctx1.drawImage(heart, heart2X, heartsY, heartsW, heartsH);ctx1.drawImage(heart, heart3X, heartsY, heartsW, heartsH);}
  if (lives === 2) {ctx1.drawImage(heart, heart1X, heartsY, heartsW, heartsH);ctx1.drawImage(heart, heart2X, heartsY, heartsW, heartsH);}
  
    if (lives === 1) {ctx1.drawImage(heart, heart1X, heartsY, heartsW, heartsH);}
  
    if (lives === 0) {
       //-----death screen-----//
       var TextSize = canvasesH /10;
       var Darkness = 0.8;
       var resetW = canvasesW /5;
       var resetY = canvasesH /5;
       pause = 1;
       ctx1.fillStyle = "rgba( 0, 0, 0,"+Darkness+")"; ctx1.fillRect(0, 0, canvasesW, canvasesH); 
       ctx1.fillStyle = "lightGrey"; ctx1.textAlign = "center"; ctx1.font = ""+TextSize+"px cursive"; ctx1.fillText("Click to restart", canvasesW /2, canvasesH /4);
       ctx1.drawImage(resetButton, canvasesW /2 - resetW /2, canvasesH /2 - resetY /2, resetW, resetY);
    }
}



//----------------------------------------------------------
//MUSIC
//----------------------------------------------------------
var audio_0 = document.getElementById("sound_intro");
var audio_1 = document.getElementById("sound_1");
var audio_2 = document.getElementById("sound_2");
var audio_3 = document.getElementById("sound_3");
var audio_4 = document.getElementById("sound_4");
function music () {
if (playLevel === 0 || playLevel === 7) {audio_0.play();}else {audio_0.pause();}
if (playLevel === 1 || playLevel === 2) {audio_1.play();}else {audio_1.pause();}
if (playLevel === 3 || playLevel === 4) {audio_2.play();}else {audio_2.pause();}
if (playLevel === 5 || playLevel === 6) {audio_3.play();}else {audio_3.pause();}
if (playLevel === 525852758123 || playLevel === 70923742194 || playLevel === 0180481080) {audio_4.play();}else {audio_4.pause();}
}


//----------------------------------------------------------
//GAME LOOP THING
//----------------------------------------------------------
function game () {
requestAnimationFrame(game);
    
   
   //-----level backgrounds-----//
  if (playLevel === 0) {
      ctx1.drawImage(introBack, 0, 0, canvasesW, canvasesH);
  }
  if (playLevel === 1) {
      ctx1.drawImage(lvl_1Back, 0, 0, canvasesW, canvasesH);
      ctx1.drawImage(house, 0 - caracterW *3, floor - caracterH *3.5, caracterW *6, caracterH *4);
      //lvl number
      ctx1.drawImage(meter1, canvasesW /2 - canvasesW *1/6, 0, canvasesW *1/3, caracterH *3/5);
  }
  if (playLevel === 2) {
      ctx1.drawImage(lvl_2Back, 0, 0, canvasesW, canvasesH);
      //lvl number
      ctx1.drawImage(meter2, canvasesW /2 - canvasesW *1/6, 0, canvasesW *1/3, caracterH *3/5);
  }
  if (playLevel === 3) {
      ctx1.drawImage(lvl_3Back, 0, 0, canvasesW, canvasesH);
      //lvl number
      ctx1.drawImage(meter3, canvasesW /2 - canvasesW *1/6, 0, canvasesW *1/3, caracterH *3/5);
  }
  if (playLevel === 4) {
      ctx1.drawImage(lvl_3Back, 0, 0, canvasesW, canvasesH);
      //lvl number
      ctx1.drawImage(meter4, canvasesW /2 - canvasesW *1/6, 0, canvasesW *1/3, caracterH *3/5);
  }
  if (playLevel === 5) {
      ctx1.drawImage(lvl_5Back, 0, 0, canvasesW, canvasesH);
      //lvl number
      ctx1.drawImage(meter5, canvasesW /2 - canvasesW *1/6, 0, canvasesW *1/3, caracterH *3/5);
  }if (playLevel === 6) {
      ctx1.drawImage(lvl_1Back, 0, 0, canvasesW, canvasesH);
      //lvl number
      ctx1.drawImage(meter6, canvasesW /2 - canvasesW *1/6, 0, canvasesW *1/3, caracterH *3/5);
  }if (playLevel === 7) {
      ctx1.drawImage(lvl_3Back, 0, 0, canvasesW, canvasesH);
      //lvl number
      ctx1.drawImage(meter7, canvasesW /2 - canvasesW *1/6, 0, canvasesW *1/3, caracterH *3/5);
  }
   
   //-----level music-----//
   music();
   
   //-----going to next level-----//
   next();
    
   
    if (pause === 0) {
       
    //-----movement-----//
    controls();
    walking();
    jumpFallLand();
          
    }
   
    //-----obstacles-----//
    slip();
    wallRight();
    wallLeft();
    damageTimer();
   
    
//-----BUILD INTRO-----//
//----------------------------------------------------------
    if (playLevel === 0) {
      instructionTimer += 1;
      
      ctx1.fillStyle = "black";
      ctx1.textAlign = "start";
      ctx1.font = ""+canvasesH /20+"px cursive";
      
      //spike hurt instructions
      ctx1.fillText("Spikes hurt", canvasesW *4/5, floor - b.h *1.5 );
    
      obstacle(rock, canvasesW *1/3 - b.w /2, floor - b.h, b.w, b.h, 1);
      obstacle(rock, canvasesW *1/2 - b.w /2, floor - b.h *2, b.w, b.h *2, 2);
      obstacle(rock, canvasesW *2/3 - b.w /2, floor - b.h, b.w, b.h, 3);
       
      //obstacles not in use
      obstacle(rock, 0, 0, 0, 0, 4);
      vine(0, 0, 0, 0, 1);
      
      //where hearts are instructions
      ctx1.fillText("Your lives", heart2X *1.5, canvasesH /20 + canvasesH /40);
      
      //controls instructions
      ctx1.textAlign = "center";
      if (instructionTimer < 225) {
      ctx1.fillText("Arrow keys to move left and right, Space to jump", canvasesW /2,floor -b.h *3);}else {
      ctx1.fillText("Move out of the screen to change level", canvasesW /2,floor - b.h *3);
      }
      
      //player
      caracter();
      
      //traps
      trap(spikeFloor, canvasesW *3/8, floor - b.h /2, b.w, b.h /2);
      trap(spikeFloor, canvasesW *4/5, floor - b.h /2, b.w *4/3, b.h /2);
        
      next(1);
   }  
    
       //secrrrrrrrrrrrrrrrret leeeeeeeeevvvvvvvvvvvvels
   if (playLevel === 525852758123) {
       ctx1.drawImage(introBack, 0, 0, canvasesW, canvasesH);
       ctx1.drawImage(ruin, 0, floor - b.h *1.5, b.w *2, b.h *1.5);
       
       //crystal
       crystal(crystal2, h.c2, b.w *0.75, floor - b.h *2);
       
       //objects not in use
        obstacle(rock, 0, 0, 0, 0, 1);
        obstacle(rock, 0, 0, 0, 0, 2);
        obstacle(rock, 0, 0, 0, 0, 3);
        obstacle(rock, 0, 0, 0, 0, 4);
        vine(0, 0, 0, 0, 1);
       
       //player
       caracter();
       
       next(1);
   }
   if (playLevel === 70923742194) {
       ctx1.drawImage(lvl_1Back, 0, 0, canvasesW, canvasesH);
       ctx1.drawImage(sign, canvasesW /2, floor - b.h *2, b.w, b.h *2);
       
       //DooooooooooooooooooooooooooooooooooooooooooR
       portal(canvasesW /25, floor - b.h *1.5, 111);
       
       //objects not in use
       obstacle(rock, 0, 0, 0, 0, 1);
       obstacle(rock, 0, 0, 0, 0, 2);
       obstacle(rock, 0, 0, 0, 0, 3);
       obstacle(rock, 0, 0, 0, 0, 4);
       vine(0, 0, 0, 0, 1);
       
       //player
       caracter();
   }
   if (playLevel === 0180481080) {
       ctx1.drawImage(introBack, 0, 0, canvasesW, canvasesH);
       ctx1.drawImage(sign, canvasesW /2, floor - b.h *2, b.w, b.h *2);
   
       //DooooooooooooooooooooooooooooooooooooooooooR
       portal( canvasesW /2 - b.w *2.5, floor - b.h *2.5, 222);
       
       //objects not in use
       obstacle(rock, 0, 0, 0, 0, 1);
       obstacle(rock, 0, 0, 0, 0, 2);
       obstacle(rock, 0, 0, 0, 0, 3);
       obstacle(rock, 0, 0, 0, 0, 4);
       vine(0, 0, 0, 0, 1);
       
       //player
       caracter();
   }
    if (playLevel === 986593659) {
       ctx1.drawImage(lvl_3Back, 0, 0, canvasesW, canvasesH);
        
       //objects not in use
       obstacle(rock, 0, 0, 0, 0, 1);
       obstacle(rock, 0, 0, 0, 0, 2);
       obstacle(rock, 0, 0, 0, 0, 3);
       obstacle(rock, 0, 0, 0, 0, 4);
       vine(0, 0, 0, 0, 1);
        
       //caracter
       caracter();
   }
    if (playLevel === 824982691) {
       ctx1.drawImage(introBack, 0, 0, canvasesW, canvasesH);
   
               //ruin
       ctx1.drawImage(ruin, canvasesW - b.w *2.5, floor - b.h *1.75 - b.h *2.75, b.w *2, b.h *1.5);
       
       //crystal
       crystal(crystal4, h.c4, canvasesW - b.w *2, floor - b.h *4.625);
        
       //objects
       obstacle(rock, b.w * 3, floor - b.h *1.25, b.w *2, b.h *1.25, 1);
       obstacle(rock, b.w *3, 0 - b.h *0.5, b.w *2, b.h *2, 2);
       obstacle(rock, canvasesW - b.w *2.5, floor - b.h *3.625, b.w *2.5, b.h *3.625, 3);
       obstacle(rock, canvasesW - b.w *0.5, 0 - b.h *0.5, b.w *0.75, b.h *5.25, 4);
       vine(b.w *5.375, 0 - b.h *0.25, b.w *0.5, b.h *1.625, 1);
        
        
       //player
       caracter();
        
       //traps
       trap(spikeFloor, b.w *3.5, floor - b.h *1.75, b.w, b.h /2);
       aqua(b.w * 5, floor -b.h * 1.25, b.w *3.25, b.h *1.25);
   }
     if (playLevel === 2793487593) {
       ctx1.drawImage(introBack, 0, 0, canvasesW, canvasesH);
         
       //ruin
       ctx1.drawImage(ruin, b.w /2, floor - b.h *1.5 - b.h *1.75, b.w *2, b.h *1.5);
         
       //crystal
       crystal(crystal1, h.c1, b.w *1.25, floor - b.h *2 - b.h *1.75);
         
       //objects
       obstacle(rock, 0, floor - b.h *2.25, b.w *2.5, b.h *2.25, 1);
       obstacle(rock, 0 - b.w /2, 0 - b.h *0.5, b.w *1, b.h *5, 2);
       obstacle(rock, canvasesW /2 - b.w /2, floor - b.h *2.25, b.w, b.h *2.25, 3);
       obstacle(rock, canvasesW /2 - b.w /2, 0 - b.h *0.625, b.w, b.h *2, 4);
       vine(canvasesW /2 - b.w /2 + b.w *3, 0 - b.h *0.5, b.w /2, b.h *5.25, 1);
         
       //caracter
       caracter();
         
       //traps
       trap(spikeFloor, b.w *2.5, floor - b.h /2, b.w, b.h /2);
       trap(spikeFloor, b.w *3.5, floor - b.h /2, b.w, b.h /2);
       trap(spikeFloor, canvasesW /2 - b.w /2 + b.w, floor - b.h /2, b.w, b.h /2);
       trap(spikeFloor, canvasesW /2 - b.w /2 + b.w *2, floor - b.h /2, b.w, b.h /2);
   }
    if (playLevel === 3859293759) {
       ctx1.drawImage(introBack, 0, 0, canvasesW, canvasesH);
   
       //objects not in use
       obstacle(rock, 0, 0, 0, 0, 1);
       obstacle(rock, 0, 0, 0, 0, 2);
       obstacle(rock, 0, 0, 0, 0, 3);
       obstacle(rock, 0, 0, 0, 0, 4);
       vine(0, 0, 0, 0, 1);
        
       //player
       caracter();
   }
    
    //-----BUILD LEVEL 1-----//
   //----------------------------------------------------------
   if (playLevel === 1) {
       
      prev(525852758123);
       
      //obstacles
      obstacle(rock, canvasesW *1/3, floor - b.h, b.w, b.h, 1);
      obstacle(rock, canvasesW *1/3, floor - b.h *3.5, b.w, b.h, 2);
      obstacle(rock, canvasesW - b.w *3.5, floor - b.h *2, b.w *2, b.h *2, 3);
      obstacle(rock, canvasesW - b.w *2, floor - b.h *4.5, b.w, b.h *4.5, 4);
      vine(canvasesW - b.w *0.75, 0, b.w /2, b.h *5, 1);
      
      //player
      caracter();
      
      //traps
      trap(spikeFloor, canvasesW *1/3 + b.w, floor - b.h /2, b.w *1.5, b.h /2);
      trap(spikeFloor, canvasesW *1/3 + b.w *2.5, floor - b.h /2, b.w, b.h /2);
      
      next(2);
   }
    
    
 //-----BUILD LEVEL 2-----//
//----------------------------------------------------------
   if (playLevel === 2) {
      
      prev(1);
       
      //obstacles
      obstacle(rock, canvasesW *1/4 - b.w /2, floor - b.h *1.5, b.w, b.h *1.5, 1);
      obstacle(rock, canvasesW *1/4 + b.w /2, floor - b.h *3, b.w, b.h *3, 2);
      obstacle(rock, canvasesW *3/4 + b.w, 0 - b.h *2, b.w, b.h *2.5, 3);
      obstacle(rock, canvasesW *3/4 + b.w, floor - b.h *2.5, b.w, b.h *2.5, 4);
      vine(canvasesW *3/4 + b.w *2.25, 0, b.w /2, b.h *5, 1);
       
      //player
      caracter();
      
      //traps
      trap(spikeFloor, canvasesW *1/4 + b.w *1.5, floor - b.h /2, b.w *1.5, b.h /2);
      trap(spikeFloor, canvasesW *1/4 + b.w *3, floor - b.h /2, b.w *1.5, b.h /2);
      trap(spikeFloor, canvasesW *1/4 + b.w *4.5, floor - b.h /2, b.w *1.5, b.h /2);
      
      next(3);
       
   }
    
    
//-----BUILD LEVEL 3-----//
//----------------------------------------------------------
   if (playLevel === 3) {
      
      prev(2);
       
      //obstacles
      obstacle(rock, canvasesW *1/6 - b.w /6, b.h *1/12 + b.h *1.5 - b.h /8, b.w + b.w *1/3, b.h *3/4, 1);
      
      //obstacles
      obstacle(rock, canvasesW *1/6 + b.w *2 + b.w *2/3, b.h *1/12 + b.h *1.5 - b.h /8, b.w, b.h *3/4, 2);
      obstacle(rock, canvasesW *5/8 + b.w /2, floor - b.h, b.w + b.w *3/4, b.h, 3);
      obstacle(rock, canvasesW *5/8 + b.w *2, floor - b.h *3.5, b.w, b.h *3.5, 4);
      vine(canvasesW *5/8 + b.w *3.25, 0, b.w /2, b.h *5, 1);
      
      //DooooooooooooooooooooooooooooooooooooooooooR
      portal(canvasesW *1/6, canvasesH *1/12 - b.h/2, 1);
      
      //player
      caracter();
      
      //traps
      movingTrap(spikeBall, canvasesW *1/6 + b.w + b.w *1/3 + traping.mh1, undefined, canvasesH *2/6 + traping.mv1, canvasesH *2/6, b.w, b.w, canvasesH *1/3, "vertical", canvasesW /200, 1);
      trap(spikeWall, canvasesW *5/8 + b.w *2 - b.w /2, floor - b.h *2 - b.h *1/4, b.w *3/4, b.h *1.5);
      trap(spikeFloor, canvasesW *5/8 + b.w *2, floor - b.h *3.5 - b.h *1/4, b.w, b.h *3/4);
      
      //reminder
      ctx1.fillStyle = "forestGreen";
      ctx1.textAlign = "center";
      ctx1.font = ""+canvasesH /20+"px cursive";
      ctx1.fillText("Remember walk or jump out of the screen to change level", canvasesW *1/2, canvasesH *7/9);
      
      next(4); 
       
   }
    
    
//-----BUILD LEVEL 4-----//
//----------------------------------------------------------
   if (playLevel === 4) {
      
      prev(3); 
       
      //objects
      obstacle(rock, canvasesW *1/6 + caracterW *1/3, floor - caracterH, caracterW, caracterH, 1);
      obstacle(rock, canvasesW *1/6 +  caracterW *1/3 + caracterW *2, floor - caracterH *2.25, caracterW, caracterH *2.25, 2);
      obstacle(rock, canvasesW *1/6 +  caracterW *1/3 + caracterW *6, floor - caracterH *2.25, caracterW, caracterH *2.25, 3);
      vine(canvasesW *1/6 +  caracterW *1/3 + caracterW *7.25, 0, caracterW /2, caracterH *5, 1);
      
      //objects not in use
      obstacle(rock, 0, 0, 0, 0, 4);
      
      //player
      caracter();
      
      //traps
      movingTrap(spikeBall, canvasesW *1/6 + caracterW *1/3 + traping.mh1, undefined, canvasesH *2/6 - caracterH + traping.mv1, canvasesH *2/6 - caracterH, caracterW, caracterW, canvasesH *1/3, "vertical", canvasesW /200, 1);
      movingTrap(spikeBall, canvasesW *1/6 +  caracterW *1/3 + caracterW *6 + traping.mh2, undefined, 0 + traping.mv2, 0, caracterW, caracterW, canvasesH *3/5 - caracterW *1.5, "vertical", canvasesW /200, 2);
      trap(spikeFloor, canvasesW *1/6 +  caracterW *1/3 + caracterW, floor - caracterH /2, caracterW, caracterH /2);
      trap(spikeWall, canvasesW *1/6 +  caracterW *1/3 + caracterW *1.5, floor - caracterH *2, caracterW *3/5, caracterH *1.5);
      trap(spikeFloor, canvasesW *1/6 +  caracterW *1/3 + caracterW *3, floor - caracterH /2, caracterW, caracterH /2);
      trap(spikeFloor, canvasesW *1/6 +  caracterW *1/3 + caracterW *4, floor - caracterH /2, caracterW, caracterH /2);
      trap(spikeFloor, canvasesW *1/6 +  caracterW *1/3 + caracterW *5, floor - caracterH /2, caracterW, caracterH /2);
       
      next(5);
       
   }if (playLevel === 5) {
       
      prev(4);
       
      //objects
      obstacle(rock, canvasesW *2/6, floor - caracterH, caracterW, caracterH, 1);
      obstacle(rock, canvasesW *2/6 + caracterW *2, floor - caracterH *2.5, caracterW, caracterH, 2);
      obstacle(rock, canvasesW *2/6 + caracterW *4, floor - caracterH *3.5, caracterW, caracterH *3.5, 3);
      vine(canvasesW *2/6 + caracterW *5.5, 0, caracterW /2, caracterH *5, 1);
       
      //objects not in use
      obstacle(rock, 0, 0, 0, 0, 4);
       
      //player
      caracter();
       
      //traps
      movingTrap(spikeBall, canvasesW *2/6 + traping.mh1, undefined, canvasesH *2/6 - caracterH + traping.mv1, canvasesH *2/6 - caracterH, caracterW, caracterW, canvasesH *1/3, "vertical", canvasesW /237.5, 1);
      movingTrap(spikeBall, canvasesW *2/6 + caracterW *2 + traping.mh2, canvasesW *2/6 + caracterW *2.5, floor - caracterH *4 + traping.mv2, undefined, caracterW, caracterW, canvasesW *1/3, "horizontal", canvasesW /200, 2);
      trap(spikeFloor, canvasesW *2/6 + caracterW, floor - caracterH /2, caracterW, caracterH /2);
      trap(spikeFloor, canvasesW *2/6 + caracterW *2, floor - caracterH /2, caracterW, caracterH /2);
      trap(spikeFloor, canvasesW *2/6 + caracterW *3, floor - caracterH /2, caracterW, caracterH /2);
        
      next(6);
       
      }if (playLevel === 6) {
          
      prev(5);
          
      //objects
      obstacle(rock, canvasesW *1/6 - caracterW /6 - caracterW, canvasesH *1/12 + caracterH *1.5 - caracterH /8, caracterW + caracterW *1/3, caracterH *3/4, 1);
      
      //behind rock trap
      movingTrap(spikeBall, canvasesW /2 + caracterW *2.5 + traping.mh2, undefined, canvasesH *2/6 - caracterH + traping.mv2, canvasesH *2/6 - caracterH, caracterW, caracterW, canvasesH *1/3 + caracterH, "vertical", canvasesW /125, 2);
          
      //objects
      obstacle(rock, canvasesW /2 - caracterW *2.5, floor - caracterH, caracterW, caracterH, 2);
      obstacle(rock, canvasesW /2 - caracterW *1.5, floor - caracterH *1.5, caracterW, caracterH *1.5, 3);
      vine(canvasesW /2 - caracterW *0.5 + caracterW /4, 0, caracterW /2, caracterH *5, 1);
      obstacle(rock, canvasesW /2 + caracterW *2.125, 0 - caracterH *4, caracterW *1.75, caracterH *6, 4);
          
      //door
      portal(canvasesW *1/6 - caracterW, canvasesH *1/12, 2);
          
      //player
      caracter();
          
      //traps
      movingTrap(spikeBall, canvasesW /2 - caracterW *1.5 + traping.mh1, undefined, canvasesH *2/6 - caracterH *2 + traping.mv1, canvasesH *2/6 - caracterH *2, caracterW, caracterW, canvasesH *1/3, "vertical", canvasesW /150, 1);
      trap(spikeFloor, canvasesW /2 - caracterW *1.5, floor - caracterH *2, caracterW, caracterH /2);
      trap(spikeFloor, canvasesW /2 + caracterW *2.25, floor - caracterH /2, caracterW *1.5, caracterH /2);
      
      next(7);
          
      }if (playLevel === 7) {
          
       prev(6);
          
       //building
       obstacle(villageDoor, canvasesW - caracterW *3, 0, caracterW *3, caracterH *5, 1);
         
       //Tom!!!!!!!!!!!!!!!!!
       if(c.x >= canvasesW *0.16 && c.x <= canvasesW *0.6){
           instructionTimer += 1;
           ctx1.drawImage(box, canvasesW - caracterW *5.5 - caracterW *1.5, floor - caracterH *1.75 - caracterH *0.75, caracterW *1.5, caracterH *0.75);
           
           ctx1.fillStyle = "black";
           ctx1.textAlign = "center";
           ctx1.font = ""+canvasesH /20+"px cursive";
           
           if (instructionTimer < 125) {
               ctx1.fillText("Stop", canvasesW - caracterW *5.5 - caracterW *0.75, floor - caracterH *1.75 - caracterH *0.3);
           }
           
       }
          
       ctx1.drawImage(tom, canvasesW - caracterW *6, floor - caracterH *2.5, caracterW *2.5, caracterH *2.5);
          
       //carcter
       caracter(); 
          
       //objects not in use
       obstacle(rock, 0, 0, 0, 0, 2);
       obstacle(rock, 0, 0, 0, 0, 3);
       obstacle(rock, 0, 0, 0, 0, 4);
       vine(0, 0, 0, 0, 1);
          
       next(8);
   }
    
    //-----hearts and damage-----//
    live();
    
}
requestAnimationFrame(game);
