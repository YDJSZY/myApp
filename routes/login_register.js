/**
 * Created by Apple on 16/7/14.
 */
var express = require('express');
var router = express.Router();

router.use(function(req, res, next){
    next()
})
var obj = {
    login: router.post('/', function(req, res, next) {
        var db = req.db;
        var collection = db.get("users");
        collection.find({"username":req.body.username,"password":req.body.password},
        function (e,docs){
            //console.log("docs:"+docs.data[0]);
            if(e){
                res.send("error!!!")
            }else{
                res.send(docs);
            }
            db.close();
        })
    }),
    register: router.post('/', function(req, res, next) {
        var db = req.db;
        var collection = db.get("users");
        collection.insert({"username":req.body.username,"password":req.body.password})
        res.send("注册成功");
        db.close();
    })
};

module.exports = obj;