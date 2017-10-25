/*
    Pruebas con funciones de orden superior
*/

"use strict";


let personas = [ { nombre: "Ricardo", edad: 45}, 
                 { nombre: "Julia", edad: 24 }, 
                 { nombre: "Ashley", edad: 28 } ];

personas.forEach(p => {
    console.log(`Hola, me llamo ${p.nombre} y tengo ${p.edad} años`);
})                 

let a = [1, 3, 5, 2, 4];
let dobles = a.map(n => n * 2);

let pares = a.filter(n => n % 2 === 0);

console.log(dobles); // [2, 6, 10, 4, 2]

console.log(pares); // [2, 4]

let b = [2, 6, 9, 1];
let final = b.reduce((acum, n) => 2 * acum + n, 7);
console.log(final);

console.log(
    [1, 5, 7, 4].reduce((acum, x) => { return acum + x; }, 0)
);

console.log(
    [1, 5, 7, 4].reduce((acum, x) => { return acum * x; }, 0)
);

console.log(
    [6, 1, 4, 3, 7].reduce((acum, x) => { 
        return Math.max(acum, x);
    }, -Infinity)
);
