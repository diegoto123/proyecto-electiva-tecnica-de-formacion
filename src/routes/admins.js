const express = require("express");
const router = express.Router();
const pool = require("../database");


router.get("/pass", async (req, res) => {
    const usua = await pool.query("select * from usuarios");
    res.render("admins/pass", { usua });
});

router.post("/pass/validar", async (req, res) => {


    const { usuario, contra } = req.body;
    const { name, password } = req.body
    console.log(name, password);
    console.log(usuario, contra)
    if (usuario == name & contra == password) {
        res.redirect("/admins/admins");

    }
    else {
        res.send("contraseña y usuarios incorrectos porfavor intented e nuevo")
    }


});
router.get("/admins", async (req, res) => {
    const usua = await pool.query("select * from usuarios");
    const album = await pool.query("select * from albumes");
    const peticion = await pool.query("select * from peticiones");
    const artista = await pool.query("select * from artista");
    res.render("admins/admins", { usua, album, peticion, artista });

});
router.get('/eliminar/peticiones/:id_peticiones', async (req, res) => {
    const { id_peticiones } = req.params;
    await pool.query('delete from peticiones where id_peticiones= ?', [id_peticiones]);
    res.redirect('/admins/admins');

});
router.get("/modificar", async (req, res) => {
    const usua = await pool.query("select * from usuarios");
    const album = await pool.query("select * from albumes");
    const peticion = await pool.query("select * from peticiones");
    const artista = await pool.query("select * from artista");
    res.render("admins/modi", { usua, album, peticion, artista });

});

router.get('/modificar/peticiones/:id_peticiones', async (req, res) => {
    const { id_peticiones } = req.params;
    const peticionid = await pool.query('SELECT * FROM peticiones WHERE id_peticiones= ?', [id_peticiones]);
    res.render('admins/modi', { peticionid });


});

router.post('/modificaar/peticiones/:id_peticiones', async (req, res) => {
    const { id_peticiones } = req.params;
    const { nombre, genero, album } = req.body;
    const updatepeticion = { nombre, genero, album };
    await pool.query('update peticiones set ? where id_peticiones = ? ', [updatepeticion, id_peticiones]);
    res.redirect('/admins/admins');

});
router.get('/agre', async (req, res) => {
    res.render('admins/agre');

});


router.post("/agregar/peticiones", async (req, res) => {
    const { id_peticiones, nombre, genero, album } = req.body;
    const newpeticion = { id_peticiones, nombre, genero, album };

    await pool.query("insert into peticiones set ?", [newpeticion]);
    res.redirect("/admins/admins");
});

router.get('/eliminar/albumes/:id_album', async (req, res) => {
    const { id_album } = req.params;
    await pool.query('delete from albumes where id_album= ?', [id_album]);
    res.redirect('/admins/admins');

});

router.get('/modificar/albumes/:id_album', async (req, res) => {
    const { id_album } = req.params;
    const albumid = await pool.query('SELECT * FROM albumes WHERE id_album= ?', [id_album]);
    res.render('admins/modi', { albumid });


});

router.post('/modificaar/albumes/:id_album', async (req, res) => {
    const { id_album } = req.params;
    const { nombre, artista, fecha, link } = req.body;
    const updatealbum = { nombre, artista, fecha, link };
    await pool.query('update albumes set ? where id_album = ? ', [updatealbum, id_album]);
    res.redirect('/admins/admins');

});

router.get('/agre2', async (req, res) => {
    res.render('admins/agre2');

});


router.post("/agregar/album", async (req, res) => {
    const { id_album, nombre, artista, fecha, link } = req.body;
    const newalbum = { id_album, nombre, artista, fecha, link };

    await pool.query("insert into albumes set ?", [newalbum]);
    res.redirect("/admins/admins");
});


router.get('/eliminar/artista/:id_artista', async (req, res) => {
    const { id_artista } = req.params;
    await pool.query('delete from artista where id_artista= ?', [id_artista]);
    res.redirect('/admins/admins');

});

router.get('/modificar/artista/:id_artista', async (req, res) => {
    const { id_artista } = req.params;
    const artistaid = await pool.query('SELECT * FROM artista WHERE id_artista= ?', [id_artista]);
    res.render('admins/modi', { artistaid });


});

router.post('/modificaar/artista/:id_artista', async (req, res) => {
    const { id_artista } = req.params;
    const { nombre, genero, albumes } = req.body;
    const updateartista = { nombre, genero, albumes };
    await pool.query('update artista set ? where id_artista = ? ', [updateartista, id_artista]);
    res.redirect('/admins/admins');

});

router.get('/agre3', async (req, res) => {
    res.render('admins/agre3');

});


router.post("/agregar/artista", async (req, res) => {
    const { id_artista, nombre, genero, albumes } = req.body;
    const newartista = { id_artista, nombre, genero, albumes };

    await pool.query("insert into artista set ?", [newartista]);
    res.redirect("/admins/admins");
});





module.exports = router;