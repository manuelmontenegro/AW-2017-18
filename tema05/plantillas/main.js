"use strict";

const path = require("path");
const express = require("express");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.get("/", (request, response) => {
    response.status(200);
    response.type("text/plain; charset=utf-8");
    response.end("Esta es la página raíz");
});

const usuarios = ["Javier Montoro", "Dolores Vega", "Beatriz Nito"];

app.get("/users.html", (request, response) => {
    response.status(200);
    response.render("users", { users: usuarios });
});

app.get("/usuarios.html", (request, response) => {
    response.redirect("/users.html");
});

app.listen(3000, (err) => {
    if (err) {
        console.error(`No se pudo inicializar el servidor: ${err.message}`);
    } else {
        console.log("Servidor arrancado en el puerto 3000");        
    }
});