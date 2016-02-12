var express = require('express');
var router = express.Router();

var nameArray = [];


router.get('/', function(req, res) {
    res.send(nameArray);
});

router.post('/', function(req, res) {
    nameArray.push(req.body);
    console.log(req.body);
    res.send(nameArray);
    console.log(nameArray);
});

module.exports = router;