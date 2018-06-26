var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/bookstore";
//const jwt = require('jsonwebtoken');


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
MongoClient.connect(url, function (err, db) {
    if (err)
        throw err;
    console.log("connected");
    router.get('/books',  function (req, res) {
        console.log('hii');
        var dbo = db.db("bookstore");
        dbo.collection("book_details").find({}).toArray(
            function (err, result) {
                if (err) throw err;

                        res.json({err: false, result: result});



            });
        router.post('/books', function (req, res) {
            var Catagories = req.body.Catagories;
            var dbo = db.db("bookstore");
            var data = {
                Catagories: Catagories
            }
            dbo.collection("book_details").insertOne(data, function (err, result) {
                if (err) throw err;
                //console.log(result);
                res.json({err: false, result: result});


            })

        })

    });
});

//
// router.post('/api/login', function (req, res) {
//
//     // insert code here to actually authenticate, or fake it
//     var user = {id: 3};
//
//     // then return a token, secret key should be an env variable
//     const token = jwt.sign({user: user.id}, 'secret_key');
//     res.json({
//         message: 'Authenticated! Use this token in the "Authorization" header',
//         token: token
//     });
// });
//
// function ensureToken(req, res, next) {
//     const bearerHeader = req.headers["authorization"];
//     if (typeof bearerHeader !== 'undefined') {
//         const bearer = bearerHeader.split(" ");
//         const bearerToken = bearer[1];
//         req.token = bearerToken;
//         next();
//     } else {
//         res.sendStatus(403);
//     }
// }

module.exports = router;