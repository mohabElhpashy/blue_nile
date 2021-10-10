const mongoose = require("mongoose");
const URL =
  "mongodb+srv://MainMethod:MainMethod@cluster0.rrw3w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const connectDB = async () => {
  await mongoose.connect(URL, { useUnifiedTopology: true });
  console.log("Connected is success");
};

module.exports = connectDB;
