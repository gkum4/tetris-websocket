const WebSocket = require('ws');
const robot = require("robotjs");

const wss = new WebSocket.Server({ port: 8888 });

wss.on('connection', function connection(ws) {
  console.log('websocket client connected');
  
  ws.on('message', function incoming(message) {
    console.log(message)
    if (message === 'right') {
      robot.keyTap('right');
    } else if (message === 'left') {
      robot.keyTap('left');
    } else if (message === 'q') {
      robot.keyTap('q');
    } else if (message === 'w') {
      robot.keyTap('w');
    } else if (message === 'down') {
      robot.keyTap('down');
    }
  });
});

console.log('websocket server started!');