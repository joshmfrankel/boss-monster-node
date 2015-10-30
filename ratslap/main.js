
// Application includes
var express = require('express');
var app     = express();
var http    = require('http').Server(app);
var io      = require('socket.io')(http);

// Game Class includes
var Game   = require('./game/game.js');
var Player = require('./game/player.js');
var Test   = require('./spec/test.js');

// Load files in the client directory as static assets
app.use(express.static('client'));

// Router
app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/index.html');
});

// Server Socket.io
io.on('connection', function(socket) {
  console.log('a user connected');
});

// HTTP server
http.listen(3000, function(){
  console.log('listening on *:3000');
});

// Logic
// var player1 = new Player('josh');
// var player2 = new Player('megan');
// var player3 = new Player('ripley');
// var game    = new Game([player1, player2, player3]);
// console.log(game.players[0].hand);
