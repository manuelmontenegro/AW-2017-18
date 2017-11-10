
"use strict";

const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/usuarios/:id", (request, response) => {
    response.status(400);
    response.render("usuario", { id: request.params.id });
});

function identificacionRequerida(request, response, next) {
    // Por simplicidad, supondremos que la identificación es
    // aleatoria. Con una probabilidad de 1/2 se pasa, con una
    // probabilidad de 1/2 no se pasa.
    if (Math.random() > 0.5) {
        next();
    } else {
        response.status(401);
        response.end();
    }
}

app.get("/secreto.html", 
        identificacionRequerida,
        (request, response) => {
            response.status(200);
            response.set("Content-Type", "text/plain; encoding=utf-8");
            response.end("Ya te puedo contar el secreto.");
        });

app.get("/otroSecreto.html", 
        identificacionRequerida,
        (request, response) => {
            response.status(200);
            response.set("Content-Type", "text/plain; encoding=utf-8");
            response.end("Ya te puedo contar el secreto.");
        });


app.listen(3000, () => {
    console.log("Escuchando en el puerto 3000");
});

