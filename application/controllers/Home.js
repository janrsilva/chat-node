function Home(app, req, res) {
    this._app = app;
    this._req = req;
    this._res = res;    
}

Home.prototype.index = function () {
    this._res.render('index');
}

Home.prototype.login = function () {
    var body = this._req.body;

    this._req.assert('apelido', 'Apelido é obrigatório').notEmpty();
    this._req.assert('apelido', 'Apelido deve possuir tamanho 3 e 15 caracteres').len(3, 15);
    
    var errors = this._req.validationErrors();

    if(errors !== false){
        this._res.render('index', {errors: errors, apelido: body.apelido});
    }
    errors = [];
    this._res.render('chat', {errors: errors});
}

module.exports = function () {
    return Home;
}