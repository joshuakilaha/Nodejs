var http = require('http');    //importing or requiring the http modules

function onRequest(request, response){
        response.writeHead(200,{'Content-Type':'text/plain'});   //setting the content type and value
        response.write('Created my first server')   //rendering plain texts
        response.end();  //done handling the response

}

http.createServer(onRequest).listen(8000);    //creating a server and listening to the port 8000
