const WebSocket = require('ws');
const robot = require("robotjs");

const wss = new WebSocket.Server({ port: 8888 });

wss.on('connection', function connection(ws) {
  console.log('websocket client connected');
  
  ws.on('message', function incoming(message) {
    console.log(message)
    if (message === 'btn1') {
      robot.keyTap('right');
    } else if (message === 'btn3') {
      robot.keyTap('left');
    } else if (message === 'l') {
      robot.keyTap('q');
    } else if (message === 'r') {
      robot.keyTap('w');
    } else if (message === 'btn2') {
      robot.keyTap('down');
    } else if (message === 'btn4') {
      robot.keyTap('x');
    }
  });
});

console.log('websocket server started!');