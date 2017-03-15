module.exports = function (app) {
    app.post('/login',function (req, res) {
        new app.application.controllers.Home(app, req, res).login();
    });
    app.get('/',function (req, res) {
        new app.application.controllers.Home(app, req, res).index();
    });
}