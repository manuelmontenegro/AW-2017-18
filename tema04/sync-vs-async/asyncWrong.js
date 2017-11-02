/*
 * Lectura asíncrona realizada de modo incorrecto.
 */

"use strict";

const fs = require("fs");

let contenidoFichero;

fs.readFile("FichTexto.txt", 
            { encoding: "utf-8" },
            (err, contenido) => {
                if (!err) {
                    contenidoFichero = contenido;
                    console.log(contenidoFichero);
                }        
            });

// Esta línea se ejecutará sin que el fichero se haya leído.
// Por tanto, la variable contenidoFichero tiene aún el valor
// undefined.
console.log(contenidoFichero);
