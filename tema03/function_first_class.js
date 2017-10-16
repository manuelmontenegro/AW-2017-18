/*
 * Funciones como ciudadanos de primera clase.
 */

"use strict";

function incrementar(x) {
    return x + 1;
}

function duplicar(x) {
    return 2 * x;
}

function cuadrado(y) {
    return y * y;
}

function factorial(n) {
    if (n <= 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

/*
 * Aplica un array de funciones a un elemento dado
 */
function aplicar_funciones(funs, z) {
    for (let i = 0; i < funs.length; i++) {
        console.log(`Aplicar función ${i} pasando ${z}: ${funs[i](z)}`);
    }
}

/*
 * Dada una cadena indicando el mnemónico de una de las
 * funciones definidas arriba, devuelve la función correspondiente
 */
function buscar_por_nombre(nombre) {
    switch(nombre) {
        case "INC": return incrementar;
        case "DUP": return dup;
        case "SQR": return cuadrado;
        case "FCT": return factorial;
        default   : return undefined;
    }
}




let f = incrementar;
console.log(f(5));
f = factorial;
console.log(f(10));

aplicar_funciones([incrementar, duplicar, cuadrado, factorial], 5);


let g = buscar_por_nombre("INC");
console.log(g(10));

aplicar_funciones(
    [ function(x) { return x - 3; },
      function(x) { return Math.sqrt(x); },
      factorial,
      function(z) { return Math.log(z); }  ], 5);
 

aplicar_funciones(
    [ x => x - 3, Math.sqrt, factorial, Math.log ], 5
);
          
     

