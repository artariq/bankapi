var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

var Customer = require('../models/customer');
var Account = require('../models/account');
var Transaction = require('../models/transaction');

app.use( bodyParser.json() ); // to support JSON-encoded bodies 
app.use(bodyParser.urlencoded({
	extended: true
}));

// Configure express
//app.configure('development', function() {
//	mongoose.connect('mongodb://localhost/mybank');
//});

app.get('/api', function (req, res) {
  res.send('Bank API is running');
});

// startup server
port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on port number: ", port);
});

var env = process.env.NODE_ENV || 'development'
if(env === 'production'){
 dburi = 'mongodb://artariq:chitral@ds047040.mongolab.com:47040/rushiesmongodb';
} else{
 dburi = 'mongodb://127.0.0.1:27017/mybank';
 console.log('connected to local db');
}

mongoose.connect(dburi);

var db = mongoose.connection;
db.on('error', function callback () {
    console.error('connection error');
});
db.once('open', function callback () {
    console.error('connection success');
});