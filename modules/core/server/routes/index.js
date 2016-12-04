var controller = require('../controllers');

module.exports = function (app) {

    app.get('/', function (req, res) {
        res.render(app.core.dirname + "/public/views/index.html");
    });
}