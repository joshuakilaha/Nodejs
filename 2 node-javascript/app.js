var http = require('http');    //importing or requiring the http modules
var module1 = require('./module1');
var module2 = require('./module2');

function onRequest(request, response){
    response.writeHead(200,{'Content-Type':'text/plain'});   //setting the content type and value
    response.write(module2.myVariable);  // texts
    module2.myFunction();
    response.end();  //done handling the response

}

http.createServer(onRequest).listen(8000);    //creating a server and listening to the port 8000









//anonymous functions

/*
http.createServer(function (request, response){
    response.writeHead(200,{'Content-Type':'text/plain'});   //setting the content type and value
    response.write(module2.myVariable);  // texts
    module2.myFunction();
    response.end();  //done handling the response

}).listen(8000);
 */