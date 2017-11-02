/*
  Módulo que exporta una función con el mismo nombre que moduloFib.js
  pero con una implementación distinta.
*/
"use strict";

var PHI = (1 + Math.sqrt(5)) / 2;

function fibMasEficiente(n) {
    var p1 = Math.pow(PHI, n);
    var p2 = Math.pow(1 - PHI, n);
    return Math.round((p1 - p2) / Math.sqrt(5));
}

function fib(n) {
    console.assert(typeof(n) === "number",
        `fib: ${n} is not a number`);
    return fibMasEficiente(n);
}

module.exports = fib;
