var url = require('url');
var fs = require('fs');



function renderingHTML(path, response){

    response.writeHead(200,{'Content-Type':'text/html'});   //setting the content type and value
    fs.readFile(path, null, function (error, data) {
        if(error) {
            response.writeHead(404);
            response.write('File not found!');
        }else {
            response.write(data);
        }
        response.end();  //done handling the response

    });

}


module.exports = {

    handleRequest: function (request, response) {
        response.writeHead(200, {'Content-Type': 'text/html'});

        var path = url.parse(request.url).pathname;  //which url the user entered

        switch (path) {
            case '/':
                renderingHTML('./index.html',response);
                break;

            case '/login':
                renderingHTML('./login.html',response);
                break;

            default:
                response.writeHead(404);
                response.write('Route not defined');
                response.end();

        }
    }
};