var http = require('http');
var path = require('path');
var fs = require('fs');

var mineTypes = {
  '.js': 'text/javascript',
  '.html': 'text/html',
  '.css': 'text/css'
};

http.createServer(function (request, response) {
  if(request.url == '/favicon.ico'){
    response.end();
    return;
  }
  var lookup = path.basename(decodeURI(request.url)) || 'index.html',
  f = '../' + lookup;
  fs.exists(f,function(exists){
    fs.readFile(f,function(err,data){
      if(err){
        console.log(f);
        response.writeHead(500);
        response.end('server Error!');
        return;
      }
      var headers = {'Content-Type':mineTypes[path.extname(f)]};
      console.log(f);
      response.writeHead(200,headers);
      response.end(data);
    });
    return;
  });
}).listen(8080);
