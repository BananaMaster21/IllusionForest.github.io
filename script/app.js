//start game stuff
var playIntro = 0;

var startButton = document.getElementById("startButton");
startButton.onclick = function () {playIntro = 1;}

//intro code stuff
var intro = document.getElementById("intro");
var ctxIntro = intro.getContext("2d");
var introWidth = intro.width;
var introHeight = intro.height;


var introBackground = document.getElementById("forest");
function gameIntro () {
  requestAnimationFrame(gameIntro);
  if (playIntro === 1) {
ctxIntro.drawImage(introBackground, 0, 0, introWidth, introHeight);
  }
}
requestAnimationFrame(gameIntro);
