const express = require("express");
const router=express.Router();
const pool = require("../database");


router.get("/artista",async(req,res)=>{
    const artista = await pool.query("select * from artista"); 
    res.render("artista/artista",{artista});
});

router.get("/artistaa/:id_artista",async(req,res)=>{
    const { id_artista } = req.params;
    const artistaid = await pool.query('SELECT * FROM artista WHERE id_artista= ?', [id_artista]);
    res.render('artista/artistaa', { artistaid });
});

router.get("/albumes/:artista", async (req, res) => {
    const {artista } = req.params;
    const album = await pool.query("select * from albumes where artista = ? ",[artista]);
    res.render("album/add", { album });
});

module.exports= router;