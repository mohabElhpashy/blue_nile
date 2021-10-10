const express = require("express");
const Router = express.Router();
const bcrypt = require("bcryptjs");
const REG = require("../Models/Regions");
const bodyparser = require("body-parser");

Router.post("/Add", (req, res) => {
  const newregion = new REG();
  // newEng.id = req.body.id;
  newregion.R_name = req.body.R_name;
  newregion.R_address = req.body.R_address;
  newregion
  .save()
  .then((regSaved) => {
    res.send("Region Saved" + regSaved);
  })
  .catch((err) => {
    res.send("Region Not Saved !!!" + err);
  });
  
});





module.exports = Router;
