$(function(){

    var tabObjects = [];

    Tab = function(numberOfPoints, func) {
        var tab = func;
        tab.points = [];
        for (i = 0; i < numberOfPoints; i++) {
            tab.points.push({"x": undefined, "y": undefined});
        }
        var i = tabObjects.push(tab) - 1;
        var canvas = $("<canvas></canvas>").attr("id", "canvas" + String(i));
        $("#main").append(canvas);
        tab.canvas = canvas[0].getContext("2d");
        canvas[0].height = Tab.height;
        canvas[0].width = Tab.width;
    };

    Tab.height = 400;
    Tab.width = 400;

    var t = 0;
    function render(highResTimestamp) {
        requestAnimationFrame(render);
        t ++;
        for (i = 0; i < tabObjects.length; i++) {
            var tab = tabObjects[i];

            for (n = 0; n < tab.points.length; n++) {
                var point = tab.points[n]
                tab.canvas.beginPath();
                tab.canvas.moveTo(point.x, point.y);
                var result = tab(n, t);
                var angle = ((2 * Math.PI) / tab.points.length) * n;
                var x = (result.y * Math.cos(result.x + angle)) + (Tab.width / 2);
                var y = (result.y * Math.sin(result.x + angle)) + (Tab.height / 2);
                var hsl = "hsl(" + String(result.h) + ", " + String(result.s) + "%, " + String(result.l) + "%)";
                tab.canvas.strokeStyle = hsl
                tab.canvas.lineTo(x, y);
                point.x = x;
                point.y = y;
                tab.canvas.stroke();
                tab.canvas.closePath();
            }
        }
    }
    requestAnimationFrame(render);
});
