"use strict";

const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.locals.nombreApp = "Mi Aplicación";
app.locals.correo = "montenegro@fdi.ucm.es"

app.get("/pag1", (request, response) => {
    response.status(200);
    response.render("view1", {});
});

app.get("/pag2/", (request, response) => {
    response.status(200);
    response.render("view2", { msg: "Esto es <b>importante</b>" });
});

let usuarios = [
    { nombre: "Francisco", apellidos: "Flores Blanco" },
    { nombre: "Elena", apellidos: "Nito del Bosque" },
    { nombre: "Germán", apellidos: "Gómez Gómez" }
]

app.get("/pag3", function(request, response) {
    response.status(200);
    response.render("view3", { usuarios: usuarios });
});

app.get("/pag4", (request, response) => {
    response.status(200);
    response.render("view4");
});

app.listen(3000, () => {
    console.log("Servidor arrancado en el puerto 3000");
});