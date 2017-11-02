/*
  Módulo que exporta una única función.
*/
"use strict";

function fibAux(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fib(n-1) + fib(n-2);
    }
}

function fib(n) {
    console.assert(typeof(n) === "number",
        `fib: ${n} is not a number`);
    return fibAux(n);
}

module.exports = fib;