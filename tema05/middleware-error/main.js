"use strict";

const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/usuarios", (request, response, next) => {
    fs.readFile("noexiste.txt", function(err, contenido) {
        if (err) {
            next(err);
        } else {
            request.contenido = contenido;            
        }
    });
});

app.use((request, response, next) => {
    console.log("En caso de error, no se pasa por aquí.");
    next();
});

app.use((error, request, response, next) => {
    console.log(response);
   // Código 500: Internal server error
   response.status(500);
   response.render("error", {
       mensaje: error.message,
       pila: error.stack
   });
});

app.listen(3000, () => {
    console.log("Escuchando en el puerto 3000");
});

