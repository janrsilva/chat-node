function Chat(app, req, res) {
    this._app = app;
    this._req = req;
    this._res = res;    
}

Chat.prototype.send = function () {
    this._res.render('chat');
}

Chat.prototype.index = function () {
    this._res.render('chat');
}

module.exports = function () {
    return Chat;
}