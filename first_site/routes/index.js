var express = require('express');
var router = express.Router();

//mongo library
var mongo = require('mongodb');
var mongodb= require('mongodb');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });

});



//request for students in the database
router.get('/thelist',function (req,res) {
    //getting mongo client
    var  MongoClient = mongo.MongoClient;

    //define where the mongo server is
    var url = 'mongodb://localhost:27017';

    //connecting to server
    MongoClient.connect(url,{ useNewUrlParser: true },function (err,db) {
        //error
        if(err){
            console.log('Unable to connect to the server', err);

        }
        else {
            console.log('Connection established');

            //getting Documents in the database
            var dbo = db.db("first_site");

            dbo.collection('student').find({}).toArray(function (err,result) {

                if(err){
                    res.send(err) //printing out error
                }
                else if (result.length){
                    res.render('studentlist',{
                        "studentlist" : result
                    });
                }
                else {
                    res.send('No Documents Found');
                }

            });

        }
    });

});



//Add new student
router.get('/newstudent', function (req, res) {
    res.render('newstudent', {title: 'Add student'}) //render the jade file
});


router.post('/addstudent', function (req,res) {
    var MongoClient = mongodb.MongoClient;


    var url = 'mongodb://localhost:27017';

    MongoClient.connect(url,{ useNewUrlParser: true }, function(err,db){
        if(err){
            console.log("Unable to connect to server 1");
        } else {
            console.log('Connected to server');

            var dbo = db.db("first_site");

            //collection = db.collection('students');

            var student1 = {student : req.body.student,
                street: req.body.street,
                city: req.body.city,
                state: req.body.state,
                sex: req.body.sex,
                gpa: req.body.gpa
            };

            dbo.collection('students').insertOne(student1, function (err, result) {
                if(err){
                    console.log(err)
                }else{
                    res.redirect("thelist");
                }
                db.close();

            })
        }
    });

});

//////////////////////////////////////////////////////////////////////////////////////////////////






/*
router.post('/addstudent',function(req,res){

  var MongoClient = mongodb.MongoClient;

    var url = 'mongodb://localhost:27017';

    MongoClient.connect(url,{ useNewUrlParser: true },function (err,db) {
      if(err){
        console.log('Unable to connect to server');
      }
      else {
        console.log('Connected to server');
      }

        var dbo = db.db("first_site");

     // var collection = db.collection('students');
       //  dbo1.collection('student');

        var student1 = {student : req.body.student,
                        street: req.body.street,
                        city: req.body.city,
                        state: req.body.state,
                        sex: req.body.sex,
                        gpa: req.body.gpa};

        dbo.collection('student').insertMany([student1],function (err,result){
       // dbo1.insertOne([student1,function (err,result) {

        //collection.insert([student1], function (err,result) {

            if(err){
              console.log(err);
            }
            else{
              res.redirect("thelist");
            }
            db.close();
        });

        });
});
*/
module.exports = router;








