var fs = require('fs');

module.exports = (client) => (req, res) => {
  const db = client.db("database"); // Database name
  const usersCollection = db.collection("users"); // Users collection

  usersCollection.find({}).toArray(function(err, result){
    if (err) throw err;
    //console.log(result);
    res.send(result);
    // if(result[0]){
    //   console.log("Authorised"); // Authorise user
    //   res.send({"ok": true, "result": result[0]})
    // } else {
    //   console.log("Unauthorised"); // Do not authorise user
    //   res.send({"ok":false});
    // }
  })

    // fs.readFile('./data/users.json', 'utf8', function(err,data){
    //     if (err) throw err;
    //     let userArray = JSON.parse(data);
    //     console.log(userArray);
    //     res.send(userArray);
    // })
}
