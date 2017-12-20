/* global __dirname */

"use strict";


const comunidades = [
    { nombre: "Andalucia", provincias: ["Almería", "Cádiz", "Córdoba", "Granada", "Huelva", "Jaén", "Málaga", "Sevilla"] },
    { nombre: "Aragón", provincias: ["Huesca", "Teruel", "Zaragoza"] },
    { nombre: "Asturias" },
    { nombre: "Cantabria" },
    { nombre: "Castilla y León", provincias: ["Ávila", "Burgos", "León", "Palencia", "Salamanca", "Segovia", "Soria", "Valladolid", "Zamora"] },
    { nombre: "Castilla-La Mancha", provincias: ["Albacete", "Ciudad Real", "Cuenca", "Guadalajara", "Toledo"] },
    { nombre: "Cataluña", provincias: ["Barcelona", "Girona", "Lleida", "Tarragona"] },
    { nombre: "Extremadura", provincias: ["Badajoz", "Cáceres"] },
    { nombre: "Galicia", provincias: ["A Coruña", "Lugo", "Ourense", "Pontevedra"] },
    { nombre: "La Rioja" },
    { nombre: "Illes Balears" },
    { nombre: "País Vasco", provincias: ["Álava", "Gipuzkoa", "Bizkaia"] },
    { nombre: "Canarias", provincias: ["Las Palmas", "Santa Cruz de Tenerife"] },
    { nombre: "Comunidad de Madrid" },
    { nombre: "Murcia" },
    { nombre: "Navarra" },
    { nombre: "Comunidad Valenciana", provincias: ["Alicante", "Castellón", "Valencia"] }
];


const express = require("express");
const path = require("path");
const _ = require("underscore");

let app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/comunidades", (request, response) => {
    var nombres = comunidades.map(comunidad => comunidad.nombre);
    response.json(nombres);
});

app.get("/comunidades/:num", (request, response) => {
    var num = Number(request.params.num);
    if (isNaN(num) || comunidades[num] === undefined) {
        response.status(400);
        response.end();
    } else if (comunidades[num].provincias === undefined) {
        response.json([]);        
    } else {
        response.json(comunidades[num].provincias);
    }
});


app.use((request, response, next) => {
    response.status(404);
    response.end("Not found: " + request.url);
});

app.listen(3000, () => {
    console.log("Servidor escuchando en puerto 3000");
});