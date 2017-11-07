let fs = require("fs");

/*
Solución 1 - Incorrecta.

El 'return lineas[0]' no marca el retorno de la función 'primeraLinea1',
sino el retorno de la función pasada como tercer parámetro a readFile.

*/

function primeraLinea1(nombreFich) {
    fs.readFile(
        nombreFich, 
        { encoding: "utf-8" },
        (err, contenido) => {
            let lineas = contenido.split("\n");
            return lineas[0];
        }
    )
}


/*
Solución 2 - Incorrecta.

Cuando la ejecución llega a la sentencia 'return contenido',
el fichero aún no se ha leído, por lo que la asignación
'contenido = lineas[0]' aún no se ha ejecutado. Por tanto,
estamos devolviendo el valor de una variable sin inicializar,
que es undefined.
*/

function primeraLinea2(nombreFich) {
    let contenido;
    fs.readFile(
        nombreFich, 
        { encoding: "utf-8" },
        (err, contenido) => {
            let lineas = contenido.split("\n");
            contenido = lineas[0];
        }
    )
    return contenido;
}

/*
Solución 3 - Incorrecta, y fea.

Por un lado, la solución no funciona, ya que se queda
"enfrascada" en el bucle while. Debido al modo en el que
Node maneja los eventos (que no hemos visto en clase), 
la ejecución de la función callback pasada a readFile
no se va a llevar a cabo hasta que el bucle haya finalizado.
(Hay una especie de interbloqueo).

Por otro lado, la solución es poco elegante. Al fin y al cabo,
esta solución bloquea la ejecución del programa de manera
artificial hasta que la lectura termine. Para hacer este bloqueo
podríamos haber utilizado la función readFileSync.
*/

function primeraLinea3(nombreFich) {
    let contenido = null;
    fs.readFile(
        nombreFich, 
        { encoding: "utf-8" },
        (err, contenido) => {
            let lineas = contenido.split("\n");
            contenido = lineas[0];
        }
    )
    while (contenido === null) {}
    return contenido;
}

/*
 Solución 4 - Correcta.

 No tenemos otro remedio que admitir que no es posible
 devolver directamente la primera línea del fichero. Lo más
 que podemos hacer es recibir una función `callback` y llamar
 a dicha función con el resultado de la operación.

 Además, nos adaptamos al convenio de funciones `callback` de node,
 que consiste en que la función callback recibe dos parámetros:

 * Un parámetro para expresar las posibles situaciones de error,
   que tomará el valor null en caso de no producirse.

 * Otro parámetro para devolver el resultado de la operación.
   Toma como valor undefined, si no hay ningún resultado, o se
   produjo un error.
*/

function primeraLinea4(nombreFich, callback) {
    fs.readFile(
        nombreFich, 
        { encoding: "utf-8" },
        (err, contenido) => {
            if (err) {
                callback(err); // Equivale a callback(err, undefined)
            } else {
                let lineas = contenido.split("\n");
                callback(null, lineas[0]);    
            }
        }
    )
}

/*
  Hacemos uso de nuestra función.
*/
primeraLinea4("ejemplo.txt", (err, linea) => {
    if (err) {
        console.log(`Se ha producido un error ${err.message}`);
    } else {
        console.log(linea);
    }
});
