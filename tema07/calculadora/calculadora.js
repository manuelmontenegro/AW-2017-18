"use strict";

$(() => {
    let numeroActual = 0;
    let primerNumero = null;
    let operacionActual = null;

    $("div.numero").on("click", (event) => {
        let numeroPulsado = $(event.target).data("numero");
        numeroActual = numeroActual * 10 + Number(numeroPulsado);
        $("div.resultado").text(numeroActual);
    });

    $("div.operacion").on("click", (event) => {
        let operacionPulsada = $(event.target).data("op");
        primerNumero = numeroActual;
        numeroActual = 0;
        switch(operacionPulsada) {
            case "+": operacionActual = (x, y) => x + y; break;
            case "-": operacionActual = (x, y) => x - y; break;
            case "*": operacionActual = (x, y) => x * y; break;
            case "/": operacionActual = (x, y) => x / y; break;
        }
    });

    $("#igual").on("click", () => {
        console.log("Estoy aquí!");
        if (primerNumero !== null && operacionActual !== null) {
            let resultado = operacionActual(primerNumero, numeroActual);
            $("div.resultado").text(resultado);
            numeroActual = resultado;
            primerNumero = resultado;
            operacionActual = null;
        }
    });

    $("#reset").on("click", () => {
        numeroActual = 0;
        $("div.resultado").text(numeroActual);
        operacionActual = null;
        primerNumero = null;
    });
});
