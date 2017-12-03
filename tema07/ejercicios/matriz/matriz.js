// Ejercicio 1 - Visualización de una matriz

var m = [
    [ "Esto", "es" , "una fila" ],
    [ "aquí", "va" , "otra fila" ],
    [ "y", "aquí", "otra más" ]
];


function insertMatrix(selector, matriz, callback) {
    // Para cada fila de la matriz, obtengo un
    // elemento <tr>...</tr>
    var filas = matriz.map(function(filaMatriz) {
    
        // Para cada celda de la fila actual (filaMatriz)
        // obtengo un elemento <td>
        var celdas = filaMatriz.map(function(elem) {
            var celda = $("<td>").text(elem);
            
            // ---  Apartado (b): Añadir esto --------
            celda.on("click", function() {
                callback(elem);
            });
            // ---------------------------------------
            
            return celda;
        }); 
        
        // Creamos una fila <tr> y añadimos las celdas
        var fila = $("<tr>");
        fila.append(celdas);
        return fila;
    });
    
    // Con las filas de la tabla guardadas en el array 'filas'
    // creamos una tabla.
    var tabla = $("<table>").addClass("generada");
    tabla.append(filas);
    
    // Añadimos la tabla a el/los elemento/s seleccionado/s
    $(selector).append(tabla);
    
}

$(document).ready(function() {
    insertMatrix("#matriz", m, function(elemPulsado) {
        alert("Se ha pulsado sobre: " + elemPulsado);
    });
});

