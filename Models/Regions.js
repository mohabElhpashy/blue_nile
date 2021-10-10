const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Reg = new Schema({
  

  R_name: {
    type: String,
    trim: true,
    minlength: 2,
    required: true,
  },
  R_address: {
    type: String,
    trim: true,
    minlength: 2,
    required: true,
  }
});
module.exports = mongoose.model("Regions", Reg);
