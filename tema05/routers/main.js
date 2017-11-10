
"use strict";

const express = require("express");
const path = require("path");

const app = express();

const miRouter = require("./miRouter");

app.use("/usuarios", miRouter);

app.listen(3000, () => {
    console.log("Escuchando en el puerto 3000");
});

