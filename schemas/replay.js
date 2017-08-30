var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PlayerSchema   = new Schema({
    handle: String,
    team: Number,
    char: Number
});

var ReplaySchema   = new Schema({
    name: String,
    time : { type : Date, default: Date.now, expires: 60*60*24*30 },
    map: String,
    link: String,
    players: [PlayerSchema]
});

module.exports = mongoose.model('Replay', ReplaySchema);