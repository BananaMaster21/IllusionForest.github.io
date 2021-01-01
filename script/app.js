//start game stuff
var playIntro = 0;

var startButton = document.getElementById("startButton");
startButton.onclick = function () {playIntro = 1;}

//canvas things
var intro = document.getElementById("intro");
intro.setAttribute("width", screen.width + "px");
intro.setAttribute("height", screen.height + "px");
var introCtx = intro.getContext("2d");
var introW = intro.width;
var introH = intro.height;

//ground
var ground = introH /1.25;

//caracter stuff 1
//moving 1
function caracterMove (event) {
side = event.key;
}
function caracterStop () {
caracterMoveSide = 0;
side = undefined;
}
//get caracter images
var bobRight1 = document.getElementById("bobRight1");
var bobRight2 = document.getElementById("bobRight2");
var bobLeft1 = document.getElementById("bobLeft1");
var bobLeft2 = document.getElementById("bobLeft2");

var caracterImage = bobRight1;
//walking stuff
var feetSwitch = 0;
var speed = 0;
//caracter start coords
var caracterX = 400;
var caracterY = ground - caracterH;
//caracter size 
var caracterW = introW /10;
var caracterH = introH /7;
//caracter sides
var caracterMoveSide = 0;
var caracterKeepSide = "right";
var side = undefined;
//jumping variables
var jump = false;
var fall = false;
var onGround = 1;
var upTimer = introH /40;
var fallTimer = 0;
// lives
var heart = document.getElementById("heart");
var lives = 2;
var heart1X = introW /25;
var heart2X = introW /12.5;
var heartsY = introH /20;
var heartsW = introW /50;
var heartsH = introH /25;

var introBackground = document.getElementById("forest");
function gameIntro () {
  requestAnimationFrame(gameIntro);
  if (playIntro === 1) {
    //background stuff
introCtx.drawImage(introBackground, 0, 0, introW, introH);
    
    //caracter stuff 2
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
    if (caracterMoveSide === 1) {
        caracterX = caracterX - speed;
      //add speed
        if (speed <= introW /100) {
        speed = speed + introW /1000;
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
    if (caracterMoveSide === 2) {
        caracterX = caracterX + speed;
      //add speed
        if (speed <= introW /100) {
        speed = speed + introW /1000;
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
        upTimer = upTimer - introH /800;
        caracterY = caracterY - upTimer;
       }
    //falling
    if (caracterY < ground && onGround === 0 && upTimer === 0) {
      if ( fallTimer <= introH /80) {
        fallTimer = fallTimer + introH /800;
            }
        caracterY = caracterY + fallTimer;
        }
    //landing
    if (caracterY >= ground - caracterH) {
        onGround = 1;
        upTimer = introH /40;
        fallTimer = 0;
        jump = 0;
        }
        
    //player
    introCtx.drawImage(caracterImage, caracterX, caracterY - caracterH, caracterW, caracterH);
    
    //hearts and damage
    if (lives === 2) {introCtx.drawImage(heart, heart1X, heartsY, heartsW, heartsH);introCtx.drawImage(heart, heart2X, heartsY, heartsW, heartsH);}
    if (lives === 1) {introCtx.drawImage(heart, heart1X, heartsY, heartsW, heartsH);}
    if (lives === 0) {}
        
  }
}

requestAnimationFrame(gameIntro);
