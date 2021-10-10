const express = require("express");
const bodyparser = require("body-parser");
const cors=require("cors")
const connectDB = require("./Config");

let app = express();
app.use(
  cors({
    origin:"*",
    credentials:true
  })
)
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

//connect to DB
connectDB();

//Load Routes
const REGESTER = require("./Routes/Login_Reg");
const Regions=require("./Routes/Reg_route")



//Use Routes
app.use("/", REGESTER);
app.use("/Regions", Regions);


const port = process.env.PORT || 999;
app.listen(port, () => {
  console.log("Server Is Listing on ", port);
});
