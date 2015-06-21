$(function(){

    Tab.width = 400;
    Tab.height = 400;

    Tab(3, function(n, t) {
        var x = t / 100;
        var y = 100 * Math.sin(t / 10);
        var h = t;
        var s = 100;
        var l = 50;
        return {"x": x, "y": y, "h": h, "s": s, "l": l};
    });

    Tab(4, function(n, t) {
        var x = t / 100;
        var y = 100 * Math.sin(t / (10 * (n + 1)));
        var h = t;
        var s = 100;
        var l = 50;
        return {"x": x, "y": y, "h": h, "s": s, "l": l};
    });

    Tab(9, function(n, t) {
        var x = (t / 3) ^ 1;
        var y = 100 * Math.sin(t / 10);
        var h = t;
        var s = 100;
        var l = 10 * n;
        return {"x": x, "y": y, "h": h, "s": s, "l": l};
    });

    Tab(9, function(n, t) {
        var x = t;
        var y = 4000 * Math.sin(t / 10);
        var h = t;
        var s = 100;
        var l = 10 * n;
        return {"x": x, "y": y, "h": h, "s": s, "l": l};
    });

    Tab(9, function(n, t) {
        var x = t;
        var y = 400 * Math.sin(t / 10);
        var h = t;
        var s = 100;
        var l = 10 * n;
        return {"x": x, "y": y, "h": h, "s": s, "l": l};
    });
});
