const express = require("express");
const router=express.Router();
const pool = require("../database");

router.get("/add",async(req,res)=>{
    //res.send("feo");
    const album = await pool.query("select * from albunes"); 
    res.render("album/add",{album});
});

router.post("/add",async(req,res)=>{
    //res.send("feo");
    //console.log(req.body);
            const {id,nombre,link,artista,fecha}= req.body;
            const newAlbum = {id,link,nombre,artista,fecha};

        await pool.query("insert into albunes set ?", [newAlbum]);
        res.redirect("/album");
    //const usua = await pool.query("select * from usuarios"); 
    //res.render("links/add",{usua});
});

router.get("/delete/:id",async(req,res)=>{
    const {id}=req.params;
    const album = await pool.query("delete from albunes where id=?",[id]);
    res.redirect("/album");
});

module.exports= router;