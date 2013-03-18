/*
    Rainbow Bars plugin v2.0.0
    Meander Studio (c) 2013
    www.meander-studio.ru
	Thanks to http://krazydad.com/tutorials/makecolors.php
*/

var RB = { };
RB.Init = function(elementId, bgColor){
	// interval time in milliseconds 
	RB.ms = 70;
	// error
	RB.error = null;
	// create canvas
	var canvas = document.createElement("canvas");
	canvas.style.backgroundColor = (typeof bgColor === 'undefined') ? "#000" : bgColor;
	document.getElementById(elementId).appendChild(canvas);
	// get 2D context
	try {
		RB.c = canvas.getContext("2d");
	}
	catch (e) {
		RB.error = e;
		canvas.width = RB.w; canvas.height = RB.h; canvas.style.color = "#fff";
		canvas.innerHTML = "Your browser is " + navigator.appName + ". Deal with it.";
		return;
	}
	// define width and height values
	RB.w = canvas.parentNode.offsetWidth;
	RB.h = canvas.parentNode.offsetHeight;
	// set canvas width and height
	canvas.width = RB.w;
	canvas.height = RB.h;
	// amount of animating stripes
	RB.animatingStripesCount = 10;
	// opacity step to change every Draw() call
	RB.opacityStep = 0.02;
	// animation interval id
	RB.intervalId = 0;
	
	// stripes [width, color, animating, opacity (from), opacity2 (to)]
	RB.stripes = [];
	// cycle vars
	var rest = RB.w;
	// rainbow vars
	var phase = 10; var center = 128; var width2 = 128; var bars = RB.w / 2;
	var frequency = Math.PI * 2 / bars;
	// generating stripes
	while (rest > 0){
		// iteration counter
		var i = RB.stripes.length;
		// generate colors
		var r = Math.round(Math.sin(frequency*i+2+phase) * width2 + center);
		var g = Math.round(Math.sin(frequency*i+0+phase) * width2 + center);
		var b = Math.round(Math.sin(frequency*i+4+phase) * width2 + center);
		// define color
		var color = "rgb(" + r + "," + g + "," + b + ")"; 
		// define opacities
		var op = Math.random();
		var op2 = Math.random();
		// define stripe width
		var currWidth = (rest > 0 && rest < 4) ? rest : RB.GetRandomInt(1,3);
		// rest width
		rest -= currWidth;
		// add new stripe object to array
		RB.stripes.push([currWidth, color, false, op, op2]);
	}
	// add animating stripes
	for (i = 0; i < RB.animatingStripesCount; i++){
		// set animating param to true
		RB.stripes[RB.GetRandomInt(0, RB.stripes.length - 1)][2] = true;
	}
}

RB.Draw = function(){
	// check error
	if (RB.error != null){
		return;
	}
	// calculation xOffset for rects
	var xOffset = 0;
	// clear canvas
	RB.c.clearRect(0, 0, RB.w, RB.h);
	// loop all stripes
	for (var i = 0; i < RB.stripes.length; i++){
		// extract one stripe
		var s = RB.stripes[i];
		// if animating
		if (s[2]){
			// if end animating
			if (Math.abs(s[3] - s[4]) < RB.opacityStep){
				// select another stripe to animate w/ animating flag false
				var index = RB.GetRandomInt(0, RB.stripes.length - 1);
				while (RB.stripes[index][2]){
					index = RB.GetRandomInt(0, RB.stripes.length - 1);
				}
				RB.stripes[index][2] = true;
				// set current animating flag to false
				s[2] = false;
				// generate new opacity
				s[4] = Math.random();
				// update stripes
				RB.stripes[i] = s;
			}
			// if continue animating stripe
			else {
				// change opacity
				((s[3] - s[4]) < 0) ? s[3] += RB.opacityStep : s[3] -= RB.opacityStep;
				// update stripes
				RB.stripes[i] = s;
			}
		}
		// set global alhpa (strange but it works)
		RB.c.globalAlpha = s[3];
		// set fill color
		RB.c.fillStyle = s[1];
		// fill rect
		RB.c.fillRect(xOffset, 0, s[0], RB.h);
		// upadte offset
		xOffset += s[0];
	}
}

RB.Start = function(){
	RB.intervalId = setInterval(RB.Draw, RB.ms);
}

RB.Stop = function(){
	clearInterval(RB.intervalId);
}

RB.GetRandomInt = function(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}