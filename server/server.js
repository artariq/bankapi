var express = require('express');
var mongoose = require('mongoose');

var app = express();
app.use(express.bodyParser());

var Customer = require('./models/customers');
var Account = require('./models/accounts');
var Transaction = require('./models/transactions');

// Configure express
app.configure('development', function() {
	mongoose.connect('mongodb://localhost/customers');
});

app.get('/api', function (req, res) {
  res.send('Bank API is running');
});

// startup server
port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on port number: ", port);
});
