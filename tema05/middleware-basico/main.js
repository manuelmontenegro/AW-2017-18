"use strict";

const express = require("express");
const path = require("path");
const morgan = require("morgan");

const app = express();

const ficherosEstaticos = path.join(__dirname, "public");

app.use(morgan("dev"));
app.use(express.static(ficherosEstaticos));

app.listen(3000, () => {
    console.log("Escuchando en el puerto 3000");
})

