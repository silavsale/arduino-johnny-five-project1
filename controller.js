const five = require('johnny-five');

const board = new five.Board({ port: "COM7" });

board.on("ready", function () {
    let led = new five.Led(13);
    led.blink(500);
});

