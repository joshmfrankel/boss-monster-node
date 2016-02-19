
// Application includes
var express = require('express');
var app     = express();
var http    = require('http').Server(app);
var io      = require('socket.io')(http);

// Game Class includes
var Game   = require('./game/game.js');
var Player = require('./game/player.js');
var Test   = require('./spec/test.js');

var config = {
  debug: true,
}

// Load files in the client directory as static assets
app.use(express.static('client'));

// Router
app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/index.html');
});

// Server Socket.io
io.on('connection', function(socket) {
  debug_helper('A user connected');

  socket.on('disconnect', function() {
    debug_helper('A user disconnected');
  });

  socket.on('create game', function() {
    debug_helper('A new game was created');
  });

  socket.on('create player', function(playerName) {
    var player = new Player(playerName);
    io.emit('player object', player);
    debug_helper('player ' + playerName + ' was created');
  });
});

// HTTP server
http.listen(3000, function(){
  debug_helper('listening on *:3000');
});

function debug_helper(message) {
  if (config.debug) console.log('SERVER :: ' + message);
}

// Logic
// var player1 = new Player('josh');
// var player2 = new Player('megan');
// var player3 = new Player('ripley');
// var game    = new Game([player1, player2, player3]);
// console.log(game.players[0].hand);
