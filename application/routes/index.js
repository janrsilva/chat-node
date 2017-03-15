module.exports = function (app) {
    app.post('/login',function (req, res) {
        res.render('index');
    });
    app.get('/',function (req, res) {
        res.render('index');
    });
}