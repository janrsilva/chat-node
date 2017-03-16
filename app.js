/**
 * Importar as configurações do servidor
 */

var app = require('./config/server');


/**
 * Parametrizar a porta de escuta
 */

var server = app.listen(8080,function(){
    console.log('Servidor Iniciado!');
});

/**
 * Colocar o socket para escutar o app.
 */
var io = require('socket.io').listen(server);

app.set('io', io);

/**
 * Cria um evento para quando acontecer uma conexão
 * 
 */
io.on('connection', function (socket) {
    console.log("Usuário conectado!");

    socket.on('disconnect', function () {
        console.log("Usuário desconectado!");
    })
});