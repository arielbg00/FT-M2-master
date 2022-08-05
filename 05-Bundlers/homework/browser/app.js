// (function () {
  // ES6:
  // import {whiteboard} from "./whiteboard.js";
  // import io from "socket.io-client";

  var whiteboard = require("./whiteboard");
  var io = require("socket.io-client");
  var socket = io(window.location.origin);  

  // var whiteboard = window.whiteboard;  // ==> whiteboard.js
  // var socket = window.io(window.location.origin); // ==> node_modules/socket.io-client

  socket.on('connect', function () {
    console.log('Connected!');
  });

  socket.on('load', function (strokes) {

    strokes.forEach(function (stroke) {
      var start = stroke.start;
      var end = stroke.end;
      var color = stroke.color;
      whiteboard.draw(start, end, color, false);
    });

  });

  socket.on('draw', function (start, end, color) {
    whiteboard.draw(start, end, color, false);
  });

  whiteboard.on('draw', function (start, end, color) {
    socket.emit('draw', start, end, color);
  });

// })();
