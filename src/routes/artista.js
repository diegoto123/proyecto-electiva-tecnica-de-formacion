const express = require("express");
const router=express.Router();
const pool = require("../database");
//const pool = require("../database");

//router.get("/artista",async(req,res)=>{
    //res.send("feo");
    //res.render("artista/artista");
//});
router.post("/artistaa",async(req,res)=>{
    //res.send("feo");
    //console.log(req.body);
            const {id,nombre,genero,albumes}= req.body;
            const newArtista = {id,nombre,genero,albumes};

        await pool.query("insert into artista set ?", [newArtista]);
        res.redirect("/artistaa");
    //const usua = await pool.query("select * from usuarios"); 
    //res.render("links/add",{usua});
});
router.get("/artistaa",async(req,res)=>{
    //res.send("feo");
    const artista = await pool.query("select * from artista"); 
    res.render("artista/artistaa",{artista});
});
router.get("/artista",async(req,res)=>{
    //res.send("feo");
    const artista = await pool.query("select * from artista"); 
    res.render("artista/artista",{artista});
});
module.exports= router;