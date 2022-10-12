var express = require('express');
var app = express();

const {Server} = require("socket.io");

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

const login = require('./routes/postLogin');
const createUser = require('./routes/createUser');
const users = require('./routes/getUsers');
const deleteUser = require('./routes/delete')
const createGroup = require('./routes/createGroup.js');

app.post('/login', login(client))
app.get('/users', users(client))
app.post('/createuser', createUser(client))
app.post('/deleteusers', deleteUser(client))
app.post('/creategroup', createGroup(client))

app.get('/chat', (req,res)=>{
  res.sendFile(__dirname + '/chat.html');
})

var http = require('http').Server(app);

/*var server = */http.listen(3000, function(){
    console.log("Server activated");
});

const io = require('socket.io')(http)

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

function goBack(){
  console.log("Redirect");
  res.redirect('http://localhost:3000');

}





