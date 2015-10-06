"use strict";

var config = require('./setup/config');
var app = require('express')();
app.use(require('body-parser').json());
require('./routes')(app);
app.listen(config.port);
console.log('Listening on ' + config.port + '...');