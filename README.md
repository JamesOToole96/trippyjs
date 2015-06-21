#####What to improve
- Potentially change the variable name of x because really it is theta
- Add diagram to explain how it works
- Add some trippy images to README.md
- Use forEach

# trippy.js

[Live Site](trippyjs.github.io/trippyjs)

This script is designed to make it really easy to make trippy animations. Just define a small function an it will turn into an animated canvas.
Please make a fork so we can see what cool stuff gets made, GitHub pages will work with any fork so your trippy animations will be hosted online.

##Quick start

The only file you need to change is script.js. This contains some definitions of Tab objects.
Tab() takes two parameters the first is the number of points or lines you want drawn, the second is a function that is used to draw the animation.
The function will be parsed 'n' which is the point/line number and 't' which is the frame or time.
The function should return an object with the following properties:
All properties should be numbers of any size.
`x` The angle of the point drawn.
`y` The between the center and the point drawn.
`h` The hue of the point
`s` The saturation of the point
`l` The lightness of the point

######Example script.js
```javascript
$(function(){

    Tab(3, function(n, t) {
        var x = t / 100;
        var y = 100 * Math.sin(t / 10);
        var h = t;
        var s = 100;
        var l = 50;
        return {"x": x, "y": y, "h": h, "s": s, "l": l};
    });

```
### Browser support
General browser support is evergreen browsers.
Browser features that cause support issues are primarily [flex-box](http://caniuse.com/#feat=requestanimationframe) and [requestAnimationFrame](http://caniuse.com/#feat=flexbox).
