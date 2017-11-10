"use strict";

const path = require("path");
const express = require("express");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.get("/", (request, response) => {
    response.status(200);
    response.type("text/html");
    response.write("<html>");
    response.write("<head>");
    response.write("<title>Lista de usuarios</title>");
    response.write('<meta charset="utf-8">')
    response.write("</head>");
    response.write("<body>");
    response.write("<h1>¡Bienvenido!</h1>")
    response.write("</body>");
    response.end("</html>");
});

const usuarios = ["Javier Montoro", "Dolores Vega", "Beatriz Nito"];

app.get("/users.html", (request, response) => {
    response.status(200);
    response.type("text/html");
    response.write("<html>");
    response.write("<head>");
    response.write("<title>Lista de usuarios</title>");
    response.write('<meta charset="utf-8">')
    response.write("</head>");
    response.write("<body><ul>");
    usuarios.forEach((usuario) => {
        response.write(`<li>${usuario}</li>`);
    });
    response.write("</ul></body>");
    response.end("</html>");
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