//start game stuff
var playIntro = 0;

var startButton = document.getElementById("startButton");
startButton.onclick = function () {playIntro = 1;}

//caracter stuff 1
var caracterX = 400;
var caracterMoveSide = 0;
var side = undefined;

function caracterMove (event) {
side = event.key;
}
function caracterStop () {
caracterMoveSide = 0;
side = undefined;
}

//intro code stuff
var intro = document.getElementById("intro");
var introCtx = intro.getContext("2d");
var introW = intro.width;
var introH = intro.height;


var introBackground = document.getElementById("forest");
function gameIntro () {
  requestAnimationFrame(gameIntro);
  if (playIntro === 1) {
    //background stuff
introCtx.drawImage(introBackground, 0, 0, introW, introH + introH * 0.33);
    
    //caracter stuff 2
    if (side === "ArrowLeft") {
        caracterMoveSide = 1;
        }
    if (side === "ArrowRight") {
        caracterMoveSide = 2;
        }
    if (caracterMoveSide === 1) {
        caracterX = caracterX - 5;
        }
    if (caracterMoveSide === 2) {
        caracterX = caracterX + 5;
        }
    if (caracterMoveSide === 0) {
        caracterX = caracterX - 0
        }
    introCtx.fillStyle = rgb(255, 255, 255);
    introCtx.fillRect(caracterX, introH * 0.50, 100, 100);
    
  }
}

requestAnimationFrame(gameIntro);
