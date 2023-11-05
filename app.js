const http = require("http");
function handleRequest(request, response) {
  if (request.url === "/currenttime") {
    response.statusCode = 200;
    response.end('<h1>'+ new Date()+'</h1>');
  }
  else if(request.url==='/'){
    response.statusCode=200;
    response.end('<h1>Hello World</h1>')
  }
  else{
    response.statusCode=404;
     response.end('<h1>404 Error kadu babu  server request correct ga ivvu</h1>')
  }
}
const Server = http.createServer(handleRequest);
Server.listen(3000);
