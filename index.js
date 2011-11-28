var http = require('http');
var express = require('express');

var app = express.createServer();

var history = [];

app.use(express.bodyParser());

app.get(/.*/, function(req, res) {
	res.send(history);
})

app.post(/.*/, function(req, res) {
	history.push(req.body);
	res.end();
});

app.listen(process.env.PORT || 5000);
