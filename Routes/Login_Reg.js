const express = require("express");
const Router = express.Router();
const bcrypt = require("bcryptjs");
const Engs = require("../Models/Engs");
const bodyparser = require("body-parser");

Router.post("/SignUp", (req, res) => {
  const newEng = new Engs();
  // newEng.id = req.body.id;
  newEng.name = req.body.name;
  newEng.email = req.body.email;
  newEng.password = req.body.password;
  if(req.body.key=="mainmethod")
  {
    newEng.key = "boss";
  }
  else{
    newEng.key = "user";
  }
 
  
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newEng.password, salt, (err, hash) => {
      if (err) return err;
      newEng.password = hash;
      newEng
        .save()
        .then((engSaved) => {
          res.send("user Saved" + engSaved);
        })
        .catch((err) => {
          res.send("Not Saved !!!" + err);
        });
    });
  });
});

Router.post("/LogIn", (req, res) => {
  Engs.findOne({ name: req.body.name }).then((enge) => {
    if (enge) {
      bcrypt.compare(req.body.password, enge.password, (err, matched) => {
        if (err) return err;
        if (matched) {
          
          res.send(enge.key);
          console.log(enge)
        } else {
          res.send("User Isn't Enable To Log In");
        }
      });
    }
  });
});

Router.get("/test", (req, res) => {
  res.send("it's working");
});

module.exports = Router;
