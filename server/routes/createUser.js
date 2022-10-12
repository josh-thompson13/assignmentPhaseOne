var fs = require('fs');

module.exports = (client) => (req, res) => {    // Set query values
  var email = req.body.email; // User entered email
  var password = req.body.password; // User entered password
  var system_role = req.body.system_role; // User entered type

  const query = {email: email, password: password};

  const user = {email: email, password: password, system_role: system_role};

  console.log("Email: "+ email);
  console.log("Password: " + password);
  console.log("System Role: " + system_role);

  const db = client.db("database"); // Database name
  const usersCollection = db.collection("users"); // Users collection

  usersCollection.find(query).toArray(function(err, result){
    if(result[0]){
      console.log("User already exists"); // Authorise user
      res.send({"userexists":true});
    } else {
      console.log("Creating user"); // Do not authorise user
      usersCollection.insertOne(user, (err, res) => {
        if (err) throw err;
      });
      res.send({"userexists":false});
    }
  })
}

//  usersCollection.insertOne({})

/*
  const db = client.db("database"); // Database name
  const usersCollection = db.collection("users"); // Users collection

  const query = {email: u, password: p};
  // Find all users then check if entered info matches
  usersCollection.find(query).toArray(function(err, result){
    if (err) throw err;
    if(result[0]){
      console.log("Authorised"); // Authorise user
      //console.log(JSON.stringify(result[0]))
//      console.log({"ok": true, "username":u, "system_role": result[0].system_role, "groups": JSON.stringify(result[0].groups)})
      //res.send({"ok": true, "username":u, "system_role": result[0].system_role, "groups": JSON.stringify(result[0].groups)});
      res.send({"ok": true, "result": result[0]})
    } else {
      console.log("Unauthorised"); // Do not authorise user
      res.send({"ok":false});
    }
  }

  var u = req.query.username
    var e = req.query.email
    var p = '123'
    if(u == "" || e == ""){
        res.send({"ok":false})
        return;
    }
    console.log("ERROR SENT")
    var usersfile = './data/users.json'
    fs.readFile(usersfile, 'utf8', function(err,data){
        if (err) throw err;
        var userArray = JSON.parse(data);
        // Find index executes a function for each array element
        // Find index return the index of the first element that passes a test
        // Find index returns -1 if no match is found
        let i = userArray.findIndex(user=>
            ((user.username == u)));
        // If not found we want to create a user
        if(i == -1){
            const user = {
                username: u,
                pwd: p,
                email: e,
            };
            userArray.push(user)
            console.log(userArray);
            fs.writeFile(usersfile,JSON.stringify(userArray),(err)=>{
                if (err) throw err;
                res.send({"ok":true})
            });
        } else {
            res.send({"ok":false});
        }
    });
}
*/
