var socket = io();

$('.create-player-form').submit(function(e) {
  e.preventDefault();
  var playerName = $(this).find('#playerName').val();
  if (playerName.length !== 0) {
    socket.emit('create player', playerName);
    $('.player-options').show();
  }
});

$('.create-game').on('click', function() {
  socket.emit('create game', true);
});

socket.on('player object', function(player) {
  var player = player;
});
