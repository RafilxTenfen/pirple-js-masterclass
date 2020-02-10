// Dependencies
var http = require('http');
var url = require('url');

var server = http.createServer((req, res) => {

    var parsedUrl = url.parse(req.url, true);

    var path = parsedUrl.pathname;
    var trimedPath = path.replace(/^\/+|\/+$/g, '');

    var queryStringObject = parsedUrl.query;

    var method = req.method.toLowerCase();

    res.end('Hello World \n');

    console.log('Request received on path: ' + trimedPath + ' with method: ' + method + ' query string parameters ', queryStringObject);
});

server.listen(3000, () => {
    console.log("server listen 3000")
});