var animal = require('./animal');
var name = require('./name');
var express = require('express');
var router = express.Router();

var randomName = function(min, max) {
    var indexPOS = Math.floor(Math.random() * (1 + max - min) + min);
    return nameArray[indexPOS];
};

var randomAnimal = function(min, max) {
    var indexPOS = Math.floor(Math.random() * (1 + max - min) + min);
    return animalArray[indexPOS];
};

var namenumberCombo = function() {
    return randomName(0, nameArray.length) + randomAnimal(0, animalArray.length);
};

router.get('/', function(req, res) {
    res.send(namenumberCombo());
});
module.exports = router;