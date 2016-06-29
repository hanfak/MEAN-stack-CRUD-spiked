var mongoose    = require("mongoose");

var ProductSchema  = {
  name:       String
}


mongoose.connect("mongodb://localhost/taganything");
