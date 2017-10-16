"use strict";

// Este programa calcula la suma de cuadrados
// del array 'arr'.

let sum = 0;
let arr = [1, 4, 8, 1, 3];

debugger; // Punto de ruptura

for (let i = 0; i < arr.length; i++) {
    sum += arr[i] * arr[i];
}

console.log(sum);
