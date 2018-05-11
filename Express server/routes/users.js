var express = require('express');
var router = express.Router();
const USER = require("../models/user_model")

/* GET users listing. */
router.get('/', (req, res) => {
  USER.getAllUsers((err, users) => {
    if (err) {
      res.json({
        success: false,
        msg: err
      });
    }
    else {
      res.json({
        success: true,
        msg: users
      });
    }
  });
});

router.post("/", (req, res) => {
  if (!req.body.name || !req.body.username || !req.body.password) {
    res.json({
      success: false,
      msg: "Insufficient data"
    });
  }
  else {
    USER.getUserByUsername(req.body.username, (err, reqUser) => {
      if (err) {
        res.json({
          success: false,
          msg: err
        });
      }
      else {
        if (reqUser) {
          if (err) {
            res.json({
              success: false,
              msg: "username already exist.!"
            });
          }
        }
        else {
          USER.AddUser(req.body, (err) => {
            if (err) {
              res.json({
                success: false,
                msg: err
              });
            }
            else {
              res.json({
                success: true,
                msg: "User Added Successfully.!"
              });
            }
          });
        }
      }
    })
  }
});

router.put("/", (req, res) => {
  if (!req.body.newPassword || !req.body.username || !req.body.password) {
    res.json({
      success: false,
      msg: "Insufficient data"
    });
  }
  else {
    USER.getUserByUsername(req.body.username, (err, reqUser) => {
      if (err) {
        res.json({
          success: false,
          msg: err
        });
      }
      else {
        if (reqUser) {
          body = {
            id: reqUser._id,
            password: req.body.newPassword
          }
          USER.updatePassword(body, (err) => {
            if (err) {
              res.json({
                success: false,
                msg: err
              });
            }
            else {
              res.json({
                success: true,
                msg: "Password Changed Successfully.!"
              });
            }
          });
        }
      }
    });
  }
});

router.delete("/", (req, res) => {
  if (!req.body.newPassword || !req.body.username || !req.body.password) {
    res.json({
      success: false,
      msg: "Insufficient data"
    });
  }
  else {
    USER.getUserByUsername(req.body.username, (err, reqUser) => {
      if (err) {
        res.json({
          success: false,
          msg: err
        });
      }
      else {
        if (reqUser) {
          body = {
            id: reqUser._id,
            password: req.body.newPassword
          }
          USER.remove(body, (err) => {
            if (err) {
              res.json({
                success: false,
                msg: err
              });
            }
            else {
              res.json({
                success: true,
                msg: "User Deleted.!"
              });
            }
          });
        }
      }
    });
  }
});

router.post("/login", (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.json({
      success: false,
      msg: "Insufficient data"
    });
  }
  else {
    USER.getUserByUsername(req.body.username, (err, reqUser) => {
      if (err) {
        res.json({
          success: false,
          msg: err
        });
      }
      else {
        if (!reqUser) {
          res.json({
            success:false,
            msg:"User not found"
          });
        }
          else {
            if(reqUser.password!=req.body.password){
              res.json({
                success:false,
                msg:"Wrong password"
              });
            }
            else{
              res.json({
                success:true,
                msg:{
                  id:reqUser._id,
                  username:reqUser.username,
                  name:reqUser.name
                }
              })
            }
        }
      }
    });
  }
});

module.exports = router;
