//start game stuff
var playIntro = 0;

var startButton = document.getElementById("startButton");
startButton.onclick = function () {playIntro = 1;}

//intro code stuff
var intro = document.getElementById("myCanvas");
var ctxIntro = supercoolcanvas.getContext("2d");
var introWidth = intro.width;
var introHeight = intro.height;


var introBackground = document.getElementById("forest");
function playIntro () {
  requestAnimationFrame(playIntro);
  if (playIntro === 1) {
ctxIntro.drawImage(introBackground, 0, 0, introWidth, introHeight);
  }
}
requestAnimationFrame(playIntro);
