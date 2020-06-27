const five = require("johnny-five");
const board = new five.Board();

board.on('ready', () => {
  console.log('Ready!');
  
  const redLed = new five.Led(7);
  const greenLed = new five.Led(3);
  redLed.blink(500);
  greenLed.blink(1000);
});
