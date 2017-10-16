"use strict";

/*
    Reutilización de métodos entre objetos
*/


function moduloComplejo() {
    return Math.sqrt(this.r * this.r + this.i * this.i);
}

function argumentoComplejo() {
    return Math.atan2(this.i, this. r);
}

function construirComplejo(real, imag) {
    return {
        r : real,
        i : imag,
        modulo: moduloComplejo,
        argumento: argumentoComplejo
    }
}

let x = construirComplejo(-3, 1);

let c1 = construirComplejo(-3, 0);
console.log(c1.argumento());

let c2 = construirComplejo(1, 1);
console.log(c2.modulo());


c1.coordenadasPolares = function() {
    console.log("(" + this.modulo() + ", " + this.argumento() + ")");
}
c1.coordenadasPolares();



