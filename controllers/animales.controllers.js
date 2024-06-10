const {request, response} = require("express");
const {animales} = require("../animales");

const getAnimales =(req,res)=> {
    return res.json({
        ok: true,
        statusCode: 200,
        animales:animales

    });
};

const getAnimalesById =(req= request, res=response) => {
    let id = parseInt(req.params.id);

    let animalesBuscar = "";

    animalesBuscar = animales.find((animal)=>{
        return animal.id = id
    });

    if(animalesBuscar){
        return res.json({
            ok:true,
            statusCode: 200,
            animalesBuscar
        });
    }else{
        return res.json({
            ok:false,
            satusCode: 404,
            msg: "No hay animales con ese id"
        })
    }
}

module.exports ={
    getAnimales,
    getAnimalesById
}