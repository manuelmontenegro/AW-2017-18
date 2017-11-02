/*
 Módulo con operaciones de cálculo de áreas.
 
 Versión 2. Definiendo las funciones dentro del objeto a exportar.
*/
"use strict";

module.exports = {
    areaCuadrado: (lado) => {
        return lado * lado;
    },

    areaCirculo: (radio) => {
        return Math.PI * radio * radio;
    },

    perimetroCuadrado: (lado) => {
        return 4 * lado;
    },
    
    perimetroCirculo: (radio) => {
        return 2 * Math.PI * radio;
    }
};
