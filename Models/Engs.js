const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const enge = new Schema({
  // id: {
  //   type: String,
  //   unique: true,
  //   minlength: 1,
  // },

  name: {
    type: String,
    trim: true,
    minlength: 2,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    minlength: 2,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    minlength: 5,
    required: true,
  },
  key:{
    type: String,
    trim: true,
    
  }
});
module.exports = mongoose.model("Enge", enge);
