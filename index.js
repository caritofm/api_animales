const express = require("express")
const app = express();
const cors = require("cors")
const puert = 2006;

const {getAnimales, getAnimalesById} = require ("./controllers/animales.controllers")


app.use(cors());

app.get("/", getAnimales);

app.get ("/:id", getAnimalesById);

app.listen(puert,()=>{
    console.log(`Servidor arriba en el puerto ${puert}`);
    console.log("Buen trabajo")
})