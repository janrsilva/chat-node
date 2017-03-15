function Home(app, req, res) {
    this._app = app;
    this._req = req;
    this._res = res;    
}

Home.prototype.index = function () {
    this._res.render('index');
}

Home.prototype.login = function () {
    this._res.render('index');
}

module.exports = function () {
    return Home;
}