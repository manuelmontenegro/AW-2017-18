"use strict";

var express = require("express");
var https = require("https");
var fs = require("fs");
var path = require("path");


var clavePrivada = fs.readFileSync(path.join(__dirname, "miclave.key"));
var certificado = fs.readFileSync(path.join(__dirname, "servidor.crt"));


var app = express();

app.get("/", function(request, response) {
   response.end("Bienvenido!"); 
});

var servidor = https.createServer(
        { key: clavePrivada, cert: certificado },
        app);
        
servidor.listen(5555, function(err) {
    console.log("Escuchando en puerto 5555");
});

