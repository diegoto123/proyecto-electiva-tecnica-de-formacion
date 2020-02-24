const express = require("express");
const router=express.Router();
//const pool = require("../database");

router.get("/pepiti",async(req,res)=>{
    //res.send("feo");
    res.send("feo hijueputa");
});
module.exports= router;