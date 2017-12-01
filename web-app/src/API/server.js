'user strict'

//import our dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Data = require('./client');

//and create our instances
var app = express();
var router = express.Router();
//set up port
var port = 3001;

mongoose.connect('mongodb://127.0.0.1:27017/weatherdata',{ useMongoClient: true });

//Configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//Pevent errors from Cross Origin Resource Sharing, we set header to allow CORS
app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
 res.setHeader('Cache-Control', 'no-cache');
 next();
}); 
//now we can set the route path & initialize the API
router.get('/', function(req, res) {
 res.json({ message: 'API initialized'});
});

router.get('/data', function(req, res, next) {
  Data.find({}, function(err, data){
    if(err){ return next(err); }
    else {
        res.json(data);
    }
  });
});

//Use our router configuration when we call /api
app.use('/api', router);
//starts the server and listens for requests
app.listen(port, function() {
 console.log(`Running on port ${port}`);
});