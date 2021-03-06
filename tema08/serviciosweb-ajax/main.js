"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const _ = require("underscore");
const path = require("path");
const multer = require("multer");
const app = express();

const upload = multer({ storage: multer.memoryStorage() });

// Nuestra base de datos inicial
let agenda = [
    { nombre: "Pepita", telefono: "89731982" },
    { nombre: "Puri", telefono: "28329828" },
    { nombre: "David", telefono: "827272728" }
];


app.use(express.static(path.join(__dirname, "public")));

// Middleware para analizar el cuerpo de las peticiones
// cuando el tipo MIME es application/json

// Este middleware añade un atributo 'body' al objeto
// request con el objeto JSON recibido en el cuerpo de la
// petición.
app.use(bodyParser.json());


// Listado de contactos
app.get("/contactos", (request, response) => {
    response.json(agenda);
});


// Acceso a un contacto

app.get("/contactos/:indice", (request, response) => {
    var indice = Number(request.params.indice);
    if (!isNaN(indice) && agenda[indice] !== undefined) {
        var elem = agenda[indice];
        response.json(elem);
    } else {
        response.status(404);
        response.end();
    }
});

// Acceso a un contacto mediante querystring: /contacto?ind=2
app.get("/contacto", (request, response) => {
    var indice = Number(request.query.ind);
    if (!isNaN(indice) && agenda[indice] !== undefined) {
        var elem = agenda[indice];
        response.json(elem);
    } else {
        response.status(404);
        response.end();
    }
});


// Áñadir contactos
app.post("/contactos", (request, response) => {
    var nuevoElemento = request.body;
    agenda.push(nuevoElemento);
    response.status(200);
    response.end();
});


app.put("/contactos/:indice/imagen", upload.single("imagen"), (request, response) => {
    var indice = Number(request.params.indice);
    if (!isNaN(indice) && agenda[indice] !== undefined) {
        agenda[indice].imagen = request.file.buffer;
    } else {
        response.status(404);
    }
    response.end();
});

app.get("/contactos/:indice/imagen", (request, response) => {
    var indice = Number(request.params.indice);
    if (!isNaN(indice) && agenda[indice] !== undefined 
                       && agenda[indice].imagen !== undefined) {
        response.end(agenda[indice].imagen, 'binary');
    } else {
        response.status(404);
        response.end();    
    }
});

// Actualizar contactos
app.put("/contactos/:indice", (request, response) => {
    var indice = Number(request.params.indice);
    if (!isNaN(indice) && agenda[indice] !== undefined) {
        agenda[indice] = request.body;
    } else {
        // Error 400 = Bad Request
        response.status(400);
    }
    response.end();
});

// Borrar contactos
app.delete("/contactos/:indice", (request, response) => {
    var indice = Number(request.params.indice);
    if (!isNaN(indice) && agenda[indice] !== undefined) {
        agenda.splice(indice, 1);
        // Código 200 = OK
        response.status(200);
    } else {
        // Error 404 = Not found
        response.status(404);
    }
    response.end();
});

// Cálculo del factorial
app.get("/factorial", (request, response) => {
    var numero = Number(request.query.num);
    if (!isNaN(numero)) {
        // El método _.range devuelve la lista [1, 2, 3, ..., n]
        // Mediante el uso de reduce hacemos la multiplicación
        // (1 *) 1 * 2 * 3 * 4 * ... * n
        var f = _.range(1, numero + 1).reduce((ac, x) => ac * x, 1);
        
        // Devolvemos el resultado
        response.json({ resultado: f });
    } else {
        response.status(400);
        response.end();
    }
});

// Cálculo del factorial con URL paramétrica
app.get("/factorial/:num", (request, response) => {
    var numero = Number(request.params.num);
    if (!isNaN(numero)) {
        // El método _.range devuelve la lista [1, 2, 3, ..., n]
        // Mediante el uso de reduce hacemos la multiplicación
        // (1 *) 1 * 2 * 3 * 4 * ... * n
        var f = _.range(1, numero + 1).reduce((ac, x) => ac * x, 1);
        
        // Devolvemos el resultado
        response.json({ resultado: f });
    } else {
        response.status(400);
        response.end();
    }
});


app.listen(3000, () => {
   console.log("Escuchando en 3000"); 
});