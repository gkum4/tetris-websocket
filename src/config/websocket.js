const WebSocket = require('ws');
const robot = require("robotjs");

const wss = new WebSocket.Server({ port: 8888 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    if (message === '1') {
      robot.typeString('`');
    }
    if (message === '2') {
      robot.typeString('`');
    }
    if (message === '3') {
      robot.typeString('`');
    }
    if (message === '4') {
      robot.typeString('`');
    }
    if (message === '5') {
      robot.typeString('`');
    }
    if (message === '6') {
      robot.typeString('`');
    }
  });
});