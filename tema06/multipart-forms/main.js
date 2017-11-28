/**
 * Formularios multiparte.
 * 
 * Aplicación web para subir ficheros al servidor.
 * En esta versión los ficheros no se guardan en la BD,
 * sino que se mantienen en el directorio `uploads`.
 * 
 * Mediante el manejador de ruta /imagen/<id> se obtiene
 * el fichero correspondiente a partir de la carpeta
 * `uploads`.
 */
"use strict";

const express = require("express");
const path = require("path");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const multer = require("multer");
const fs = require("fs");
const mysql = require("mysql");

const upload = multer({ dest: path.join(__dirname, "uploads") });


const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use(express.static(path.join(__dirname, "public")));

app.post("/procesar_formulario.html", upload.single("foto"), function(request, response) {
    response.render("datos_formulario", {
        nombre: request.body.nombre,
        apellidos: request.body.apellidos,
        fumador: request.body.fumador === "si",
        imagen: request.file ? request.file.filename : ""
    });
});

app.get("/imagen/:id", (request, response) => {
    response.sendFile(path.join(__dirname, "uploads", request.params.id));
});

app.listen(3000, function(err) {
    console.log("Escuchando en puerto 3000");
});       