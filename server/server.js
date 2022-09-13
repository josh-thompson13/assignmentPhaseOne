var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors());

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var path = require('path');

app.use(express.static(path.join(__dirname + '/..dist/chatappphaseone')));

var http = require('http').Server(app);
var server = http.listen(3000, function(){
    console.log("Server activated");
});

app.post('/login', require('./routes/postLogin'))