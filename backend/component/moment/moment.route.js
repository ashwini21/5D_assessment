const express = require('express');
const router = express.Router();
const MomentController = require('./moment.controller');
const MomentObj = new MomentController();

router.post("/add",(req,res)=>{
    console.log("in add moment route");
    MomentObj.createMoment(req.body, req, res);
});

router.put("/update",(req,res)=>{
    console.log("in add moment route");
    MomentObj.updateMoment(req.body, req, res);
});

router.put("/delete",(req,res)=>{
    console.log("in delete moment route");
    MomentObj.updateMoment(req.body, req, res);
});

router.post("/list",(req,res)=>{
    console.log("in list moment route");
    MomentObj.listMoment(req.body, req, res);
});

module.exports = router;