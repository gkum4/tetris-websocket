const WebSocket = require('ws');
const robot = require("robotjs");

const wss = new WebSocket.Server({ port: 8888 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    if (message === '1') {
      robot.keyTap('right');
    }
  });
});

console.log('started')