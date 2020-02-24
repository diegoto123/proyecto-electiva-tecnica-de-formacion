const express = require("express");
const router=express.Router();
const pool = require("../database");

router.get("/add",async(req,res)=>{
    //res.send("feo");
    const usua = await pool.query("select * from usuarios"); 
    res.render("links/add",{usua});
});

router.post("/add",async(req,res)=>{
    //res.send("feo");
    //console.log(req.body);
            const {id,nombre,usuario,contra,edad}= req.body;
            const newUser = {id,nombre,usuario,contra,edad};

        await pool.query("insert into usuarios set ?", [newUser]);
        res.redirect("/links/add");
    //const usua = await pool.query("select * from usuarios"); 
    //res.render("links/add",{usua});
});

router.get("/delete/:id",async(req,res)=>{
    const {id}=req.params;
    const usua = await pool.query("delete from usuarios where id=?",[id]);
    res.redirect("/links/add");
});

module.exports= router;