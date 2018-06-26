var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var objectid= require('mongodb').ObjectId ;
var url = "mongodb://localhost:27017/bookstore";
//const jwt = require('jsonwebtoken');
var fetchUrl = require("fetch").fetchUrl;


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
MongoClient.connect(url, function (err, db) {
    if (err)
        throw err;
    console.log("connected");
    router.get('/Users',  function (req, res) {
        console.log('hii');
        var dbo = db.db("bookstore");
        dbo.collection("Users").find({}).toArray(
            function (err, result) {
                if (err) throw err;

                res.json({err: false, result: result});

            });

            });
        router.post('/Users', function (req, res) {
            var Username = req.body.Username;
            var Password = req.body.Password;
            var Name = req.body.Name;
            var dbo = db.db("bookstore");
            console.log("result");
            dbo.collection("Users").findOne({Username : Username},function (err, result) {
                if (err) throw err;
                console.log(result);
                if (result == null ){
                  res.json({err: true, result:"Invalid Username"})
                }
                else{
                  if(Password == result.Password){
                    res.json({err: false, result: result});
                  }
                  else{
                    res.json({err: true, result: "failed"});
                  }
                }


            })

        });
        router.put("/Ubook/:id1",function(req,res){

            var Ordered_Book = req.body.Ordered_Book;
            // var Ordered_Date = req.body.Ordered_Date;
            // var Delivery_Date = req.body.Delivery_Date;
            var dbo = db.db("bookstore");
            // var data = {
            //     Ordered_Book: Ordered_Book,
            //     Ordered_Date: Ordered_Date,
            //     Delivery_Date:Delivery_Date
            //
            //
            // }
            dbo.collection("Users").updateOne({_id :new objectid(req.params.id1) },{$set:{
                    Ordered_Book: Ordered_Book
                    // Ordered_Date: Ordered_Date,
                    // Delivery_Date:Delivery_Date

                }}, function(err,result) {
                console.log(result);
                if (err) throw err;
                //console.log(result);
                res.json({err: false, result: result});


            })



        })


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