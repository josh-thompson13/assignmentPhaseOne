var fs = require('fs');

module.exports = (client) => (req, res) => {    // Set query values
  var groupName = req.body.group_name; // User entered groupName
  var groupId = req.body.group_id; // User entered groupID


  const query = {group_name: groupName, group_id: groupId, rooms: [{room_name: 'Default'}]};

  console.log("Group Name: "+ groupName);
  console.log("Group ID: " + groupId);



  const db = client.db("database"); // Database name
  const usersCollection = db.collection("users"); // Users collection

  // Get all users that are super_admin or group_admin
  usersCollection.find({$or: [{system_role: 'Super_Admin'}, {system_role: 'Group_Admin'}]}).toArray(function(err, result){
      if (err) throw err;
      result.forEach(element => {
        // Add group to all super_admins and group_admins
        usersCollection.updateOne({email:element.email}, {$push: {groups: query }})
        console.log(element.email);
      });
//      console.log(result);
    })



  // usersCollection.find(query).toArray(function(err, result){
  //   if(result[0]){
  //     console.log("User already exists"); // Authorise user
  //     res.send({"userexists":true});
  //   } else {
  //     console.log("Creating user"); // Do not authorise user
  //     usersCollection.insertOne(user, (err, res) => {
  //       if (err) throw err;
  //     });
  //     res.send({"userexists":false});
  //   }
  // })
}
