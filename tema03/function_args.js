/*
 * Experimentando con funciones con un número variable de argumentos
 */ 

"use strict";

/*
    Esta función imprime los argumentos dados.
*/    

function imprime_args(p1, p2, p3) {
    console.log("p1: " + p1);
    console.log("p2: " + p2);
    console.log("p3: " + p3);
}

/*
    El parámetro 'color' es opcional. Su valor por defecto
    es 'negro'.
    
    El parámetro 'trazo' especifica el grosor del trazo y
    también es opcional. Su valor por defecto es 1.
*/
function pintar_circulo(x, y, color, trazo) {
    if (color === undefined) color = "negro";
//    color = color || "negro";
    if (trazo === undefined) trazo = 1;
    
    console.log(`Pintar círculo en (${x}, ${y}) con color ${color}`
        + ` y trazo de grosor ${trazo}`);
}


/*
    Igual que el anterior, pero utilizando los parámetros opcionales
    de ES6.
*/
function pintar_circulo_opt(x, y, color = "negro", trazo = 1) {
    console.log(`Pintar círculo en (${x}, ${y}) con color ${color}`
    + ` y trazo de grosor ${trazo}`);
}



/*
    El objeto 'ops' tiene los parámetros opcionales
    como atributo      
*/
function abrir_fichero(nombre, ops) {
    if (ops === undefined) ops = {};
    if (ops.solo_lectura === undefined) ops.solo_lectura = true;
    if (ops.binario      === undefined) ops.binario      = false;
    
    console.log("Abriendo fichero "
        + (ops.binario ? "binario " : "")
        + nombre + " en modo "
        + (ops.solo_lectura ? "lectura" : "lectura/escritura"));
        
}

/*
    Igual que el anterior, pero utilizando los parámetros opcionales
    de ES6.
*/
function abrir_fichero_opt(nombre, {solo_lectura, binario} = {}) {
    console.log("Abriendo fichero "
        + (binario ? "binario " : "")
        + nombre + " en modo "
        + (solo_lectura ? "lectura" : "lectura/escritura"));
        
}
    

imprime_args(1, "bar", true);
imprime_args("uno", "dos", "tres", "cuatro");
imprime_args("uno", "dos");


pintar_circulo_opt(10, 10, "rojo", 3);
pintar_circulo_opt(20, 0, "verde");
pintar_circulo_opt(0, 0);



abrir_fichero_opt("mio.txt");
abrir_fichero_opt("mio.txt", { solo_lectura: false });
abrir_fichero_opt("mio.txt", { binario: true });
abrir_fichero_opt("mio.txt", { binario: true, solo_lectura: false });
abrir_fichero_opt("mio.txt", { solo_lectura: true, binario: false });
