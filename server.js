var mongoose = require('mongoose');
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

var Replay = require('./schemas/replay');

var config = require('./config');

//db connect
mongoose.connect(config.database,{useMongoClient: true});

//port setup
var port;
if (process.env.NODE_ENV === 'production') {
    port = process.env.PORT || config.serverPort;
} else {
    port = config.serverPort;
}

//allow CORS
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Coantrol-Allow-Headers', 'Content-Type');
  console.log('Req made');
  next();
});

var router = express.Router();

//get lastest replays, new replay
router.route('/replay')
    .get(function(req, res) {
        Replay.find({
            __v: 0
        },function(err, replays) {
            if (err)
                return res.send(err);
            return res.json(replays);
        }).limit(15);
    })
    .post(function(req, res) {
    });
    
//get replay
router.route('/replay/:name')
    .get(function(req, res) {
    });

//use router
app.use('/api', router);
app.listen(port);
console.log('Magic happens on port ' + port);