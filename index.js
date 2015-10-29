// Express app
var app = express();

// Creat http server with node
// pass it express and listen on 8080
var server = require('http').createServer(app).listen(8080);

// Init socket.io and listen to express/http server
var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
  console.log('client connected');
  agx.initGame(io, socket);
});
