var express   = require("express");
var parser      = require("body-parser");
var mongoose  = require("./db/connection");
var app       = express();

var Product     = mongoose.model("Product");

app.use(parser.json({urlencoded: true}));
app.use("/", express.static("public"));
app.use("/", express.static("bower_components"));

app.get("/api/products", function(req, res){
  Product.find().then(function(response){
    res.json(response);
  });
});

app.get("/api/products/:name", function(req, res){
  Product.findOne(req.params).then(function(product){
    res.json(product);
  });
});

app.post("/api/products", function(req, res){
  Product.create(req.body).then(function(product){
    res.json(product);
  });
});

app.get("/*", function(req, res){
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(3002, function(){
  console.log("The server is working! :)");
});
