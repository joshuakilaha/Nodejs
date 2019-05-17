var http = require('http');    //importing or requiring the http modules
var fs = require('fs');  // fs = filesystem


function onRequest(request, response){
        response.writeHead(200,{'Content-Type':'text/html'});   //setting the content type and value
        fs.readFile('./index.html', null, function (error, data) {
                if(error) {
                        response.writeHead(404);
                        response.write('File not found!');
                }else {
                        response.write(data);
                }
                response.end();  //done handling the response

        });

}

http.createServer(onRequest).listen(8080);    //creating a server and listening to the port 8000
