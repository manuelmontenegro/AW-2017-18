"use strict";

// testModules.js
// --------------

const fib = require("./moduloFib2.js");

for (let i = 0; i < 15; i++)
    console.log(`fib(i) = ${fib(i)}`);


const geometria = require("./geometria.js");

console.log(geometria.areaCuadrado(10));
console.log(geometria.areaCirculo(10));

const os = require("os");
console.log(`Nombre del host: ${os.hostname()}`);
console.log(`Directorio personal: ${os.homedir()}`);

const util = require("util");
const mensaje = util.format("Tienes %d años", 45);
console.log(mensaje);

