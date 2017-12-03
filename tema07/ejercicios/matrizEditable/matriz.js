// Ejercicio 3 - Edición de una matriz

var m = [
    [ "Esto", "es" , "una fila" ],
    [ "aquí", "va" , "otra fila" ],
    [ "y", "aquí", "otra más" ]
];


function insertMatrix(selector, matriz) {
    // Para cada fila de la matriz, obtengo un
    // elemento <tr>...</tr>
    var filas = matriz.map(function(filaMatriz, indiceFila) {
    
        // Para cada celda de la fila actual (filaMatriz)
        // obtengo un elemento <td>
        var celdas = filaMatriz.map(function(elem, indiceColumna) {
            var celda = $("<td>").text(elem);
            

            celda.on("click", function(event) {
                // Al hacer clic en una celda, creamos un cuadro de texto
                // y reemplazamos el contenido de la celda por el cuadro
                // de texto
                var cuadroTexto = $("<input>").prop("type", "text");
                cuadroTexto.val(matriz[indiceFila][indiceColumna]);
                cuadroTexto.width(celda.width());
                cuadroTexto.height(celda.height());
                celda.empty().append(cuadroTexto);
                celda.addClass("editando");
                
                // Cuando se hace clic en el cuadro de texto (para colocar
                // el cursor de texto), evitamos que la pulsación del ratón
                // sea capturada por la celda. De lo contrario, se volverá
                // a introducir el cuadro de texto en la celda.
                cuadroTexto.on("click", function(event) {
                    event.stopPropagation();
                });
                
                // Hacemos que el cuadro de texto adquiera el foco.
                cuadroTexto.focus();
                
                
                // Cuando el cuadro de texto pierde el foco, o se pulsa
                // el botón de INTRO, se finaliza la edición. La función
                // finalizarEdicion  se encuentra a continuación.
                cuadroTexto.on("blur", finalizarEdicion);
                cuadroTexto.on("keypress", function(event) {
                    if (event.which === 13) {
                        finalizarEdicion();
                    }
                });

                // Al finalizar la edición, reemplazamos el cuadro de texto
                // por el contenido de la celda, y actualizamos la matriz
                function finalizarEdicion() {
                    celda.text(cuadroTexto.val());
                    matriz[indiceFila][indiceColumna] = cuadroTexto.val();
                }

            });
            
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
    insertMatrix("#matriz", m);

