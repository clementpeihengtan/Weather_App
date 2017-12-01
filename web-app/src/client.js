var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//create new instance of the mongoose.schema. the schema takes an 
//object that shows the shape of your database entries.
var weatherdata = new Schema({
 id: String,
 time: String,
 temperature: Number,
 humidity: Number
},{collection: 'Data'});
//export our module to use in server.js
module.exports = mongoose.model('Data', weatherdata, 'data');