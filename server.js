//server.js

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//config
var database = require('./config/database');

mongoose.connect(database.url);

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json' }));
app.use(methodOverride());


//load the routes
require('./app/routes.js')(app);


//start server
app.listen(8080);
console.log('Server is running on port 8080');

