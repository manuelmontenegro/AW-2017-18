"use strict";

/**
 * Las instancias de esta clase representan números complejos.
 */
class Complejo {

    /**
     * Construye un número complejo a partir de sus partes real e imaginaria.
     *
     * Puede construirse un número a partir de su forma polar mediante
     * la función {@link Complejo.desdePolar}
     *
     * @param {number} real Parte real
     * @param {number} imag Parte imaginaria
     */
    constructor(real, imag) {
        this.r = real;
        this.i = imag;
    }
    
    /**
     * Propiedad que contiene el módulo de un número complejo.
     *
     * Puede modificarse por cualquier otro número no negativo.
     *
     */
    get modulo() {
      return Math.sqrt(this.r * this.r + this.i * this.i);
    }
    
    
    /**
     * Propiedad que contiene el argumento de un número complejo.
     *
     * Es una propiedad de solo lectura.
     */
    get argumento() {
        return Math.atan2(this.i, this.r);
    }
    

    /**
     * Obtiene un número complejo a partir de su representación en
     * forma polar.
     *
     * @param {number} mod Módulo del número complejo a crear
     * @param {number} arg Argumento (en radianes) del número complejo a crear
     */
    static desdePolar(mod, arg) {
        let real = mod * Math.cos(arg),
            imag = mod * Math.sin(arg);
        return new Complejo(real, imag);
    }    
    
    toString() {
        return `(${this.r}, ${this.i})`;
    }
}




let c1 = new Complejo(1, 1);
console.log(`El número complejo es: ${c1}`);
console.log(c1.modulo);
/* c1.modulo = 3; */
console.log(`(${c1.r}, ${c1.i})`);

let c2 = Complejo.desdePolar(1, Math.PI / 4);
console.log(`(${c2.r}, ${c2.i})`);
