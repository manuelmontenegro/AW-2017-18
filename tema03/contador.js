"use strict";


/*
    El valor devuelto por la función contador está ligado
    a la variable 'i' de la llamada correspondiente.
*/
function contador() {
    let n = 0;
    return () => {
                n++;
                return n;
           }
}

let c1 = contador();
let c2 = contador();

console.log(c1());
console.log(c1());
console.log(c1());
console.log(c2());
console.log(c2());
console.log(c1());

