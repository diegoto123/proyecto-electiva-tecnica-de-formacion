const express = require("express");
const router=express.Router();
const pool = require("../database");

router.get("/peticiones",async(req,res)=>{
    //res.send("feo");
    const peticion = await pool.query("select * from peticiones"); 
    res.render("peticiones/peticiones",{peticion});
});

router.post("/peticiones",async(req,res)=>{
    //res.send("feo");
    //console.log(req.body);
            const {id_peticiones,nombre,genero,album}= req.body;
            const newpeticion = {id_peticiones,nombre,genero,album};

        await pool.query("insert into peticiones set ?", [newpeticion]);
        res.redirect("/peticiones/peticiones");
    //const usua = await pool.query("select * from usuarios"); 
    //res.render("links/add",{usua});
});

router.get("/delete/:id",async(req,res)=>{
    const {id}=req.params;
    const artista = await pool.query("delete from artista where id=?",[id]);
    res.redirect("/peticiones/peticiones");
});

module.exports= router;


