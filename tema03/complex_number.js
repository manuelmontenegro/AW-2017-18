"use strict";


/*
    Generación de objetos que implementan los números complejos
*/



function construirComplejo(real, imag) {
    let result = {
        r : real,
        i : imag,
        modulo : function() {
                return Math.sqrt(this.r * this.r + this.i * this.i);
        },
        argumento :  function() {
                return Math.atan2(this.i, this. r);
        }       
    };
    return result;
}



let c1 = construirComplejo(-3, 0);
console.log(c1.argumento());

let c2 = construirComplejo(1, 1);
console.log(c2.modulo());

/*
prototipoComplejo.coordsPolares = function() {
    console.log(`(${this.modulo()}, ${this.argumento()})`);
}

prototipoComplejo.toString = function() {
    return `(${this.r}, ${this.i})`;
}


c1.coordsPolares();
c2.coordsPolares();

console.log(c1.toString());
*/






