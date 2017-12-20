"use strict";

const express = require("express");
const https = require("https");
const fs = require("fs");
const path = require("path");


const clavePrivada = fs.readFileSync(path.join(__dirname, "miclave.key"));
const certificado = fs.readFileSync(path.join(__dirname, "servidor.crt"));


let app = express();

app.get("/", (request, response) => {
   response.end("Bienvenido!"); 
});

var servidor = https.createServer(
        { key: clavePrivada, cert: certificado },
        app);
        
servidor.listen(5555, (err) => {
    console.log("Escuchando en puerto 5555");
});

