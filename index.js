var http = require('http');

var history = [];

http.createServer(function(req, res) {

	var all = '';	
	req.on('data', function(data) {
		all += data.toString();
	});
	
	req.on('end', function() {
		history.push(all);
	    res.end(JSON.stringify(history, true, 2));
	});
    
    
}).listen(process.env.PORT || 5000);
