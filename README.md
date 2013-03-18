# Rainbow Bars

Javascript plugin to color web (c) 2013 Alexey Smolyakov (alexey.smolyakov@meander-studio.ru)<br>
Released under Creative Commons Attribution-ShareAlike 3.0

## Overview
Rainbow Bars is a simple js plugin, generating rainbow bars within canvas element and making them animate with the help of setInterval. Again, it is simple.

## Support
Plugin uses HTML5 Canvas.<br>
Browser support: IE 9+, Firefox 18+, Chrome 24+, Safari 5.1+, Opera 12.1+ and major up-to-date mobile browsers.

## Usage
1. Attach rainbowBars.js file or minified version rainbowBars.min.js.

     ```html
     <script src="rainbowBars.js" type="text/javascript"></script>
     ```

2. Create rainbow canvas.
     
     ```javascript
     RB.Init("rainbow");
     ```

   Also you can set background color (black is set by default).
   
     ```javascript
     RB.Init("rainbow", "#f60");
     ```
     
3. Start rainbow bars animation.

     ```javascript
     RB.Start();
     ```
     
   Stop rainbow bars animation.
   
     ```javascript
     RB.Stop();
     ```
     
4. Options (set by default).

     ```javascript
     // interval time in milliseconds 
     RB.ms = 70;
     // amount of animating stripes
     RB.animatingStripesCount = 10;
     // opacity step to change every Draw() call
     RB.opacityStep = 0.02;
     ```
     
5. Complete code example.

     ```javascript
     window.addEventListener("load",function(){
          RB.Init("rainbow");
          RB.Start();
     }, false);
     ```
