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

require('socket.io').listen(server);