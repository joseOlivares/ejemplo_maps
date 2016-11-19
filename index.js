 var express= require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public')); //serving statics files like css, js, images

var port=process.env.PORT || 3000; //this is for heroku


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


http.listen(port, function(){
  console.log('listening on *:'+port);
});


//trabajando con Socket IO
var socketCount = 0; //contador de conexiones


io.on('connection', function(socket){

	console.log('Usuario Conectado...');
	//console.log(socket);
    socketCount++;// Socket has connected, increase socket count
	io.sockets.emit('usuario conectado', socketCount +'Hola');    // Let all sockets know how many are connected
}); //cierra on connection

/*
    socket.on('disconnect', function () {
        socketCount--; // Decrease the socket count on a disconnect	
        io.sockets.emit('usuario conectado', socketCount);    // Let all sockets know how many are connected
        console.log('usuario desconectado');
    });*/
