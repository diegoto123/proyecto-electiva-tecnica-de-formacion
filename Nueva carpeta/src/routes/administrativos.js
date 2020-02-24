const express = require("express");
const router=express.Router();
//const pool = require("../database");

router.get("/agregar",async(req,res)=>{
    //res.send("feo");
    res.render('');
});

router.get("/eliminar",async(req,res)=>{
    //res.send("feo");
    res.send("feo care verga");
});
module.exports= router;