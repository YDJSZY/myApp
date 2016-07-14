/**
 * Created by Apple on 16/7/14.
 */
var express = require('express');
var router = express.Router();

router.use(function(req, res, next){
    next()
})
router.post('/', function(req, res, next) {
    var db = req.db;
    var collection = db.get("users");
    collection.insert({"username":req.body.username,"password":req.body.password})
    res.send("注册成功");
    db.close();
});

module.exports = router;