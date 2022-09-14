var fs = require('fs');

module.exports =  function(req,res){
    // Set query values
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