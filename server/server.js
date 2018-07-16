var http = require('http');
var path = require('path');
//var url = require('url');
var fs = require('fs');

var mineTypes = {
  '.js': 'text/javascript',
  '.html': 'text/html',
  '.css': 'text/css'
};

/*
var pages = [
    {route: '', output: 'Woohoo!'},
    {route: 'about', output: 'シンプルなサンプルコードです'},
    {route: 'another page' , output: function() {return 'これが'+this.route;}}
]*/

http.createServer(function (request, response) {
  if(request.url == '/favicon.ico'){
    response.end();
    return;
  }
  //var lookup = url.parse(decodeURI(request.url)).pathname;
  //lookup = path.normalize(lookup);
  //lookup = (lookup == '/') ? 'index.html' : lookup;
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
  /*
  pages.forEach(function(page){
    if(page.route == lookup){
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end(typeof page.output === 'function' ? page.output():page.output);
    }
  });
  if(!response.finished){
    response.writeHead(404);
    response.end('ページが見つかりません！')
  }*/
}).listen(8080);
