var mongoose = require('mongoose');
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

import config from './config'

//db connect
mongoose.connect(config.database);

//port setup
var port;
if (process.env.NODE_ENV === 'production') {
    port = process.env.PORT || config.serverPort;
} else {
    port = config.serverPort;
}