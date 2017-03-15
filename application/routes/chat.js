module.exports = function (app) {
    app.post('/chat',function (req, res) {
        new app.application.controllers.Chat(app, req, res).send();
    });
    app.get('/chat',function (req, res) {
        new app.application.controllers.Chat(app, req, res).index();
    });
}