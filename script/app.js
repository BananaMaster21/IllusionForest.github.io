//start game stuff
var playIntro = 0;

var startButton = document.getElementById("startButton");
startButton.onclick = function () {playIntro = 1;}

//caracter stuff 1
var caracterX = 400;
var caracterMoveSide = 0;
var side = undefined;
var jump = false;
var fall = false;
var onGround = 1;
var upTimer = 20;
var fallTimer = 0;

function caracterMove (event) {
side = event.key;
}
function caracterStop () {
caracterMoveSide = 0;
side = undefined;
}

//intro code stuff
var intro = document.getElementById("intro");
intro.setAttribute("width", screen.width + "px");
intro.setAttribute("height", screen.height + "px");
var introCtx = intro.getContext("2d");

var introW = intro.width;
var introH = intro.height;
var caracterY = introH /2;
var ground = introH /2;

var introBackground = document.getElementById("forest");
function gameIntro () {
  requestAnimationFrame(gameIntro);
  if (playIntro === 1) {
    //background stuff
introCtx.drawImage(introBackground, 0, 0, introW, introH);
    
    
    //cool dev squares
    introCtx.fillStyle = "rgb(255, 255, 255)";
    introCtx.fillRect(500, 100, 100, 100);
    
    //caracter stuff 2
    if (side === "ArrowLeft") {
        caracterMoveSide = 1;
        }
    if (side === "ArrowRight") {
        caracterMoveSide = 2;
        }
    if (side === " " && onGround === 1) {
        jump = 1;
        }
    if (caracterMoveSide === 1) {
        caracterX = caracterX - 10;
        }
    if (caracterMoveSide === 2) {
        caracterX = caracterX + 10;
        }
    if (caracterMoveSide === 0) {
        caracterX = caracterX - 0;
        }
    
    
    //cool dev squares
    introCtx.fillStyle = "rgb(255, 255, 255)";
    introCtx.fillRect(300, 100, 100, 100);
    
    //jumping and falling stuff
    if (jump === 1) {
        onGround = 0;
        upTimer = upTimer - 1;
        caracterY = caracterY - upTimer;
       }
    if (caracterY < ground && onGround === 0 && upTimer === 0) {
      if ( fallTimer <= 10) {
        fallTimer = fallTimer + 1;
            }
        caracterY = caracterY + fallTimer;
        }
    if (caracterY >= ground - 100) {
        onGround = 1;
        upTimer = 20;
        fallTimer = 0;
        jump = 0;
        }
        
    //player
    introCtx.fillStyle = "rgb(255, 255, 255)";
    introCtx.fillRect(caracterX, caracterY - 100, 100, 100);
    
    //cool dev squares
    introCtx.fillStyle = "rgb(255, 255, 255)";
    introCtx.fillRect(100, 100, 100, 100);
    
  }
}

requestAnimationFrame(gameIntro);
