var http = require('http');    //importing or requiring the http modules
var module1 = require('./module1'); //initializing the module on the app.js file
var module2 = require('./module2'); //initializing the module on the app.js file

function onRequest(request, response){
    response.writeHead(200,{'Content-Type':'text/plain'});   //setting the content type and value
    response.write(module2.myVariable);  // linking the module and variable
    module2.myFunction(); // calling the variable from the module file
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