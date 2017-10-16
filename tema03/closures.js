/*
 * Pruebas con variables referenciadas desde funciones
 * anónimas.
 */

"use strict";


let y = 3; // Variable global

let f = x => x + y;

console.log(f(5));

y = 9;
console.log(f(2));


let z = 3;

function g() {
    let z = 7;
    return x => z + x;
}

let h = g();
console.log(h(5));
