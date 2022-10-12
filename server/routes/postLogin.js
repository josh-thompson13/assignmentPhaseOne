var fs = require('fs');

module.exports = (client) => (req, res) => {
  var u = req.body.username; // User entered email
  var p = req.body.pwd; // User entered password
  console.log("email: " + u + " " + "password: " + p); // Output entered login details

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
         // if(i == -1){
         //     res.send({"ok":false})
        //  } else {
              // fs.readFile('./data/extendedUsers.json','utf8', function(err,data){
              //     if (err) throw err;
              //     let extendedUserArray = JSON.parse(data);

              //     let i = extendedUserArray.findIndex(user =>
              //         ((user.username == u)));
              //     var userData = extendedUserArray[i];
              //     //console.log(userData);
              //     userData['ok'] = true;
              //     console.log(userData);
              //     res.send(userData)
 //             })
          )};
 // });




    // Need to change this to instead check the database
    // fs.readFile('./data/users.json', 'utf8', function(err,data){
    //     if (err) throw err;
    //     let userArray = JSON.parse(data);
    //     console.log(userArray);
    //     // Find index executes a function for each array element
    //     // Find index return the index of the first element that passes a test
    //     // Find index returns -1 if no match is found
    //     let i = userArray.findIndex(user=>
    //         ((user.username == u) && (user.pwd == p)));
    //     if(i == -1){
    //         res.send(
    //             {"ok":false}
    //             );
    //     } else {
    //         fs.readFile('./data/extendedUsers.json','utf8', function(err,data){
    //             if (err) throw err;
    //             let extendedUserArray = JSON.parse(data);

    //             let i = extendedUserArray.findIndex(user =>
    //                 ((user.username == u)));
    //             var userData = extendedUserArray[i];
    //             //console.log(userData);
    //             userData['ok'] = true;
    //             console.log(userData);
    //             res.send(userData)
    //         })
    //     }
    // });
//}
