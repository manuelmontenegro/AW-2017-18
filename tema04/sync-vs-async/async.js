/*
 * Lectura asíncrona de un fichero.
 */

"use strict";

const fs = require("fs");

fs.readFile("FichTexto.txt", 
            { encoding: "utf-8" },
            (err, contenido) => {
                if (err) {
                    console.log("Se ha producido un error:");
                    console.log(err.message);
                } else {
                    console.log("Fichero leído correctamente:");
                    console.log(contenido);
                }        
            });
