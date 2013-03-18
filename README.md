# Rainbow Bars

Javascript plugin to color web (c) 2013 Alexey Smolyakov (alexey.smolyakov@meander-studio.ru)
Released under Creative Commons Attribution-ShareAlike 3.0

## Overview
Rainbow Bars is a simple js plugin, generating rainbow bars within canvas element and making them animate with the help of setInterval. Again, it is simple.

## Support
Plugin uses HTML5 Canvas. Browser support: IE 9+, Firefox 18+, Chrome 24+, Safari 5.1+, Opera 12.1+ and major up-to-date mobile browsers.

## Usage
1. Attach rainbowBars.js file or minified version rainbowBars.min.js.
     <script src="rainbowBars.js" type="text/javascript"></script>
2. Create rainbow canvas.
     RB.Init("rainbow");
   Also you can set background color (black is set by default).
     RB.Init("rainbow", "#f60");
3. Start rainbow bars animation.
     RB.Start();
   Stop rainbow bars animation.
     RB.Stop();
4. Options (set by default).
     // interval time in milliseconds 
     RB.ms = 70;
     // amount of animating stripes
     RB.animatingStripesCount = 10;
     // opacity step to change every Draw() call
     RB.opacityStep = 0.02;
Complete code example.
window.addEventListener("load",function(){
    RB.Init("rainbow");
    RB.Start();
}, false);