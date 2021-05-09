const express = require('express');
const router = express.Router();
const AuthController = require('./auth.user.controller');
const AuthObj = new AuthController();

router.post("/login",(req,res)=>{
    console.log("in login route");
    AuthObj.loginUser(req.body, req, res);

});

router.post("/logout",(req,res)=>{
    console.log("in logout route");
    AuthObj.logoutUser(req.body, req, res);

});

router.post("/registration",(req,res)=>{
    console.log("in registration route");
    AuthObj.createUser(req.body, req, res);
});


module.exports = router;