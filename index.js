var express   = require("express");
var app       = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/index.html"); 
});

app.listen(3002, function(){
  console.log("The server is alive! :)");
});
