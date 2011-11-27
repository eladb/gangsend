var http = require('http');

http.createServer(function(req, res) {
    res.end('Gangsend 1.0');
}).listen(process.env.PORT || 5000);
