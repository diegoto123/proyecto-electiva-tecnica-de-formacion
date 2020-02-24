const express = require("express");
const router=express.Router();
//const pool = require("../database");

router.get("/agregar",async(req,res)=>{
    //res.send("feo");
    res.render('estudiantes/add');
});
router.get("/eliminar",async(req,res)=>{
    //res.send("feo");
    res.render('estudiantes/eliminar');
});
module.exports= router;