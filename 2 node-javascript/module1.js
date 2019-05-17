function myFunction(){

    console.log('function was called');
}

var myString = 'String!';

module.exports.myFunction = myFunction;  //making it available to other files
module.exports.myString = myString;

