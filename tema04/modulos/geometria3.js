/*
 Módulo con operaciones de cálculo de áreas.
 
 Versión 3. Definiendo las funciones dentro del espacio module.exports.
*/
"use strict";

module.exports.areaCuadrado = (lado) => {
        return lado * lado;
};

module.exports.areaCirculo = (radio) => {
    return Math.PI * radio * radio;
};

module.exports.perimetroCuadrado = (lado) => {
    return 4 * lado;
};

module.exports.perimetroCirculo = (radio) => {
    return 2 * Math.PI * radio;
};



