const express = require("express");

const miRouter = express.Router();

miRouter.get("/crear_usuario.html", (request, response) => {
    console.log("Creando usuario.");
    response.end();
});

miRouter.get("/buscar_usuario.html", (request, response) => {
    console.log("Buscando usuario.");
    response.end();
});

module.exports = miRouter;