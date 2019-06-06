let express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
//mongoose.connect('localhost:27017/test');

const mongoDB = 'mongodb://localhost:27017/test';
mongoose.connect(mongoDB, { useNewUrlParser: true });
const Schema = mongoose.Schema;


const userDataSchema = new Schema({
    title: {type: String, required: true},
    content: String,
    author: String
}, {collection: 'user-data'});

const UserData = mongoose.model('UserData', userDataSchema);

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index');
});

router.get('/get-data', function(req, res) {
    UserData.find()
        .then(function(doc) {
            res.render('index', {items: doc});
        });
});

router.post('/insert', function(req, res) {
    const item = {
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
    };

    const data = new UserData(item);
    data.save();

    res.redirect('/');
});

router.post('/update', function(req, res) {
    const id = req.body.id;

    UserData.findById(id, function(err, doc) {
        if (err) {
            console.error('error, no entry found');
            let pop = require('popups');
            pop.alert({
                content : 'No Entry Found'
            });

        } else {
            doc.title = req.body.title;
            doc.content = req.body.content;
            doc.author = req.body.author;
            doc.save();
        }
    });
    res.redirect('/');
});

router.post('/delete', function(req, res) {
    const id = req.body.id;
    UserData.findByIdAndRemove(id).exec();
    res.redirect('/');
});

module.exports = router;