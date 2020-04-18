const express = require("express");
const router=express.Router();
const pool = require("../database");

router.get("/",async(req,res)=>{
    //res.send("feo");
    const vista = await pool.query("select * from albunes"); 
    res.render("vista/add",{vista});
});

router.post("/",async(req,res)=>{
    //res.send("feo");
    //console.log(req.body);
            const {id,nombre,artista,fecha}= req.body;
            const newAlbum = {id,nombre,artista,fecha};

        await pool.query("insert into albunes set ?", [newAlbum]);
        res.redirect("/vista");
    //const usua = await pool.query("select * from usuarios"); 
    //res.render("links/add",{usua});
});

router.get("/delete/:id",async(req,res)=>{
    const {id}=req.params;
    const album = await pool.query("delete from albunes where id=?",[id]);
    res.redirect("/vista");
});

module.exports= router;