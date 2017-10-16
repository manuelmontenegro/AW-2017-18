"use strict";

/*
    Añadiendo atributos y cambiando atributos a los objetos.
*/

let x = {
    nombre: "Ana María",
    apellidos: "Gamboa Esteban",
    edad: 54
};

console.log(Object.keys(x));

if ("edad" in x) {
    console.log("x tiene un atributo llamado 'edad'");
}

let y = {};

x.edad++;
x.nombre = "Ana Josefa";
y.nombre = "Javier";

delete x.edad;

console.log(x);
console.log(y);

let z = {
    "Atributo con espacios": 21,
    "14": "foo",
    "false": "ok"
};

console.log(z["Atributo con espacios"]);
let coords1 = { x: 20, y: 30 };
let coords2 = { x: 20, y: 30 };
let coords3 = coords1;


console.log(coords1 === coords2);
console.log(coords1 === coords3);


