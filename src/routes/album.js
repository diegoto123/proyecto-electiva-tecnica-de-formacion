const express = require("express");
const router = express.Router();
const pool = require("../database");

router.get("/add", async (req, res) => {
    const album = await pool.query("select * from albumes");
    res.render("album/add", { album });
});

router.post("/add", async (req, res) => {
    const { id, nombre, link, artista, fecha } = req.body;
    const newAlbum = { id, link, nombre, artista, fecha };

    await pool.query("insert into albunes set ?", [newAlbum]);
    res.redirect("/album");
});


module.exports = router;