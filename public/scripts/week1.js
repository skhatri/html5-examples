var init = function () {

    /**
     * creates a random number between 0 and 255. then converts to
     * string format with base16 (hex).
     * if the hex is a single digit number less than "f" (16), then
     * add 0 to the front of it.
     * @returns {string}
     */
    function randomHex() {
        var val = parseInt(Math.random() * 255, 10).toString(16);
        if (val.length == 1) {
            return "0" + val;
        }
        return val;
    }


    var week1Canvas = document.getElementById("week1Canvas");
    var context = week1Canvas.getContext("2d");

    var loadWeek1 = function () {
        //setting the fill colour to fuschia. any fill method will use fillStyle colour
        context.fillStyle = "#ff00ff";
        //filling a solid rectangle starting at 0, 0 and ending at 100, 100 with fill colour
        context.fillRect(0, 0, 100, 100);

        //using strokeText to write text at 100,80 and ensuring the width never goes past 120px
        context.strokeStyle = "#443344";
        context.strokeText("Hello Canvas", 100, 80, 120);

        //move the context to point 120, 90
        context.moveTo(120, 90);
        //draw the line from current point 120,90 to 0,120
        context.lineTo(0, 120);
        //the stroke method completes the drawing set by moveTo and lineTo
        context.stroke();

        context.moveTo(100, 90);
        context.lineTo(0, 120);
        context.stroke();

        //use fill method to draw the text and fill it with fill colour of fuschia
        context.fillText("Fill text", 10, 150, 150);


        var x = 100, y = 100, r = 100;
        for (var i = 0; i < 5; i += 1) {
            //resets the current path and begins a new path for drawing
            context.beginPath();
            //random x position
            x = parseInt(Math.random() * 200, 10);
            //random y position
            y = parseInt(Math.random() * 200, 10);
            //random r value to define the radius of the circle.
            //same r value could be used to derive the x2, y2 value from x1, y1 position
            //when drawing a rectangle later.
            r = parseInt(Math.random() * 100, 10);
            //concatenating random hex values so the stroke style colour is a random one for each stroke.
            context.strokeStyle = "#" + randomHex() + randomHex() + randomHex();

            //TODO replace the below line with an API method to create rectangle
            //try strokeRect and fillRect. which one would you use?
            //both strokeRect and fillRect take 4 numbers, starting x,y and the end x,y. you can
            //calculate ending x,y value by using the random r value, so the rectangles are also
            //of varying size.


            //create an arc starting at x,y with radius of r starting at angle 0 and ending at 360 which means
            //it is a full circle. draw it anticlockwise
            //comment arc method when you have added rect method.
            context.arc(x, y, r, 0, 360, true);
            context.lineWidth = 5;
            //complete the drawing
            context.stroke();
        }
        //enable the below line to apply animation. drawing same shapes randomly at frequent intervals.
        //applyAnimation();
    };

    var applyAnimation = function () {
        window.requestAnimationFrame(function () {
            loadWeek1();
        });
    };

    var downloadInit = function () {
        var downloader = document.getElementById("downloadweek1");
        downloader.onclick = function () {
            var week1 = document.getElementById("week1Canvas");
            window.open(week1.toDataURL(), 'image');
        };
    };
    loadWeek1();
    downloadInit();
}

window.onload = init;
