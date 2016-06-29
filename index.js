var express   = require("express");
var app       = express();

app.get("/", function(req, res){
    res.send("I am working"); 
});

app.listen(3002, function(){
  console.log("The server is alive! :)");
});
