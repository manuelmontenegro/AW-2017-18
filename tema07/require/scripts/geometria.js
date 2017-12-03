"use strict";

// Módulo geometria. Exporta varias funciones que calculan áreas
// de figuras geométricas.


define(["math/sqr"], (sqr) => {

    function areaCuadrado(lado) {
        return sqr(lado);
    }

    function areaCirculo(radio) {
        return Math.PI * sqr(radio);
    }

    function perimetroCuadrado(lado) {
        return 4 * lado;
    }

    function perimetroCirculo(radio) {
        return 2 * Math.PI * radio;
    }

    return {
            areaCuadrado: areaCuadrado,
            areaCirculo: areaCirculo,
            perimetroCuadrado: perimetroCuadrado,
            perimetroCirculo: perimetroCirculo
        };

});
