var http = require('http');
var fs = require('fs');
var url = require("url");

var app = http.createServer(function (request, response) {
  var _url = request.url;
  console.log(_url)
  var queryData = url.parse(_url, true).query;
  console.log(queryData.id)
  var title = queryData.id
  if (_url == '/') {
    title = "Welcome"
  }
  if (_url == '/favicon.ico') {
    return response.writeHead(404);
  }
  fs.readFile(`data/${queryData.id}`, 'utf8', function (err, description) {
    var templete = `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="index.html">WEB</a></h1>
      <ul>
        <li><a href="/?id=HTML">HTML</a></li>
        <li><a href="/?id=CSS">CSS</a></li>
        <li><a href="/?id=JavaScript">JavaScript</a></li>
      </ul>
      <h2>${title}</h2>
      <p>${description}</p>
    </body>
    </html>
    
    `;
    response.end(templete);
  })
  response.writeHead(200);

  // response.end(fs.readFileSync(__dirname + _url));
  //사용자가 접속한 url에 따라서 (fs.readFileSync(__dirname + _url))이부분을 읽어줌
  //프로그래밍 적으로 사용자에게 전달할 데이터를 정함
});
app.listen(3000);