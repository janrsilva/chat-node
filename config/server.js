/**
 * Importar o framework express
 */
var express = require('express');

/**
 * Importar o modulo cosign
 */
var cosign = require('consign');

/**
 * Importar o modulo body-parser
 */
var bodyParser = require('body-parser');

/**
 * Importar express-validator
 */
var expressValidator = require('express-validator');

/**
 * Instancia o objeto app
 */
var app = express();

/**
 * Setar o motor de views no express
 */
app.set('views engine', 'ejs');
app.set('views', './application/views');

/**
 * Configurar o middleware express.static
 */
app.use(express.static('./application/public'));
/**
 * Configurar o middleware bodyParser
 */
app.use(bodyParser.urlencoded({extended: true}));

/**
 * Fazer o autoload dos controllers, rotas, models.
 */

cosign()
    .include('application/routes')
    .then('application/models')
    .then('application/controllers')
    .into(app);

/**
 * Exportar o objeto app
 */
module.exports = app;