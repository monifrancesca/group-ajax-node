var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var name = require('./routes/name');
var animal = require('./routes/animal');
var generator = require('./routes/generator');


app.use(bodyParser.urlencoded({extended: true}));
app.set('port', process.env.PORT || 5000);

app.use('/generator', generator);


//POST and GET route to name module and animal module
app.use('/name', name);
app.use('/animal', animal);

//AJAX GET Catch-all
app.get('/*', function(req, res) {
    console.log("Here is the request: " , req.params);
    var file = req.params[0] || '/views/index.html';
    res.sendFile(path.join(__dirname, './public/', file));
});


//post response.
//var Name = mongoose.model({name: String, unique: true});
//var Animals = mongoose.model({name: String});



app.listen(app.get('port'), function() {
    console.log('Server is ready on port ' + app.get('port'));
});