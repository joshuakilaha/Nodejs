var http = require('http');    //importing the http modules

function onRequest(request, response){
        response.writeHead(200,{'Content-Type':'text/plain'});   //setting the content type and value
        response.write('Created my first server')   //rendering the plain texts
        response.end();  //done handling the response

}

http.createServer(onRequest).listen(8000);    //creating a server and listening to the port 8000
