var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
        response.writeHead(404);
        response.end();
        return;
    }
    response.writeHead(200);
    //console.log(__dirname + url); //실습파일이 위치하는곳? 이해 안가지만 넘어가!
    // 아마 이거 때문에 cmd창에서 어딜 가는지 다 보여준다.
    response.end(fs.readFileSync(__dirname + url));
 
});
app.listen(3000);