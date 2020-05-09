  
const express= require("express");
const router= express.Router();

router.get("/",(req,res)=>{
    res.render('index');
});

module.exports =router;

function triangulo(){
    var showTri="";
    var f, c;
    for(f=1; f<=11; f++){
        for(c=1; c<=11-f; c++)
            showTri = showTri + ".";
        for(c=1; c<=f; c++) //fila 3 ***
            showTri = showTri + "*";
        showTri = showTri + "\n";
    }
    alert(showTri);
}