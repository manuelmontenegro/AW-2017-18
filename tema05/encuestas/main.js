"use strict";

const pregunta = "¿Cuál es tu color favorito?";
const opciones = [
    {
        texto: "Rojo",
        numeroVotos: 0
    },
    {
        texto: "Azul",
        numeroVotos: 0
    },
    {
        texto: "Verde",
        numeroVotos: 0
    },
    {
        texto: "Ninguno de los anteriores",
        numeroVotos: 0
    }
];

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));


app.get("/respuestas.html", (request, response) => {
    response.render("respuestas", {opcs: opciones});    
});

app.get("/index.html", (request, response) => {
    response.render("index", {opcs: opciones,
                              pregunta: pregunta});    
});

app.get("/", (request, response) => {
    response.redirect("/index.html");
});

app.post("/enviar_respuesta", (request, response) => {
    const numOpcion = Number(request.body.respuesta);
    console.log("Opción seleccionada: " + numOpcion);
    if (isNaN(numOpcion)) {
        response.redirect("/index.html");
    } else {
        opciones[numOpcion].numeroVotos++;
        response.render("respuestas", {opcs: opciones});
    }
});

app.listen(3000, (err) => {
   console.log("Escuchando en puerto 3000"); 
});