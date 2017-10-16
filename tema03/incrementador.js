/*
 * Otro ejemplo del uso de clausuras. En este
 * caso tenemos una función incrementador que devuelve
 * una funcion que suma un valor dado al parámetro.
 */

"use strict";
function incrementador(n) {
    return x => x + n;
}


let inc1 = incrementador(1);
console.log(inc1(5));
console.log(inc1(9));
let inc3 = incrementador(3);
console.log(inc3(5));
console.log(inc3(9));


