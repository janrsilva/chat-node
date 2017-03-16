function Home(app, req, res) {
    this._app = app;
    this._req = req;
    this._res = res;
    this._io = this._app.get('io');
}

Home.prototype.index = function () {
    this._res.render('index', {errors:[]});
}

Home.prototype.login = function () {
    var body = this._req.body;

    this._req.assert('apelido', 'Apelido é obrigatório').notEmpty();
    this._req.assert('apelido', 'Apelido deve possuir tamanho 3 e 15 caracteres').len(3, 15);
    
    var errors = this._req.validationErrors();

    if(errors !== false){
        this._res.render('index', {errors: errors, apelido: body.apelido});
    }

    this._io.emit('alguemEntrou', {apelido: body.apelido, msg: body.apelido + " acabou de entrar..."});

    errors = [];
    // this._res.redirect('/chat?apelido='+body.apelido);
    this._res.render('chat', {errors: errors, usuario: body.apelido});
}

module.exports = function () {
    return Home;
}