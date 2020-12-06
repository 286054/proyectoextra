const http = require('http');

http.createServer((request, response)=>{
  fs.readFile('index.html',(err, data)=>{

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Text sample de servidor ");
    if(request.url == "/hola")
      reponse.write("hola");

  response.end();
  });
}).listen(4000);
