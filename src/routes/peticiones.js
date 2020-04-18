const express = require("express");
const router=express.Router();
const pool = require("../database");

router.get("/peticiones",async(req,res)=>{
    //res.send("feo");
    const album = await pool.query("select * from albunes"); 
    res.render("peticiones/peticiones",{album});
});

router.post("/peticiones",async(req,res)=>{
    //res.send("feo");
    //console.log(req.body);
            const {id,nombre,genero,albumes}= req.body;
            const newArtista = {id,nombre,genero,albumes};

        await pool.query("insert into artista set ?", [newArtista]);
        res.redirect("/peticiones");
    //const usua = await pool.query("select * from usuarios"); 
    //res.render("links/add",{usua});
});

router.get("/delete/:id",async(req,res)=>{
    const {id}=req.params;
    const artista = await pool.query("delete from artista where id=?",[id]);
    res.redirect("/peticiones/peticiones");
});

module.exports= router;