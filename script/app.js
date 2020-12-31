//start game stuff
var playIntro = 0;

var startButton = document.getElementById("startButton");
startButton.onclick = function () {playIntro = 1;}

//intro code stuff
var intro = document.getElementById("intro");
var introCtx = canvas1.getContext("2d");
var introW = canvas1.width;
var introH = canvas1.height;


var introBackground = document.getElementById("forest");
function gameIntro () {
  requestAnimationFrame(gameIntro);
  if (playIntro === 1) {
    
ctx1.drawImage(introBackground, 0, 0, introW, introH);
    
  }
}

requestAnimationFrame(gameIntro);
