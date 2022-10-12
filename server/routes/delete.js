var fs = require('fs');

module.exports = (client) => (req, res) => {    // Set query values
  var email = req.body.email; // User entered email
  const query = {email: email}; // Query to delete email
  console.log("Email: "+ email);

  const db = client.db("database"); // Database name
  const usersCollection = db.collection("users"); // Users collection

  usersCollection.deleteOne(query, (err,obj) => {
    if (err) {
      throw err;
    } else {
      res.send({"deleted":true});
    }
  })
}

