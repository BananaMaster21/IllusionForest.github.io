//end of position testing variables for random stuff
if(document.location.href==="https://bananamaster21.github.io/IllusionForest.github.io/#play"){document.location.href = "https://bananamaster21.github.io/IllusionForest.github.io/";}
var playLevel = 99;  
var startButton = document.getElementById("startButton"); 
var moleGo = 0;
startButton.onclick = function () {playLevel = 0;
if(document.cookie === ""){document.cookie = "thief=0";}
if(document.cookie === "thief=1"){playLevel=348959898753935269635;caracterX=caracterW*1.25;caracterY=floor-caracterH*2.5;moleGo=1;}} 
var mycanvas = document.getElementById("play"); 
mycanvas.setAttribute("width", window.outerWidth + "px"); 
mycanvas.setAttribute("height", window.outerHeight + "px"); 
var canvasesW = window.innerWidth; var canvasesH = window.innerHeight; 
var ctx1 = mycanvas.getContext("2d"); 
var ground = canvasesH /1.25; 
var onGround = 1; 
var incredits = 0;
var moleX = canvasesW - caracterW*4;


//---------------------------------------------------------- 
//BACKGROUND IMAGE STUFF 
//---------------------------------------------------------- 
var introBack = document.getElementById("introback"); 
var lvl_1Back = document.getElementById("lvl1back"); 
var lvl_2Back = document.getElementById("lvl2back"); 
var lvl_3Back = document.getElementById("lvl3back"); 
var lvl_5Back = document.getElementById("lvl5back"); 
var lvl_9Back = document.getElementById("lvl9back");
var caveBack1 = document.getElementById("caveBack1");


//---------------------------------------------------------- 
//CARACTER STUFF 
//---------------------------------------------------------- 
var isStatue = 0;
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
var caracterW = canvasesW /10; 
var caracterH = canvasesH /7; 
var caracterX = canvasesW /25; 
var caracterY = ground - caracterH; 


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
var settings = document.getElementById("settings");
var checkpoint = document.getElementById("checkpoint");
var heart = document.getElementById("heart"); 
var resetButton = document.getElementById("reviveButton"); 
var house = document.getElementById("house"); 
var rock = document.getElementById("rock"); 
var vineImg = document.getElementById("vine"); 
var bed = document.getElementById("bed");
var statue = document.getElementById("statue");
var chief = document.getElementById("chief");
var spikeFloor = document.getElementById("spikeFloor"); 
var spikeWall = document.getElementById("spikeWall"); 
var spikeBall = document.getElementById("spikeBall"); 
var town = document.getElementById("town");
var door = document.getElementById("door"); 
var pit = document.getElementById("pit");
var nest = document.getElementById("nest");
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
var mushroom1 = document.getElementById("mushroom1");
var egg = document.getElementById("egg");
var chicken = document.getElementById("chicken");
var jelly = document.getElementById("jelly");
var jigle = document.getElementById("jigle");
var shape = document.getElementById("shape");
var shape2 = document.getElementById("shape2");
var mole = document.getElementById("mole");
var bird = document.getElementById("bird");
var box2 = document.getElementById("box2");

//---------------------------------------------------------- 
//SETTINGS STUFF 
//---------------------------------------------------------- 
var setBack = document.getElementById("setBack");
var inSettings = 0;
var setBTN = {x:canvasesW-caracterW/3-caracterW/2,y:0 + canvasesH/28,w:caracterW/2,h:caracterW/2,};
var setGoBack = {x:caracterW/2-caracterW/3,y:canvasesH/2-caracterH,w:caracterW*2.5,h:caracterH,};
var setAudio = {x:caracterW*4-caracterW/3,y:canvasesH/2-caracterH,w:caracterW*2.5,h:caracterH,want:1,};
var setDifficulty = {x:caracterW*7.5-caracterW/3,y:canvasesH/2-caracterH,w:caracterW*2.75,h:caracterH,diff:0,};

function set (event) {
    var x = event.clientX;
    var y = event.clientY;
    if(x > setBTN.x && x < setBTN.x + setBTN.w && y > setBTN.y && y < setBTN.y + setBTN.h && inSettings === 0){pause=1;inSettings=1;}
    if(x > setGoBack.x && x < setGoBack.x + setGoBack.w && y > setGoBack.y && y < setGoBack.y + setGoBack.h && inSettings === 1){pause=0;inSettings=0;}
    if(x > setAudio.x && x < setAudio.x + setAudio.w && y > setAudio.y && y < setAudio.y + setAudio.h && inSettings === 1){if(setAudio.want === 1){setAudio.want = 0;}else if(setAudio.want === 0){setAudio.want = 1;}}
    if(x > setDifficulty.x && x < setDifficulty.x + setDifficulty.w && y > setDifficulty.y && y < setDifficulty.y + setDifficulty.h && inSettings === 1){if(setDifficulty.diff === 0){setDifficulty.diff = 1;}else if(setDifficulty.diff === 1){setDifficulty.diff = 0;}lives = 0;}
}
function settingsStuff () {
    ctx1.drawImage(settings, setBTN.x, setBTN.y, setBTN.w, setBTN.h);
    
    if(inSettings === 1){
        ctx1.fillStyle = "black"; ctx1.textAlign = "center"; ctx1.font = ""+canvasesH /20+"px cursive";
        
        ctx1.drawImage(setBack, 0, 0, canvasesW, canvasesH);
        
        ctx1.drawImage(rock, setGoBack.x, setGoBack.y, setGoBack.w, setGoBack.h);
        ctx1.fillText("Back to game", setGoBack.x + setGoBack.w/2, setGoBack.y + setGoBack.h/1.5);
        
        ctx1.drawImage(rock, setAudio.x, setAudio.y, setAudio.w, setAudio.h);
        if (setAudio.want === 1){ctx1.fillText("Turn off music", setAudio.x + setAudio.w/2, setAudio.y + setAudio.h/1.5);}else if (setAudio.want === 0){ctx1.fillText("Turn on music", setAudio.x + setAudio.w/2, setAudio.y + setAudio.h/1.5);}
        
        ctx1.drawImage(rock, setDifficulty.x, setDifficulty.y, setDifficulty.w, setDifficulty.h);
        if (setDifficulty.diff === 0){ctx1.fillText("Play hard mode", setDifficulty.x + setDifficulty.w/2, setDifficulty.y + setDifficulty.h/1.5);}else if (setDifficulty.diff === 1){ctx1.fillText("Play normal mode", setDifficulty.x + setDifficulty.w/2, setDifficulty.y + setDifficulty.h/1.5);}
    }
}

//---------------------------------------------------------- 
//RANDOM MOVEMENT VARIABLES LAYING AROUND
//----------------------------------------------------------
var hitingLeft = 0; 
var leftStop = 0; 
var hitingRight = 0; 
var rightStop = 0; 
var fallStop = 0; 
var sliping = 0; 


//---------------------------------------------------------- 
//CREDIT STUFF
//---------------------------------------------------------- 
var CF = 0;
var ree = 0;
function credits (ending) {
    ctx1.fillStyle = "rgba(0,0,0,0.80)"
    ctx1.fillRect(0,0,canvasesW,canvasesH);
    if (ending === ending){
        if(ree===0){CF+=1;}
        incredits = 1;
        //block 1
        if(ending==="mole"){
        ctx1.drawImage(statue, canvasesW*0.33-caracterW, canvasesH/2 - caracterH*0.75 - CF, caracterW, caracterH);
        ctx1.fillStyle="gold";ctx1.textAlign="center";ctx1.font=canvasesH/15+"px cursive";ctx1.fillText("Thief Ending",canvasesW/2,canvasesH/2-CF);
        ctx1.drawImage(crystal3, canvasesW*0.66, canvasesH/2 - caracterH*0.75 - CF, caracterW*0.75, caracterH);
        }
        if(ending==="village"){
        ctx1.drawImage(bobLeft1, canvasesW*0.33-caracterW, canvasesH/2 - caracterH*0.75 - CF, caracterW, caracterH);
        ctx1.fillStyle="forestgreen";ctx1.textAlign="center";ctx1.font=canvasesH/15+"px cursive";ctx1.fillText("Village Ending",canvasesW/2,canvasesH/2-CF);
        ctx1.drawImage(bobRight1, canvasesW*0.66, canvasesH/2 - caracterH*0.75 - CF, caracterW, caracterH);
        }
        //block2
        ctx1.fillStyle="white";ctx1.textAlign="center";ctx1.font=canvasesH/15+"px cursive";ctx1.fillText("Developers",canvasesW/2,canvasesH*0.75-CF);
        ctx1.fillStyle="white";ctx1.textAlign="center";ctx1.font=canvasesH/20+"px cursive";ctx1.fillText("Lead Dev:  Alex",canvasesW/2,caracterH/2+canvasesH*0.75-CF);
        ctx1.fillStyle="white";ctx1.textAlign="center";ctx1.font=canvasesH/20+"px cursive";ctx1.fillText("Assistant Dev:  Mentally Insane Alex",canvasesW/2,caracterH+canvasesH*0.75-CF);
        ctx1.fillStyle="white";ctx1.textAlign="center";ctx1.font=canvasesH/20+"px cursive";ctx1.fillText("Another Dev:  Calm Alex",canvasesW/2,caracterH*1.5+canvasesH*0.75-CF);
        ctx1.fillStyle="white";ctx1.textAlign="center";ctx1.font=canvasesH/20+"px cursive";ctx1.fillText("The 4th Dev:  Happy Alex",canvasesW/2,caracterH*2+canvasesH*0.75-CF);
        ctx1.fillStyle="white";ctx1.textAlign="center";ctx1.font=canvasesH/20+"px cursive";ctx1.fillText("Dead Dev:  Programing Physics Alex",canvasesW/2,caracterH*2.5+canvasesH*0.75-CF);
        //block 3
        ctx1.fillStyle="white";ctx1.textAlign="center";ctx1.font=canvasesH/15+"px cursive";ctx1.fillText("Musicians",canvasesW/2,canvasesH*1.5-CF);
        ctx1.fillStyle="white";ctx1.textAlign="center";ctx1.font=canvasesH/20+"px cursive";ctx1.fillText("Tool:  Chrome Music Labs",canvasesW/2,caracterH/2+canvasesH*1.5-CF);
        ctx1.fillStyle="white";ctx1.textAlign="center";ctx1.font=canvasesH/20+"px cursive";ctx1.fillText("Lead Musician:  Alex",canvasesW/2,caracterH+canvasesH*1.5-CF);
        ctx1.fillStyle="white";ctx1.textAlign="center";ctx1.font=canvasesH/20+"px cursive";ctx1.fillText("Assistant Musician:  Also Alex",canvasesW/2,caracterH*1.5+canvasesH*1.5-CF);
        //block 4
        ctx1.fillStyle="white";ctx1.textAlign="center";ctx1.font=canvasesH/15+"px cursive";ctx1.fillText("Artists",canvasesW/2,canvasesH*2-CF);
        ctx1.fillStyle="white";ctx1.textAlign="center";ctx1.font=canvasesH/20+"px cursive";ctx1.fillText("Tool:  Chrome Canvas",canvasesW/2,caracterH/2+canvasesH*2-CF);
        ctx1.fillStyle="white";ctx1.textAlign="center";ctx1.font=canvasesH/20+"px cursive";ctx1.fillText("Lead Art Designer:  Alex",canvasesW/2,caracterH+canvasesH*2-CF);
        ctx1.fillStyle="white";ctx1.textAlign="center";ctx1.font=canvasesH/20+"px cursive";ctx1.fillText("Assistant Art Designer:  Alex",canvasesW/2,caracterH*1.5+canvasesH*2-CF);
        ctx1.fillStyle="white";ctx1.textAlign="center";ctx1.font=canvasesH/20+"px cursive";ctx1.fillText("Art Design Creator: Alex's Imagination",canvasesW/2,caracterH*2+canvasesH*2-CF);
        //block 5
        ctx1.fillStyle="white";ctx1.textAlign="center";ctx1.font=canvasesH/15+"px cursive";ctx1.fillText("Game Testers",canvasesW/2,canvasesH*2.5-CF);
        ctx1.fillStyle="white";ctx1.textAlign="center";ctx1.font=canvasesH/20+"px cursive";ctx1.fillText("Alex",canvasesW/2,caracterH/2+canvasesH*2.5-CF);
        ctx1.fillStyle="white";ctx1.textAlign="center";ctx1.font=canvasesH/20+"px cursive";ctx1.fillText("Milo",canvasesW/2,caracterH+canvasesH*2.5-CF);
        ctx1.fillStyle="white";ctx1.textAlign="center";ctx1.font=canvasesH/20+"px cursive";ctx1.fillText("Denny",canvasesW/2,caracterH*1.5+canvasesH*2.5-CF);
        ctx1.fillStyle="white";ctx1.textAlign="center";ctx1.font=canvasesH/20+"px cursive";ctx1.fillText("Dassa",canvasesW/2,caracterH*2+canvasesH*2.5-CF);
        ctx1.fillStyle="white";ctx1.textAlign="center";ctx1.font=canvasesH/20+"px cursive";ctx1.fillText("Yassin",canvasesW/2,caracterH*2.5+canvasesH*2.5-CF);
        ctx1.fillStyle="white";ctx1.textAlign="center";ctx1.font=canvasesH/20+"px cursive";ctx1.fillText("Emerson",canvasesW/2,caracterH*3+canvasesH*2.5-CF);
        ctx1.fillStyle="white";ctx1.textAlign="center";ctx1.font=canvasesH/20+"px cursive";ctx1.fillText("Prob a few others too but",canvasesW/2,caracterH*3.625+canvasesH*2.5-CF);
        ctx1.fillStyle="white";ctx1.textAlign="center";ctx1.font=canvasesH/20+"px cursive";ctx1.fillText("You guys have been forgoten",canvasesW/2,caracterH*4.125+canvasesH*2.5-CF);
        //final block
        ctx1.fillStyle="white";ctx1.textAlign="center";ctx1.font=canvasesH/4+"px cursive";ctx1.fillText("E",canvasesW/2,canvasesH*3.5-CF);
        //reset the game
        if(CF >= canvasesH*3.5 + caracterH/2){ree=1;document.cookie="thief=0";incredits=0;reset();}
    }
}

//---------------------------------------------------------- 
//Control STUFF 
//---------------------------------------------------------- 
function caracterMove (event) {side = event.key;otherSide = event.key;} 
function caracterStop (event) {var offKey = event.key;if (offKey === "ArrowLeft" || offKey === "ArrowRight") {isEbeingPressed = 0;caracterMoveSide = 0;side = undefined;}if (offKey === " ") {otherSide = 0}} 
function controls () {if (side === "ArrowLeft"){caracterMoveSide = 1;caracterKeepSide = "left";}if (side === "ArrowRight") {caracterMoveSide = 2;caracterKeepSide = "right";}if (otherSide === " " && onGround === 1) {jump = 1;}} 


//---------------------------------------------------------- 
//WALKING STUFF 
//---------------------------------------------------------- 
var feetSwitch = 0; 
var speed = 0; 
function walking () { if(caracterMoveSide===1&&hitingLeft===0){caracterX=caracterX-speed;if(speed<=canvasesW/100 && hasCrystal1 === 0){speed=speed+canvasesW/1000;}else if (speed<=canvasesW/85 && hasCrystal1 === 1){speed=speed+canvasesW/850;}if(jump===0 && isStatue === 0){feetSwitch=feetSwitch+1;if(feetSwitch<=4){caracterImage=bobLeft1;}if(feetSwitch>=5){caracterImage=bobLeft2;}if(feetSwitch>=9){feetSwitch=0;}}if(jump===1 && isStatue === 0){caracterImage=bobLeft2;}} if(caracterMoveSide===2&&hitingRight===0){caracterX=caracterX+speed;if(speed<=canvasesW/100 && hasCrystal1 === 0){speed=speed+canvasesW/1000;}else if(speed<=canvasesW/85 && hasCrystal1 === 1){speed=speed+canvasesW/850;}if(jump===0 && isStatue === 0){feetSwitch=feetSwitch+1;if(feetSwitch<=4){caracterImage=bobRight1;}if(feetSwitch>=5){caracterImage=bobRight2;}if(feetSwitch>=9){feetSwitch=0;}}if(jump===1 && isStatue === 0){caracterImage=bobRight2;}} if(caracterMoveSide===0){caracterX = caracterX - 0;if (caracterKeepSide === "left") {caracterImage = bobLeft1;}if (caracterKeepSide === "right") { caracterImage = bobRight1;}} } 


//----------------------------------------------------------
//JUMPING AND FALLING STUFF 
//---------------------------------------------------------- 
var jump = false; 
var fall = false; 
var upTimer = canvasesH /40; 
var fallTimer = 0; 
function jumpFallLand () { if(jump===1){onGround=0;upTimer=upTimer-canvasesH/800;caracterY=caracterY-upTimer;} if(caracterY<ground&&onGround===0&&upTimer===0||sliping===1){onGround=0;if(fallTimer<=canvasesH/80){fallTimer=fallTimer+canvasesH/800;}caracterY=caracterY+fallTimer;} if(caracterY>=ground - caracterH||fallStop===1){onGround=1;upTimer=canvasesH/40;fallTimer=0;jump=0;} } 


//obstacles 
var ob = { fall_1: 0, left_1: 0, right_1: 0, fall_2: 0, left_2: 0, right_2: 0, fall_3: 0, left_3: 0, right_3: 0, fall_4: 0, left_4: 0, right_4: 0, v1: 0, } 
var floor = ground - caracterH; 

//sliping off obstacles 
function slip(){if(ob.fall_1+ob.fall_2+ob.fall_3+ob.fall_4+ob.v1===5&&caracterY<ground-caracterH&&jump===0){fallStop=0;sliping=1;}else{sliping=0;}} 
function wallRight(){if(ob.right_1+ob.right_2+ob.right_3+ob.right_4===4){hitingRight=0;}else{ob.right_1=0;ob.right_2=0;ob.right_3=0;ob.right_4=0;}} 
function wallLeft(){if(ob.left_1+ob.left_2+ob.left_3+ob.left_4===4){hitingLeft=0;}else{ob.left_1=0;ob.left_2=0;ob.left_3=0;ob.left_4=0;}} 

function obstacle (image, x, y, width, height, number) { ctx1.drawImage(image, x, y, width, height); 
//colision right 
if (x <= caracterX + cW && caracterX + cW < x + width /2 && caracterY - cH /2 > y && caracterY - cH /2 < y + height) {hitingRight = 1;}else { if (number === 1) {ob.right_1 = 1;}else if (number === 2) {ob.right_2 = 1;}else if (number === 3) {ob.right_3 = 1;}else if (number === 4) {ob.right_4 = 1;}} 
//colision left 
if (x + width >= caracterX && caracterX > x + width /2 && caracterY - cH /2 > y && caracterY - cH /2 < y + height) {hitingLeft = 1;}else { if (number === 1) {ob.left_1 = 1;}else if (number === 2) {ob.left_2 = 1;}else if (number === 3) {ob.left_3 = 1;}else if (number === 4) {ob.left_4 = 1;}} 
//colision top 
if (y <= caracterY && caracterY < y + height /2 && caracterX + cW *1/3 > x && caracterX + cW *1/3 < x + width || y <= caracterY && caracterY < y + height /2 && caracterX + cW *2/3 < x + width && caracterX + cW *2/3 > x) {fallStop = 1; if (number === 1) {ob.fall_1 = 0;}else if (number === 2) {ob.fall_2 = 0;}else if (number === 3) {ob.fall_3 = 0;}else if (number === 4) {ob.fall_4 = 0;}}else { if (number === 1) {ob.fall_1 = 1;}else if (number === 2) {ob.fall_2 = 1;}else if (number === 3) {ob.fall_3 = 1;}else if (number === 4) {ob.fall_4 = 1;}} 
} 


//---------------------------------------------------------- 
//VINE STUFF
//---------------------------------------------------------- 
function vine (x, y, width, height, number) { ctx1.drawImage(vineImg, x, y, width, height); if (caracterX + cW /2 > x && caracterX + cW /2 < x + width && caracterY - cH /3 >= y && caracterY - cH /3 <= y + height ) {fallStop = 1; if (number === 1) {ob.v1 = 0;}}else {if (number === 1) {ob.v1 = 1;}} } 
//---------------------------------------------------------- 
//NEEDED FOR ALL TRAP STUFF 
//---------------------------------------------------------- 
var damageActivated = 0; 
var damageReset = 0; 
var inTrap = 0; 
//-----timer for damage-----// 
function damageTimer () { if (damageActivated === 1 ) {damageReset += 1;if (damageReset === 75) {damageActivated = 0;}} } 


//---------------------------------------------------------- 
//STATIC TRAP STUFF 
//---------------------------------------------------------- 
//-----build static trap-----// 
function trap (image, x, y, width, height) { ctx1.drawImage(image, x, y, width, height); if (caracterX + cW /2 > x && caracterX + cW /2 < x + width && caracterY - cH /3 >= y && caracterY - cH /3 <= y + height ) {if (damageActivated === 0 && inSettings === 0){if(lives === 3){lives = 2; damageReset = 0; damageActivated = 1;}else if(lives === 2){lives = 1; damageReset = 0; damageActivated = 1;}else if (lives === 1){lives = 0;}}} } 

//-----build water trap-----// 
function aqua (x, y, width, height) { ctx1.drawImage(water, x, y, width, height);if (caracterX > x && caracterX + cW < x + width && caracterY - cH > y && inSettings === 0) {lives = 0;} } 

//-----build poison trap-----// 
var effect = undefined;
var countdown = 540;
var activated = false;
function deactivatejelly(){effect=undefined;activated=false;countdown=540;}
function mushroom (image, x, y, width, height, thing) {ctx1.drawImage(image,x,y,width,height);if (caracterX + cW /2 > x && caracterX + cW /2 < x + width && caracterY - cH /3 >= y && caracterY - cH /3 <= y + height ) {if(thing==="jelly"){effect="jelly";activated=true;}}}
function poisonEffects () {if(effect === "jelly"){ctx1.drawImage(jigle,0,0,canvasesW,canvasesH);}}

//---------------------------------------------------------- 
//MOVING TRAP STUFF 
//---------------------------------------------------------- 
var traping = { mh1: 0,mv1: 0,d1: undefined,mh2: 0, mv2: 0, d2: undefined, } 
//-----build moving trap-----// 
function movingTrap (image, x, oldX, y, oldY, width, height, distance, axis, speed, number) { ctx1.drawImage(image, x, y, width, height); if (number === 1) { if (axis === "horizontal" &&  traping.d1 === undefined) {traping.d1 = "right";} if (axis === "vertical" && traping.d1 === undefined) {traping.d1 = "down";} if (axis === "horizontal" && traping.d1 === "right") {if (x <= oldX + distance /2) {traping.mh1 += speed}else if (x > oldX + distance /2) {traping.d1 = "left";}} if (axis === "horizontal" && traping.d1 === "left") {if (x >= oldX - distance /2) {traping.mh1 -= speed}else if (x < oldX - distance /2) {traping.d1 = "right";}} if (axis === "vertical" && traping.d1 === "down") {if (y <= oldY + distance /2) {traping.mv1 += speed}else if (y > oldY + distance /2) {traping.d1 = "up";}} if (axis === "vertical" && traping.d1 === "up") {if (y >= oldY - distance /2) {traping.mv1 -= speed}else if (y < oldY - distance /2) {traping.d1 = "down";}} }else if (number === 2) { if (axis === "horizontal" &&  traping.d2 === undefined) {traping.d2 = "right";} if (axis === "vertical" && traping.d2 === undefined) {traping.d2 = "down";} if (axis === "horizontal" && traping.d2 === "right") {if (x <= oldX + distance /2) {traping.mh2 += speed}else if (x > oldX + distance /2) {traping.d2 = "left";}} if (axis === "horizontal" && traping.d2 === "left") {if (x >= oldX - distance /2) {traping.mh2 -= speed}else if (x < oldX - distance /2) {traping.d2 = "right";}} if (axis === "vertical" && traping.d2 === "down") {if (y <= oldY + distance /2) {traping.mv2 += speed}else if (y > oldY + distance /2) {traping.d2 = "up";}} if (axis === "vertical" && traping.d2 === "up") {if (y >= oldY - distance /2) {traping.mv2 -= speed}else if (y < oldY - distance /2) {traping.d2 = "down";}} } if (caracterX + cW /2 > x && caracterX + cW /2 < x + width && caracterY - cH /2 >= y && caracterY - cH /2 <= y + height ) {if (damageActivated === 0 && inSettings === 0){if(lives === 3){lives = 2; damageReset = 0; damageActivated = 1;}else if(lives === 2){lives = 1; damageReset = 0; damageActivated = 1;}else if (lives === 1){lives = 0;}}} } 


//---------------------------------------------------------- 
//PORTALS AND STUFF 
//---------------------------------------------------------- 
var isEbeingPressed = 0; 
function teleport (event) {var thing = event.key; if (thing === "e" || thing === "E" ){isEbeingPressed = 1;}else {isEbeingPressed = 0;}} 
function portal (x, y, number) { ctx1.drawImage(door, x, y, caracterW, caracterH *1.5); if (caracterX + cW /2 >= x && caracterX + cW /2 <= x + caracterW && caracterY - cH /3 >= y && caracterY - cH /3 <= y + caracterH *1.5) {ctx1.fillStyle = "black"; ctx1.textAlign = "center"; ctx1.font = ""+canvasesH /20+"px cursive"; ctx1.fillText("Press E to enter", x + caracterW /2, y);if (isEbeingPressed === 1) {if (number === 1){playLevel = 70923742194;}if (number === 2){playLevel = 0180481080;}if (number === 111){playLevel = 3;}if (number === 222){playLevel = 6;}} } } 

function pitOfDoom(x,y,width,height) {
    ctx1.drawImage(pit,x,y,width,height);
    if(caracterX > x && caracterX + cW < x + width && caracterH < y){ctx1.fillStyle = "black"; ctx1.textAlign = "center"; ctx1.font = ""+canvasesH /20+"px cursive"; ctx1.fillText("Press E to enter", x + caracterW /2, y);if(isEbeingPressed===1){playLevel = 348959898753935269635;caracterX=canvasesW/2+caracterW*1.5;effect=undefined;}}
}


//---------------------------------------------------------- 
//CRISTAL STUFF 
//---------------------------------------------------------- 
var totalCrystals = 0;
var hasCrystal1 = 0;var first = undefined;
var hasCrystal2 = 0;var second = undefined;
var hasCrystal3 = 0;var third = undefined;
var hasCrystal4 = 0;var fourth = undefined;
var hasCrystal5 = 0;var fith = undefined;
function makethisworkplsimgoingtodieifitdoesntafterthis (){if(fith===fourth){fith=undefined;}if(fourth===third){fourth=undefined;}if(third===second){third=undefined;}if(second===first){second=undefined;}}
function drawshapes (){if(first===undefined){}else{ctx1.drawImage(shape2,caracterW*1.375,canvasesH*0.76,caracterW*1.125,caracterH*1.2);}if(second===undefined){}else{ctx1.drawImage(shape2,caracterW*3.125,canvasesH*0.76,caracterW*1.125,caracterH*1.2);}if(third===undefined){}else{ctx1.drawImage(shape2,caracterW*4.125,canvasesH*0.76,caracterW*1.125,caracterH*1.2);}if(fourth===undefined){}else{ctx1.drawImage(shape2,caracterW*5.125,canvasesH*0.76,caracterW*1.125,caracterH*1.2);}if(fith===undefined){}else{ctx1.drawImage(shape2,caracterW*6.875,canvasesH*0.76,caracterW*1.125,caracterH*1.2);}}
function sort (number){if(first === undefined){first = number;}else if(second === undefined){second = number;}else if(third === undefined){third = number;}else if(fourth === undefined){fourth = number;}else if(fith === undefined){fith = number;}}
function crystal (what, thing, x, y)  { if(thing === 0){ctx1.drawImage(what, x, y, caracterW *0.5, caracterH *0.75);} if (caracterX + caracterW /2 > x && caracterX + caracterW /2 < x + caracterW *0.5 && caracterY - caracterH /3 >= y && caracterY - caracterH /3 <= y + caracterH *0.75 ) { if (what === crystal1) {hasCrystal1 = 1;sort(1);} if (what === crystal2) {if(hasCrystal2 === 0){if(setDifficulty.diff === 0){lives = 3;}else if(setDifficulty.diff === 1){lives = 2;}}hasCrystal2 = 1;sort(2);} if (what === crystal3) {hasCrystal3 = 1;sort(3);} if (what === crystal4) {hasCrystal4 = 1;sort(4);} if (what === crystal5) {hasCrystal5 = 1;sort(5);}}} 
function showOwnedCrystals (){if(pause===0){drawshapes();makethisworkplsimgoingtodieifitdoesntafterthis();if(first === 1){ctx1.drawImage(crystal1,caracterW*1.5, canvasesH*0.77,caracterW*0.75,caracterH);}else if(first === 2){ctx1.drawImage(crystal2,caracterW*1.5, canvasesH*0.77,caracterW*0.75,caracterH);}else if(first === 3){ctx1.drawImage(crystal3,caracterW*1.5, canvasesH*0.77,caracterW*0.75,caracterH);}else if(first === 4){ctx1.drawImage(crystal4,caracterW*1.5, canvasesH*0.77,caracterW*0.75,caracterH);}else if(first === 5){ctx1.drawImage(crystal5,caracterW*1.5, canvasesH*0.77,caracterW*0.75,caracterH);}if(second === 1){ctx1.drawImage(crystal1,caracterW*3.25,canvasesH*0.77,caracterW*0.75,caracterH);}else if(second === 2){ctx1.drawImage(crystal2,caracterW*3.25,canvasesH*0.77,caracterW*0.75,caracterH);}else if(second === 3){ctx1.drawImage(crystal3,caracterW*3.25,canvasesH*0.77,caracterW*0.75,caracterH);}else if(second === 4){ctx1.drawImage(crystal4,caracterW*3.25,canvasesH*0.77,caracterW*0.75,caracterH);}else if(second === 5){ctx1.drawImage(crystal5,caracterW*3.25,canvasesH*0.77,caracterW*0.75,caracterH);} if(third === 1){ctx1.drawImage(crystal1,caracterW*4.25,canvasesH*0.77,caracterW*0.75,caracterH);}else if(third === 2){ctx1.drawImage(crystal2,caracterW*4.25,canvasesH*0.77,caracterW*0.75,caracterH);}else if(third === 3){ctx1.drawImage(crystal3,caracterW*4.25,canvasesH*0.77,caracterW*0.75,caracterH);}else if(third === 4){ctx1.drawImage(crystal4,caracterW*4.25,canvasesH*0.77,caracterW*0.75,caracterH);}else if(third === 5){ctx1.drawImage(crystal5,caracterW*4.25,canvasesH*0.77,caracterW*0.75,caracterH);}if(fourth === 1){ctx1.drawImage(crystal1,caracterW*5.25,canvasesH*0.77,caracterW*0.75,caracterH);}else if(fourth === 2){ctx1.drawImage(crystal2,caracterW*5.25,canvasesH*0.77,caracterW*0.75,caracterH);}else if(fourth === 3){ctx1.drawImage(crystal3,caracterW*5.25,canvasesH*0.77,caracterW*0.75,caracterH);}else if(fourth === 4){ctx1.drawImage(crystal4,caracterW*5.25,canvasesH*0.77,caracterW*0.75,caracterH);}else if(fourth === 5){ctx1.drawImage(crystal5,caracterW*5.25,canvasesH*0.77,caracterW*0.75,caracterH);}if(fith === 1){ctx1.drawImage(crystal1,caracterW*7,canvasesH*0.77,caracterW*0.75,caracterH);}else if(fith === 2){ctx1.drawImage(crystal2,caracterW*7,canvasesH*0.77,caracterW*0.75,caracterH);}else if(fith === 3){ctx1.drawImage(crystal3,caracterW*7,canvasesH*0.77,caracterW*0.75,caracterH);}else if(fith === 4){ctx1.drawImage(crystal4,caracterW*7,canvasesH*0.77,caracterW*0.75,caracterH);}else if(fith === 5){ctx1.drawImage(crystal5,caracterW*7,canvasesH*0.77,caracterW*0.75,caracterH);}}}

//---------------------------------------------------------- 
//CARACTER STUFF 
//---------------------------------------------------------- 
var cW = caracterW; 
var cH = caracterH; 
function caracter () { if (hasCrystal4 === 1){cW = caracterW *0.75;cH = caracterH *0.75;}else{cW = caracterW;cH = caracterH;} ctx1.drawImage(caracterImage, caracterX, caracterY - caracterH, cW, cH); } 


var instructionTimer = 0; 
//---------------------------------------------------------- 
//RESETING WHEN DIE STUFF 
//---------------------------------------------------------- 
function reset () { if (lives === 0 || ree === 1) {if(ree===1){document.location.href = "https://bananamaster21.github.io/IllusionForest.github.io/";}pause = 0; effect = undefined; isInverted = 0;if(setDifficulty.diff === 0){if (playLevel > 0 && playLevel < 3) {playLevel = 1; }else if (playLevel > 0 && playLevel < 6 || playLevel === 70923742194 || playLevel === 2793487593 || playLevel === 986593659) {playLevel = 3; }else if (playLevel > 0 && playLevel < 8 ||playLevel===0180481080||playLevel===3859293759||playLevel===824982691) {playLevel = 6;}else if (playLevel > 0){playLevel=8;}}else if(setDifficulty.diff === 1){if(playLevel > 0){playLevel = 1;}} instructionTimer = 0; caracterX = canvasesW /25; caracterY = ground - cH; caracterMoveSide = 0; caracterKeepSide = "right"; side = undefined; feetSwitch = 0; speed = 0; jump = false; fall = false; onGround = 1; upTimer = canvasesH /40; fallTimer = 0; healTimer = 0;hasCrystal1 = 0;first=undefined;hasCrystal2 = 0;second = undefined;hasCrystal3 = 0;third = undefined;hasCrystal4 = 0;fourth = undefined;hasCrystal5 = 0;fith = undefined;ree=0;if(setDifficulty.diff === 0){lives = 2;}else if(setDifficulty.diff === 1){lives = 1;}}} 


//---------------------------------------------------------- 
//SWITCHING LEVELS STUFF 
//---------------------------------------------------------- 
function next () { if (caracterX >= canvasesW) { if (playLevel === 0 || playLevel === 525852758123) { caracterX = canvasesW /25; caracterY = ground - caracterH; playLevel = 1;}else if (playLevel === 1) { caracterX = canvasesW /25; caracterY = ground - caracterH; playLevel = 2;}else if (playLevel === 2) { caracterX = canvasesW /25; caracterY = ground - caracterH; playLevel = 3;}else if (playLevel === 3) { caracterX = canvasesW /25; caracterY = ground - caracterH; playLevel = 4;}else if (playLevel === 4) { caracterX = canvasesW /25; caracterY = ground - caracterH; playLevel = 5;}else if (playLevel === 5) { caracterX = canvasesW /25; caracterY = ground - caracterH; playLevel = 6;}else if (playLevel === 6) { caracterX = canvasesW /25; caracterY = ground - caracterH; playLevel = 7;}else if (playLevel === 7) { caracterX = canvasesW /25; caracterY = ground - caracterH; playLevel = 8;}else if (playLevel === 8) { caracterX = canvasesW /25; caracterY = ground - caracterH; playLevel = 9;}else if (playLevel === 9) { caracterX = canvasesW /25; caracterY = ground - caracterH; playLevel = 10;}else if (playLevel === 10) { caracterX = canvasesW /25; caracterY = ground - caracterH; playLevel = 11;}else if (playLevel === 70923742194) { caracterX = canvasesW /25; caracterY = ground - caracterH; playLevel = 986593659; }else if (playLevel === 0180481080) { caracterX = canvasesW /25; caracterY = ground - caracterH; playLevel = 824982691; }else if (playLevel === 2793487593) { caracterX = canvasesW /25; caracterY = ground - caracterH; playLevel = 70923742194; }else if (playLevel === 3859293759) { caracterX = canvasesW /25; caracterY = ground - caracterH; playLevel = 0180481080; } traping.d1 = undefined; traping.mh1 = 0; traping.mv1 = 0; traping.d2 = undefined; traping.mh2 = 0; traping.mv2 = 0; instructionTimer = 0; } if (caracterX + cW < 0) { if (playLevel === 1){ caracterX = canvasesW *24/25; caracterY = ground - caracterH; playLevel = 525852758123; }else if (playLevel === 2) { caracterX = canvasesW *24/25; caracterY = ground - caracterH; playLevel = 1; }else if (playLevel === 3) { caracterX = canvasesW *24/25; caracterY = ground - caracterH; playLevel = 2; }else if (playLevel === 4) { caracterX = canvasesW *24/25; caracterY = ground - caracterH; playLevel = 3; }else if (playLevel === 5) { caracterX = canvasesW *24/25; caracterY = ground - caracterH; playLevel = 4; }else if (playLevel === 6) { caracterX = canvasesW *24/25; caracterY = ground - caracterH; playLevel = 5; }else if (playLevel === 7) { caracterX = canvasesW *24/25; caracterY = ground - caracterH; playLevel = 6; }else if (playLevel === 8) { caracterX = canvasesW *24/25; caracterY = ground - caracterH; playLevel = 7; }else if (playLevel === 9) { caracterX = canvasesW *24/25; caracterY = 0; playLevel = 8; }else if (playLevel === 10) { caracterX = canvasesW *24/25; caracterY = ground - caracterH; playLevel = 9; }else if (playLevel === 11) { caracterX = canvasesW *24/25; caracterY = ground - caracterH; playLevel = 10; }else if (playLevel === 70923742194) { caracterX = canvasesW *24/25; caracterY = ground - caracterH; playLevel = 2793487593; }else if (playLevel === 0180481080) { caracterX = canvasesW *24/25; caracterY = ground - caracterH; playLevel = 3859293759; }else if (playLevel === 986593659) { caracterX = canvasesW *24/25; caracterY = ground - caracterH; playLevel = 70923742194; }else if (playLevel === 824982691) { caracterX = canvasesW *24/25; caracterY = ground - caracterH; playLevel = 0180481080; }traping.mh1 = 0; traping.mv1 = 0; traping.d2 = undefined; traping.mh2 = 0; traping.mv2 = 0; instructionTimer = 0; } } 


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
var regenTimer = 0;
var regenLenght = 444;
function regen (){if(hasCrystal5===1){if(lives===1){regenTimer+=1;if(regenTimer>=regenLenght){lives=2;regenTimer=0;}}if(hasCrystal2===1&&lives===2){regenTimer+=1;if(regenTimer>=regenLenght){lives=3;regenTimer=0;}}}}
function live (){if (lives === 3) {ctx1.drawImage(heart, heart1X, heartsY, heartsW, heartsH);ctx1.drawImage(heart, heart2X, heartsY, heartsW, heartsH);ctx1.drawImage(heart, heart3X, heartsY, heartsW, heartsH);} if (lives === 2) {ctx1.drawImage(heart, heart1X, heartsY, heartsW, heartsH);ctx1.drawImage(heart, heart2X, heartsY, heartsW, heartsH);} if (lives === 1) {ctx1.drawImage(heart, heart1X, heartsY, heartsW, heartsH);} if (lives === 0) {hasCrystal1 = 0;first=undefined;hasCrystal2 = 0;second = undefined;hasCrystal3 = 0;third = undefined;hasCrystal4 = 0;fourth = undefined;hasCrystal5 = 0;fith = undefined;var TextSize = canvasesH /10; var resetW = canvasesW /5; var resetY = canvasesH /5; pause = 1; ctx1.drawImage(setBack,0, 0, canvasesW, canvasesH); ctx1.fillStyle = "black"; ctx1.textAlign = "center"; ctx1.font = ""+TextSize+"px cursive"; ctx1.fillText("Click to restart", canvasesW /2, canvasesH /4); ctx1.drawImage(resetButton, canvasesW /2 - resetW /2, canvasesH /2 - resetY /2, resetW, resetY); } } 


//---------------------------------------------------------- 
//MUSIC 
//---------------------------------------------------------- 
var audio_0 = document.getElementById("sound_intro"); 
var audio_1 = document.getElementById("sound_1"); 
var audio_2 = document.getElementById("sound_2"); 
var audio_3 = document.getElementById("sound_3"); 
var audio_4 = document.getElementById("sound_4"); 
var audio_E = document.getElementById("sound_credits");
function music () { if(setAudio.want === 1){if(incredits === 1){audio_E.play();}else {audio_E.pause();}if (playLevel === 0 || playLevel === 7 || playLevel === 11 && incredits === 0|| playLevel === 986593659 || playLevel === 3859293759 || playLevel === 348959898753935300000 && incredits === 0) {audio_0.play();}else {audio_0.pause();} if (playLevel === 1 || playLevel === 2 || playLevel === 8 || playLevel === 824982691) {audio_1.play();}else {audio_1.pause();} if (playLevel === 3 || playLevel === 4 || playLevel === 9 || playLevel === 2793487593) {audio_2.play();}else {audio_2.pause();} if (playLevel === 5 || playLevel === 6) {audio_3.play();}else {audio_3.pause();} if (playLevel === 70923742194 || playLevel === 0180481080 || playLevel === 10) {audio_4.play();}else {audio_4.pause();}}else if (setAudio.want === 0){audio_0.pause();audio_1.pause();audio_2.pause();audio_3.pause();audio_4.pause();audio_E.pause();}} 

//random variables
var WentHere2 = 0;
var WentHere = 0;

//---------------------------------------------------------- 
//GAME LOOP THING 
//---------------------------------------------------------- 
//-----fps controling stuff-----//
var fps = 1000 / 60;
var fpsTime = Date.now();
var fpsNow = undefined;
var fpsElapsed = undefined;

function game () { 
    requestAnimationFrame(game); 
    
    fpsNow = Date.now();
    fpsElapsed = fpsNow - fpsTime;
    if (fpsElapsed > fps) {
    fpsTime = fpsNow - (fpsElapsed % fps);
        
    //-----level backgrounds-----// 
    0===playLevel&&ctx1.drawImage(introBack,0,0,y=canvasesW,canvasesH),1===playLevel&&(ctx1.drawImage(lvl_1Back,0,0,canvasesW,canvasesH),ctx1.drawImage(house,0-3*caracterW,floor-3.5*caracterH,6*caracterW,4*caracterH),ctx1.drawImage(meter1,canvasesW/2-1*canvasesW/6,0,1*canvasesW/3,3*caracterH/5)),2===playLevel&&(ctx1.drawImage(lvl_2Back,0,0,canvasesW,canvasesH),ctx1.drawImage(meter2,canvasesW/2-1*canvasesW/6,0,1*canvasesW/3,3*caracterH/5)),3===playLevel&&(ctx1.drawImage(lvl_3Back,0,0,canvasesW,canvasesH),ctx1.drawImage(meter3,canvasesW/2-1*canvasesW/6,0,1*canvasesW/3,3*caracterH/5)),4===playLevel&&(ctx1.drawImage(lvl_3Back,0,0,canvasesW,canvasesH),ctx1.drawImage(meter4,canvasesW/2-1*canvasesW/6,0,1*canvasesW/3,3*caracterH/5)),5===playLevel&&(ctx1.drawImage(lvl_5Back,0,0,canvasesW,canvasesH),ctx1.drawImage(meter5,canvasesW/2-1*canvasesW/6,0,1*canvasesW/3,3*caracterH/5)),6===playLevel&&(ctx1.drawImage(lvl_1Back,0,0,canvasesW,canvasesH),ctx1.drawImage(meter6,canvasesW/2-1*canvasesW/6,0,1*canvasesW/3,3*caracterH/5)),7===playLevel&&(ctx1.drawImage(lvl_3Back,0,0,canvasesW,canvasesH),0===WentHere?ctx1.drawImage(meter7,canvasesW/2-1*canvasesW/6,0,1*canvasesW/3,3*caracterH/5):1===WentHere&&ctx1.drawImage(meter1,canvasesW/2-1*canvasesW/6,0,1*canvasesW/3,3*caracterH/5));
    
    //-----level music-----// 
    music(); 
    
    //-----going to next level-----//
    next(); 
    
    //-----movement-----//
    if (pause === 0) {controls(); walking(); jumpFallLand(); }
    
    //-----obstacles-----// 
    slip(); wallRight(); wallLeft(); damageTimer(); 
    
    //-----BUILD INTRO-----// 
    //---------------------------------------------------------- 
    if (playLevel === 0) {
        instructionTimer+=1,ctx1.fillStyle="black",ctx1.textAlign="start",ctx1.font=canvasesH/20+"px cursive",ctx1.fillText("Spikes hurt",4*canvasesW/5,floor-1.5*caracterH),obstacle(rock,1*canvasesW/3-caracterW/2,floor-caracterH,caracterW,caracterH,1),obstacle(rock,1*canvasesW/2-caracterW/2,floor-2*caracterH,caracterW,2*caracterH,2),obstacle(rock,2*canvasesW/3-caracterW/2,floor-caracterH,caracterW,caracterH,3),obstacle(rock,0,0,0,0,4),vine(0,0,0,0,1),ctx1.fillText("Your lives",1.5*heart2X,canvasesH/20+canvasesH/40),ctx1.textAlign="center",instructionTimer<225?ctx1.fillText("Arrow keys to move left and right, Space to jump",canvasesW/2,floor-3*caracterH):ctx1.fillText("Move out of the screen to change level",canvasesW/2,floor-3*caracterH),caracter(),trap(spikeFloor,3*canvasesW/8,floor-caracterH/2,caracterW,caracterH/2),trap(spikeFloor,4*canvasesW/5,floor-caracterH/2,4*caracterW/3,caracterH/2);
    }
    //secrrrrrrrrrrrrrrrret leeeeeeeeevvvvvvvvvvvvels 
    if (playLevel === 525852758123) {
        ctx1.drawImage(introBack,0,0,canvasesW,canvasesH),ctx1.drawImage(ruin,0,floor-1.5*caracterH,2*caracterW,1.5*caracterH),crystal(crystal2,hasCrystal2,.75*caracterW,floor-2*caracterH),obstacle(rock,0,0,0,0,1),obstacle(rock,0,0,0,0,2),obstacle(rock,0,0,0,0,3),obstacle(rock,0,0,0,0,4),vine(0,0,0,0,1),caracter();
    }
    if (playLevel === 70923742194) {
        ctx1.drawImage(lvl_1Back,0,0,canvasesW,canvasesH),ctx1.drawImage(sign,canvasesW/2,floor-2*caracterH,caracterW,2*caracterH),portal(canvasesW/25,floor-1.5*caracterH,111),obstacle(rock,0,0,0,0,1),obstacle(rock,0,0,0,0,2),obstacle(rock,0,0,0,0,3),obstacle(rock,0,0,0,0,4),vine(0,0,0,0,1),caracter();
    } 
    if (playLevel === 0180481080) { 
        ctx1.drawImage(introBack,0,0,canvasesW,canvasesH);ctx1.drawImage(sign,canvasesW/2,floor-caracterH*2,caracterW,caracterH*2);portal(canvasesW/2-caracterW*2.5,floor-caracterH*2.5,222);obstacle(rock,canvasesW/2-caracterW*2.5,floor-caracterH,caracterW,caracterH,1);obstacle(rock,0,0,0,0,2);obstacle(rock,0,0,0,0,3);obstacle(rock,0,0,0,0,4);vine(0,0,0,0,1);caracter(); 
    } 
    if (playLevel === 986593659) {
        ctx1.drawImage(lvl_3Back, 0, 0, canvasesW, canvasesH);
        instructionTimer+=1;
        if(instructionTimer<20){ctx1.drawImage(box,moleX+caracterW*1.5,floor - caracterH*2.375,caracterW*1.5,caracterH*0.75);ctx1.fillStyle="black";ctx1.textAlign="center";ctx1.font=canvasesH/20+"px cursive";ctx1.fillText("AHH!",moleX+caracterW*1.5*caracterW*0.75,floor - caracterH*2.25);}
        //obstacles
        obstacle(rock, canvasesW - caracterW*6, floor - caracterH, caracterW, caracterH, 1);
        pitOfDoom(canvasesW - caracterW*5, floor - caracterH/3, caracterW*1.5, caracterH*4);
        obstacle(rock, canvasesW - caracterW*2.5, floor - caracterH, caracterW, caracterH, 2);
        obstacle(rock, canvasesW - caracterW/2, 0 - caracterH/2, caracterW, caracterH*5, 3);
        //obstacles not in use 
        obstacle(rock, 0, 0, 0, 0, 4); 
        vine(0, 0, 0, 0, 1);
        //mole
        ctx1.drawImage(mole, moleX, floor - caracterH*2, caracterW*1.5, caracterH*2);
        //caracter
        caracter();
        //traps
        mushroom(mushroom1, canvasesW - caracterW*7, floor - caracterH/2, caracterW, caracterH/2, "jelly");
        mushroom(mushroom1, canvasesW - caracterW*3.5, floor - caracterH/2, caracterW, caracterH/2, "jelly");
        mushroom(mushroom1, canvasesW - caracterW*1.5, floor - caracterH/2, caracterW, caracterH/2, "jelly");
    } 
    if (playLevel === 824982691) { 
        ctx1.drawImage(introBack, 0, 0, canvasesW, canvasesH); 
        //ruin 
        ctx1.drawImage(ruin, canvasesW - caracterW *2.5, floor - caracterH *1.75 - caracterH *2.75, caracterW *2, caracterH *1.5); 
        //crystal 
        crystal(crystal5, hasCrystal5, canvasesW - caracterW *2, floor - caracterH *4.625); 
        //water
        aqua(caracterW * 4.75, floor - caracterH * 1.25, caracterW *3, caracterH *1.25);
        //objects 
        obstacle(rock,caracterW * 3, floor - caracterH *1.25, caracterW *2, caracterH *1.25, 1); obstacle(rock, caracterW *3, 0 - caracterH *0.5, caracterW *2, caracterH *2, 2); obstacle(rock, canvasesW - caracterW *2.5, floor - caracterH *3.625, caracterW *2.5, caracterH *3.625, 3); obstacle(rock, canvasesW - caracterW *0.5, 0 - caracterH *3.5, caracterW *0.75, caracterH *8.25, 4); vine(caracterW *5.375, 0 - caracterH *0.25, caracterW *0.5, caracterH *1.75, 1); 
        //player 
        caracter(); 
        //traps 
        trap(spikeFloor, caracterW *3.5, floor - caracterH *1.75, caracterW, caracterH /2); 
    } 
    if (playLevel === 2793487593) { 
        ctx1.drawImage(introBack, 0, 0, canvasesW, canvasesH); 
        //ruin 
        ctx1.drawImage(ruin, caracterW /2, floor - caracterH *1.5 - caracterH *1.75, caracterW *2, caracterH *1.5); 
        //crystal 
        crystal(crystal4, hasCrystal4, caracterW *1.25, floor - caracterH *2 - caracterH *1.75); 
        //objects 
        obstacle(rock, 0, floor - caracterH *2.25, caracterW *2.5, caracterH *2.25, 1); obstacle(rock, 0 - caracterW /2, 0 - caracterH *0.5, caracterW *1, caracterH *5, 2); obstacle(rock, canvasesW /2 - caracterW /2, floor - caracterH *2.25, caracterW, caracterH *2.25, 3); obstacle(rock, canvasesW /2 - caracterW /2, 0 - caracterH *0.625, caracterW, caracterH *2, 4); vine(canvasesW /2 - caracterW /2 + caracterW *3, 0 - caracterH *0.5, caracterW /2, caracterH *5.25, 1); 
        //player
        caracter(); 
        //traps 
        trap(spikeFloor, caracterW *2.5, floor - caracterH /2, caracterW, caracterH /2); trap(spikeFloor, caracterW *3.5, floor - caracterH /2, caracterW, caracterH /2); trap(spikeFloor, canvasesW /2 - caracterW /2 + caracterW, floor - caracterH /2, caracterW, caracterH /2); trap(spikeFloor, canvasesW /2 - caracterW /2 + caracterW *2, floor - caracterH /2, caracterW, caracterH /2); 
    } 
        if (playLevel === 3859293759) { ctx1.drawImage(introBack, 0, 0, canvasesW, canvasesH); 
        //objects
        obstacle(rock, 0 - caracterW/2, 0 - caracterH/2, caracterW, caracterH*5.25, 1);
        //objects not in use 
        obstacle(rock, 0, 0, 0, 0, 2); obstacle(rock, 0, 0, 0, 0, 3); obstacle(rock, 0, 0, 0, 0, 4); vine(0, 0, 0, 0, 1); 
        //bird
        if(WentHere2===0){ctx1.drawImage(bird, caracterW, floor - caracterH*2.5, caracterW*3.5, caracterH*2.5);}else if (WentHere2===1){ctx1.drawImage(nest, caracterW, floor - caracterH*1.25, caracterW*3.5, caracterH*1.25);crystal(crystal1,hasCrystal1, caracterW*2.5, floor - caracterH*2.25, caracterW*0.75, caracterH*0.75);}
        if(caracterX <= canvasesW-caracterW*2.5&&WentHere2===0){instructionTimer+=1;ctx1.fillStyle="black";ctx1.textAlign="center";ctx1.font=canvasesH/20+"px cursive";if(instructionTimer<=150){ctx1.drawImage(box2, caracterW*4, caracterH*1.25,2.5*caracterW,1.5*caracterH);ctx1.fillText("Hello there",caracterW*5.25,caracterH*2);}else if (instructionTimer <= 350){ctx1.font=canvasesH/35+"px cursive";ctx1.drawImage(box2, caracterW*4, caracterH*1.25,2.5*caracterW,1.5*caracterH);ctx1.fillText("Rare to see",caracterW*5.25,caracterH*1.75);ctx1.fillText("Travelers out here",caracterW*5.25,caracterH*2.125);}else if (instructionTimer <= 550){ctx1.font=canvasesH/35+"px cursive";ctx1.drawImage(box2, caracterW*4, caracterH*1.25,2.5*caracterW,1.5*caracterH);ctx1.fillText("Here have this",caracterW*5.25,caracterH*1.75);ctx1.fillText("It boosts your speed",caracterW*5.25,caracterH*2.125);}else if (instructionTimer > 550){WentHere2 = 1;}}
        //player 
        caracter(); 
        } 
    
    //-----BUILD LEVEL 1-----// 
    //---------------------------------------------------------- 
    if (playLevel === 1) {
        obstacle(rock,1*canvasesW/3,floor-caracterH,caracterW,caracterH,1),obstacle(rock,1*canvasesW/3,floor-3.5*caracterH,caracterW,caracterH,2),obstacle(rock,canvasesW-3.5*caracterW,floor-2*caracterH,2*caracterW,2*caracterH,3),obstacle(rock,canvasesW-2*caracterW,floor-4.5*caracterH,caracterW,4.5*caracterH,4),vine(canvasesW-.75*caracterW,0,caracterW/2,5*caracterH,1),caracter(),trap(spikeFloor,1*canvasesW/3+caracterW,floor-caracterH/2,1.5*caracterW,caracterH/2),trap(spikeFloor,1*canvasesW/3+2.5*caracterW,floor-caracterH/2,caracterW,caracterH/2);
    } 
    //-----BUILD LEVEL 2-----// 
    //---------------------------------------------------------- 
    if (playLevel === 2) {
        obstacle(rock,1*canvasesW/4-caracterW/2,floor-1.5*caracterH,caracterW,1.5*caracterH,1),obstacle(rock,1*canvasesW/4+caracterW/2,floor-3*caracterH,caracterW,3*caracterH,2),obstacle(rock,3*canvasesW/4+caracterW,0-2*caracterH,caracterW,2.5*caracterH,3),obstacle(rock,3*canvasesW/4+caracterW,floor-2.5*caracterH,caracterW,2.5*caracterH,4),vine(3*canvasesW/4+2.25*caracterW,0,caracterW/2,5*caracterH,1),caracter(),trap(spikeFloor,1*canvasesW/4+1.5*caracterW,floor-caracterH/2,1.5*caracterW,caracterH/2),trap(spikeFloor,1*canvasesW/4+3*caracterW,floor-caracterH/2,1.5*caracterW,caracterH/2),trap(spikeFloor,1*canvasesW/4+4.5*caracterW,floor-caracterH/2,1.5*caracterW,caracterH/2);
    } 
    //-----BUILD LEVEL 3-----// 
    //---------------------------------------------------------- 
    if (playLevel === 3) {
        0===setDifficulty.diff&&ctx1.drawImage(checkpoint,0,floor-1.25*caracterH,.75*caracterW,1.25*caracterH),obstacle(rock,1*canvasesW/6-caracterW/6,1*canvasesH/12+1.5*caracterH-caracterH/8,caracterW+1*caracterW/3,3*caracterH/4,1),obstacle(rock,1*canvasesW/6+2*caracterW+2*caracterW/3,1*canvasesH/12+1.5*caracterH-caracterH/8,caracterW,3*caracterH/4,2),obstacle(rock,5*canvasesW/8+caracterW/2,floor-caracterH,caracterW+3*caracterW/4,caracterH,3),obstacle(rock,5*canvasesW/8+2*caracterW,floor-3.5*caracterH,caracterW,3.5*caracterH,4),vine(5*canvasesW/8+3.25*caracterW,0,caracterW/2,5*caracterH,1),portal(1*canvasesW/6,1*canvasesH/12,1),caracter(),movingTrap(spikeBall,1*canvasesW/6+caracterW+1*caracterW/3+traping.mh1,void 0,2*canvasesH/6+traping.mv1,2*canvasesH/6,caracterW,caracterW,1*canvasesH/3,"vertical",canvasesW/200,1),trap(spikeWall,5*canvasesW/8+2*caracterW-caracterW/2,floor-2*caracterH-1*caracterH/4,3*caracterW/4,1.5*caracterH),ctx1.fillStyle="forestGreen",ctx1.textAlign="center",ctx1.font=canvasesH/20+"px cursive",ctx1.fillText("Remember walk or jump out of the screen to change level",1*canvasesW/2,7*canvasesH/9);
    } 
    //-----BUILD LEVEL 4-----// 
    //---------------------------------------------------------- 
    if (playLevel === 4) {
        obstacle(rock,1*canvasesW/6+1*caracterW/3,floor-caracterH,caracterW,caracterH,1),obstacle(rock,1*canvasesW/6+1*caracterW/3+2*caracterW,floor-2.25*caracterH,caracterW,2.25*caracterH,2),obstacle(rock,1*canvasesW/6+1*caracterW/3+6*caracterW,floor-2.25*caracterH,caracterW,2.25*caracterH,3),vine(1*canvasesW/6+1*caracterW/3+7.25*caracterW,0,caracterW/2,5*caracterH,1),obstacle(rock,0,0,0,0,4),caracter(),movingTrap(spikeBall,1*canvasesW/6+1*caracterW/3+traping.mh1,void 0,2*canvasesH/6-caracterH+traping.mv1,2*canvasesH/6-caracterH,caracterW,caracterW,1*canvasesH/3,"vertical",canvasesW/200,1),movingTrap(spikeBall,1*canvasesW/6+1*caracterW/3+6*caracterW+traping.mh2,void 0,0+traping.mv2,0,caracterW,caracterW,3*canvasesH/5-1.5*caracterW,"vertical",canvasesW/200,2),trap(spikeFloor,1*canvasesW/6+1*caracterW/3+caracterW,floor-caracterH/2,caracterW,caracterH/2),trap(spikeWall,1*canvasesW/6+1*caracterW/3+1.5*caracterW,floor-2*caracterH,3*caracterW/5,1.5*caracterH),trap(spikeFloor,1*canvasesW/6+1*caracterW/3+3*caracterW,floor-caracterH/2,caracterW,caracterH/2),trap(spikeFloor,1*canvasesW/6+1*caracterW/3+4*caracterW,floor-caracterH/2,caracterW,caracterH/2),trap(spikeFloor,1*canvasesW/6+1*caracterW/3+5*caracterW,floor-caracterH/2,caracterW,caracterH/2);
    }
    //-----BUILD LEVEL 5-----// 
    //---------------------------------------------------------- 
    if (playLevel === 5) {
        obstacle(rock,2*canvasesW/6,floor-caracterH,caracterW,caracterH,1),obstacle(rock,2*canvasesW/6+2*caracterW,floor-2.5*caracterH,caracterW,caracterH,2),obstacle(rock,2*canvasesW/6+4*caracterW,floor-3.5*caracterH,caracterW,3.5*caracterH,3),vine(2*canvasesW/6+5.5*caracterW,0,caracterW/2,5*caracterH,1),obstacle(rock,0,0,0,0,4),caracter(),movingTrap(spikeBall,2*canvasesW/6+traping.mh1,void 0,2*canvasesH/6-caracterH+traping.mv1,2*canvasesH/6-caracterH,caracterW,caracterW,1*canvasesH/3,"vertical",canvasesW/237.5,1),movingTrap(spikeBall,2*canvasesW/6+2*caracterW+traping.mh2,2*canvasesW/6+2.5*caracterW,floor-4*caracterH+traping.mv2,void 0,caracterW,caracterW,1*canvasesW/3,"horizontal",canvasesW/200,2),trap(spikeFloor,2*canvasesW/6+caracterW,floor-caracterH/2,caracterW,caracterH/2),trap(spikeFloor,2*canvasesW/6+2*caracterW,floor-caracterH/2,caracterW,caracterH/2),trap(spikeFloor,2*canvasesW/6+3*caracterW,floor-caracterH/2,caracterW,caracterH/2);
    }
    //-----BUILD LEVEL 6-----// 
    //---------------------------------------------------------- 
    if (playLevel === 6) {
        0===setDifficulty.diff&&ctx1.drawImage(checkpoint,0,floor-1.25*caracterH,.75*caracterW,1.25*caracterH),obstacle(rock,1*canvasesW/6-caracterW/6-caracterW,1*canvasesH/12+1.5*caracterH-caracterH/8,caracterW+1*caracterW/3,3*caracterH/4,1),movingTrap(spikeBall,canvasesW/2+2.5*caracterW+traping.mh2,void 0,2*canvasesH/6-caracterH+traping.mv2,2*canvasesH/6-caracterH,caracterW,caracterW,1*canvasesH/3+caracterH,"vertical",canvasesW/125,2),obstacle(rock,canvasesW/2-2.5*caracterW,floor-caracterH,caracterW,caracterH,2),obstacle(rock,canvasesW/2-1.5*caracterW,floor-1.5*caracterH,caracterW,1.5*caracterH,3),vine(canvasesW/2-.5*caracterW+caracterW/4,0,caracterW/2,5*caracterH,1),portal(1*canvasesW/6-caracterW,1*canvasesH/12,2),caracter(),movingTrap(spikeBall,canvasesW/2-1.5*caracterW+traping.mh1,void 0,2*canvasesH/6-2*caracterH+traping.mv1,2*canvasesH/6-2*caracterH,caracterW,caracterW,1*canvasesH/3,"vertical",canvasesW/150,1),trap(spikeFloor,canvasesW/2-1.5*caracterW,floor-2*caracterH,caracterW,caracterH/2),trap(spikeFloor,canvasesW/2+2.25*caracterW,floor-caracterH/2,1.5*caracterW,caracterH/2);
    }
    //-----BUILD LEVEL 7-----// 
    //---------------------------------------------------------- 
    if (playLevel === 7) {
        instructionTimer<845&&0===WentHere&&obstacle(villageDoor,canvasesW-3*caracterW,0,3*caracterW,5*caracterH,1),0===WentHere&&ctx1.drawImage(tom,canvasesW-6*caracterW,floor-2.5*caracterH,2.5*caracterW,2.5*caracterH),caracter(),caracterX>=.16*canvasesW&&0===WentHere&&(instructionTimer+=1,ctx1.fillStyle="black",ctx1.textAlign="center",ctx1.font=canvasesH/20+"px cursive",instructionTimer<100?(ctx1.drawImage(box,canvasesW-5.5*caracterW-1.5*caracterW,floor-1.75*caracterH-.75*caracterH,1.5*caracterW,.75*caracterH),ctx1.fillText("Stop",canvasesW-5.5*caracterW-.75*caracterW,floor-1.75*caracterH-.3*caracterH)):instructionTimer<300?(ctx1.font=canvasesH/30+"px cursive",ctx1.drawImage(box,canvasesW-6.5*caracterW-1.5*caracterW,floor-2.5*caracterH-.75*caracterH,2.5*caracterW,1.5*caracterH),ctx1.fillText("To pass",canvasesW-6*caracterW-.75*caracterW,floor-2.5*caracterH-.3*caracterH),ctx1.fillText("Answer this riddle you must",canvasesW-6*caracterW-.75*caracterW,floor-2*caracterH-.3*caracterH)):instructionTimer<500?(ctx1.font=canvasesH/30+"px cursive",ctx1.drawImage(box,canvasesW-6.5*caracterW-1.5*caracterW,floor-2.5*caracterH-.75*caracterH,2.5*caracterW,1.5*caracterH),ctx1.fillText("What came first?",canvasesW-6*caracterW-.75*caracterW,floor-2.5*caracterH-.3*caracterH),ctx1.fillText("The chicken or the egg",canvasesW-6*caracterW-.75*caracterW,floor-2*caracterH-.3*caracterH)):instructionTimer<675?(ctx1.fillStyle="rgba( 0, 0, 0,0.8)",ctx1.fillRect(0,0,canvasesW,canvasesH),ctx1.drawImage(egg,.25*canvasesW-caracterW,canvasesH/2-2.5*caracterH/2,2*caracterW,2.5*caracterH),ctx1.drawImage(chicken,.75*canvasesW-2*caracterW/2,canvasesH/2-2.5*caracterH/2,2*caracterW,2.5*caracterH)):instructionTimer<800?(ctx1.font=canvasesH/30+"px cursive",ctx1.drawImage(box,canvasesW-6.5*caracterW-1.5*caracterW,floor-2.5*caracterH-.75*caracterH,2.5*caracterW,1.5*caracterH),ctx1.fillText("Trick question hehe",canvasesW-6*caracterW-.75*caracterW,floor-2.5*caracterH-.3*caracterH),ctx1.fillText("It was the jellyfish",canvasesW-6*caracterW-.75*caracterW,floor-2*caracterH-.3*caracterH)):instructionTimer<810?ctx1.drawImage(jelly,canvasesW/4,canvasesH/8,canvasesW/2,.75*canvasesH):instructionTimer<840?(ctx1.font=canvasesH/30+"px cursive",ctx1.drawImage(box,canvasesW-6.5*caracterW-1.5*caracterW,floor-2.5*caracterH-.75*caracterH,2.5*caracterW,1.5*caracterH),ctx1.fillText("You may",canvasesW-6*caracterW-.75*caracterW,floor-2.5*caracterH-.3*caracterH),ctx1.fillText("Pass now",canvasesW-6*caracterW-.75*caracterW,floor-2*caracterH-.3*caracterH)):instructionTimer<845?(ctx1.font=canvasesH/20+"px cursive",ctx1.drawImage(box,canvasesW-5.5*caracterW-1.5*caracterW,floor-1.75*caracterH-.75*caracterH,1.5*caracterW,.75*caracterH),ctx1.fillText("Poof",canvasesW-5.5*caracterW-.75*caracterW,floor-1.75*caracterH-.3*caracterH)):WentHere=1),obstacle(rock,0,0,0,0,2),obstacle(rock,0,0,0,0,3),obstacle(rock,0,0,0,0,4),vine(0,0,0,0,1);
    } 
    //-----BUILD LEVEL 8-----// 
    //---------------------------------------------------------- 
    if (playLevel === 8) {
        //background
        ctx1.drawImage(lvl_3Back,0,0,canvasesW,canvasesH);
        if(setDifficulty.diff===0){ctx1.drawImage(checkpoint,0,floor-1.25*caracterH,.75*caracterW,1.25*caracterH);}
        //obstacles
        vine(caracterW*2.5,0-caracterH*0.5,caracterW/2,caracterH*5.25,1);
        aqua(caracterW*2.5,floor-caracterH*1.25, caracterW*6.75, caracterH*1.25);
        obstacle(rock,caracterW*1.5,floor-caracterH*1.25,caracterW*1.25,caracterH*1.25,1);
        obstacle(rock,caracterW*3,floor-caracterH*2.5,caracterW*1.25,caracterH*1.25,2);
        obstacle(rock,caracterW*8.25,caracterH*0.5,caracterW*1.75,caracterH*4,3);
        //objects not in use
        obstacle(rock,0,0,0,0,4);
        
        //player 
        caracter();
    }
    //-----BUILD LEVEL 9-----// 
    //---------------------------------------------------------- 
    if (playLevel === 9) {
        //background
        ctx1.drawImage(lvl_9Back,0,0,canvasesW,canvasesH);
        //objects not in use
        obstacle(rock,0,0,0,0,1);
        obstacle(rock,0,0,0,0,2);
        obstacle(rock,0,0,0,0,3);
        obstacle(rock,0,0,0,0,4);
        vine(0,0,0,0,1);
        
        //player 
        caracter();
    }
    //-----BUILD LEVEL 10-----// 
    //---------------------------------------------------------- 
    if (playLevel === 10) {
        //background
        ctx1.drawImage(introBack, 0, 0, canvasesW, canvasesH);
        //door
        obstacle(villageDoor,canvasesW-3*caracterW,0,3*caracterW,5*caracterH,1);
        //chief
        ctx1.drawImage(chief,canvasesW-5.5*caracterW,floor-2.5*caracterH,2.5*caracterW,2.5*caracterH);
        //objects not in use
        obstacle(rock,0,0,0,0,2);
        obstacle(rock,0,0,0,0,3);
        obstacle(rock,0,0,0,0,4);
        vine(0,0,0,0,1);
        
        //player 
        caracter();
    }
    //-----BUILD FINAL LEVEL-----// 
    //---------------------------------------------------------- 
    if (playLevel === 11) {
        //backgrounds
        ctx1.drawImage(introBack, 0, 0, canvasesW, canvasesH);
        ctx1.drawImage(town, 0, 0-caracterH*0.75, canvasesW, canvasesH+caracterH/4);
        //objects not in use
        obstacle(rock,0,0,0,0,1);
        obstacle(rock,0,0,0,0,2);
        obstacle(rock,0,0,0,0,3);
        obstacle(rock,0,0,0,0,4);
        vine(0,0,0,0,1);
        
        //player 
        caracter();
    }
    //------build mole house-----//
    //-----------------------------------------------------------
    if (playLevel === 348959898753935269635) {
        if(moleGo===1){hasCrystal3=1;}
        //background
        ctx1.drawImage(caveBack1,0,0,canvasesW,canvasesH);
        //bed
        ctx1.drawImage(bed, canvasesW - caracterW*3.5, floor - caracterH*1.325, caracterW*3, caracterH*1.325);
        //crystal
        ctx1.drawImage(ruin,caracterW,floor-1.5*caracterH,2*caracterW,1.5*caracterH);
        crystal(crystal3, hasCrystal3, caracterW*1.75, floor - caracterH*2);
        //door
        portal(canvasesW/2 - caracterW*0.75,floor-caracterH*1.5,111);
        //obstacles
        obstacle(rock,0-caracterW/2,0-caracterH/2,caracterW,caracterH*5.25,1);
        obstacle(rock,caracterW*3,0-caracterH/2,caracterW,caracterH*3.5,2);
        obstacle(rock,canvasesW-caracterW/2,0-caracterH/2,caracterW,caracterH*5.25,3);
        //objects not in use
        obstacle(rock,0,0,0,0,4);
        vine(0,0,0,0,1);
        //caracter
        caracter();
        //make you statue
        if(hasCrystal3===1){caracterImage=statue;pause=1;if(ree === 0){document.cookie = "thief=1";}ctx1.fillStyle="black";ctx1.textAlign="center";ctx1.font=canvasesH/20+"px cursive";ctx1.drawImage(mole, canvasesW-caracterW*4, floor - caracterH*2, caracterW*1.5, caracterH*2);instructionTimer+=1;if(instructionTimer < 150){ctx1.drawImage(box,canvasesW/2-caracterW*1.5,caracterH*1.75,2.5*caracterW,1.5*caracterH);ctx1.fillText("How dare you",canvasesW/2-caracterW*0.25,caracterH*2.25);ctx1.fillText("Steal from me",canvasesW/2-caracterW*0.25,caracterH*2.5);}else if (instructionTimer < 275){ctx1.drawImage(box,canvasesW/2-caracterW*1.5,caracterH*1.75,2.5*caracterW,1.5*caracterH);ctx1.font=canvasesH/25+"px cursive";ctx1.fillText("For your punishement",canvasesW/2-caracterW*0.25,caracterH*2.325);}else if (instructionTimer < 375){ctx1.drawImage(box,canvasesW/2-caracterW*1.5,caracterH*1.75,2.5*caracterW,1.5*caracterH);ctx1.font=canvasesH/20+"px cursive";ctx1.fillText("You will now",canvasesW/2-caracterW*0.25,caracterH*2.25);ctx1.font=canvasesH/25+"px cursive";ctx1.fillText("Watch the end credits",canvasesW/2-caracterW*0.25,caracterH*2.5);}else{credits("mole");}}
    }
    //-----hearts and damage-----// 
    if(inSettings === 0){live();} 
    //-----settings and stuff like that-----//
    settingsStuff();
    //-----ui poison effects-----//
    poisonEffects();
    //-----thing-----//
    if(activated===true){if(countdown<=0){deactivatejelly();}countdown-=1;}
    //-----crystals-----//
    showOwnedCrystals();
    //-----regen-----//
    regen();
}
} requestAnimationFrame(game);
