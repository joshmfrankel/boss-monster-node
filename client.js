var socket = io();
$('form').submit(function(){
  socket.emit('chat message', $('#m').val());
  $('#m').val('');
  return false;
});
socket.on('chat message', function(msg){
  $('#messages').append($('<li>').text(msg));
});
socket.on('disconnect', function() {
  console.log('user disconnected');
  $('#messages').append($('<li>').text('a user disconnected'));
});
socket.on('user connect', function() {
  console.log('connected');
});
