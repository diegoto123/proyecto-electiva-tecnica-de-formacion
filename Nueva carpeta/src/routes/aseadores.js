const express = require("express");
const router=express.Router();
//const pool = require("../database");

router.get("/pepitoo",async(req,res)=>{
    //res.send("feo");
    res.send("varra cabron");
});
module.exports= router;