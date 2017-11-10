"use strict";

const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: false }));

let usuarios = ["Juana", "Jesús", "Adrián", "Natalia"];

app.get("/listado", (request, response) => {
    response.render("listado", { usuarios: usuarios });
});

app.get("/editar", (request, response) => {
    let ind = Number(request.query.ind);
    if (!isNaN(ind)) {
        response.render("editar_form", { nombre: usuarios[ind], indice: ind });
    } else {
        response.status(500);
        response.end();
    }
});

app.post("/actualizar_usuario", (request, response) => {
    let nuevoNombre = request.body.nuevo_nombre;
    let ind = Number(request.body.indice);
    if (!isNaN(ind)) {
        usuarios[ind] = nuevoNombre;         
    }
    response.redirect("/listado");
});

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Escuchando en puerto 3000");
    }
});
