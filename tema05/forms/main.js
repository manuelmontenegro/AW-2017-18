"use strict";

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/procesar_get.html", (request, response) => {
    console.log(request.query);
    let sexoStr = "No especificado";
    switch (request.query.sexo) {
        case "H": sexoStr = "Hombre"; break;
        case "M": sexoStr = "Mujer"; break;
    }
    response.render("infoForm", {
        nombre: request.query.nombre,
        edad: request.query.edad,
        sexo: sexoStr,
        fumador: (request.query.fumador === "ON" ? "Sí" : "No")
    });
});

app.post("/procesar_post.html", (request, response) => {
    console.log(request.body);
    response.end();
});


app.listen(3000, () => {
    console.log("Escuchando en el puerto 3000");
});

