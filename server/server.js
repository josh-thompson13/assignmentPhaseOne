var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors());

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var path = require('path');

app.use(express.static(path.join(__dirname + '/../dist/chatappphaseone')));

const MongoClient  = require('mongodb').MongoClient; // Import mongodb
const url = 'mongodb://localhost:27017'; // Define where mongo server is located
const dbName = 'database'; // Database name
const colName = 'users'; // Collection name
const client = new MongoClient(url); // Create a new MongoClient

client.connect(function(err){
  console.log("Connected successfully to database");

})


var http = require('http').Server(app);
var server = http.listen(3000, function(){
    console.log("Server activated");
});

const login = require('./routes/postLogin');


app.post('/login', login(client))
app.get('/users', require('./routes/getUsers'))
app.get('/createuser', require('./routes/createUser'))
