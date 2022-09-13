var fs = require('fs');

module.exports = function(req,res){
    var u = req.body.username;
    var p = req.body.pwd;
    c = u + p;
    //console.log(c);
    fs.readFile('./data/users.json', 'utf8', function(err,data){
        if (err) throw err;
        let userArray = JSON.parse(data);
        console.log(userArray);
        // Find index executes a function for each array element
        // Find index return the index of the first element that passes a test
        // Find index returns -1 if no match is found
        let i = userArray.findIndex(user=>
            ((user.username == u) && (user.pwd == p)));
        if(i == -1){
            res.send(
                {"ok":false}
                );
        } else {
            fs.readFile('./data/extendedUsers.json','utf8', function(err,data){
                if (err) throw err;
                let extendedUserArray = JSON.parse(data);

                let i = extendedUserArray.findIndex(user =>
                    ((user.username == u)));
                var userData = extendedUserArray[i];
                //console.log(userData);
                userData["ok"] = true;
                res.send(userData)
            })
        }
    });
}