var express = require('express');
var router = express.Router();
var path = require('path');
var animalArray = [];
var bodyParser = require('body-parser');

router.get('/', function(req, res) {
    res.send(animalArray);
});

router.post('/', function(req, res) {
    console.log('before push', req.body);
    animalArray.push(req.body);
    console.log('back end', animalArray);
    res.send(animalArray);
});

module.exports = router;