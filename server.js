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
    app.use(express.static('client/build'));
    app.use('/replay/*',express.static('client/build'));
    port = process.env.PORT || config.serverPort;
} else {
    port = 3000;
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
        if (!(req.body.name && req.body.map && req.body.players)) {
            return res.json({ error: "Missing at least one argument!", success: false });
        }
        Replay.findOne({
            name: req.body.name
        },function(err, oldReplay) {
            if (err)
                return res.json({ error: "Error occured!", success: false });
            if (oldReplay != null) {
                return res.json({ error: "File with this name already exists!", success: false });
            } else {
                var replay = new Replay();
                replay.name = req.body.name;
                replay.map = req.body.map;
                replay.players = req.body.players;
                replay.save(function(err) {
                if (err)
                    return res.json({ error: err, success: false });
                return res.json({ success: true, message: replay.name + " uploaded successfully!" });
                });
            }
        });
    })
    .delete(function(req, res) {
        Replay.remove({
            __v: 0
        }, function(err, replays) {
            if (err)
                return res.send(err);
            return res.json({ message: 'Successfully deleted replays!'});
        });
    });
    
    
//get replay
router.route('/replay/:name')
    .get(function(req, res) {
        Replay.findOne({
            name: req.params.name
        },function(err, replay) {
            if (err)
                return res.json({ error: "Error occured!", success: false });
            if (replay == null) {
                return res.json({ error: "Replay not found!", success: false });
            } else {
                var r = replay.toObject();
                r.success = true;
                return res.json(r);
            }
        });
    });
    
//search replay
router.route('/search/:name')
    .get(function(req, res) {
        Replay.find({
            players:{$elemMatch:{handle: decodeURI(req.params.name)}}
        },function(err, replay) {
            if (err)
                return res.json({ error: "Error occured!", success: false });
            if (replay == null) {
                return res.json({ error: "Replay not found!", success: false });
            } else {
                return res.json(replay);
            }
        });
    });

//use router
app.use('/api', router);
app.listen(port);
console.log('Magic happens on port ' + port);