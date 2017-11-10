"use strict";

const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use((request, response, next) => {
    console.log(`Recibida petición ${request.method} ` +
                `en ${request.url} de ${request.ip}`);
    next();    
});

let ipsBloqueadas = [ "147.96.81.244", "145.2.34.23" ];

app.use((request, response, next) => {
    if (ipsBloqueadas.indexOf(request.ip) >= 0) {
        response.status(401);
        response.end("No autorizado");
    } else {
        next();
    }
});


app.use((request, response, next) => {
    request.esUCM = request.ip.startsWith("147.96.");
    next();
});


app.get("/index.html", (request, response) => {
    response.status(200);
    response.set("Content-Type", "text/plain; encoding=utf-8");
    response.write("¡Hola!");
    if (request.esUCM) {
        reponse.write("Estás conectado desde la UCM");
    }
    response.end();
});


app.use((request, response, next) => {
    response.status(404);
    response.render("error", { url: request.url });
});

app.listen(3000, (err) => {
    if (err) {
        console.log("No es posible abrir el puerto 3000.");
    } else {
        console.log("Servidor escuchando en el puerto 3000.");
    }
});