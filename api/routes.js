(function() {
    "use strict";

    module.exports = function(app) {
        app.use(require('./setup/express').setupHeaders);

        app.get('/', function(req, res, next) {
            res.status(200).send('Welcome to the mean-tasks API.');
        });

        app.get('/tasks/:id?', function(req, res, next) {

        });

        app.post('/tasks', function(req, res, next) {

        });

        app.put('/tasks', function(req, res, next) {

        });

        app.delete('/tasks', function(req, res, next) {

        });
    };
})();