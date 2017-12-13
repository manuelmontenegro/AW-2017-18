function insertMatrix(selector, matrix) {
    let tabla = $("<table>");
    matrix.forEach((fila, indFila) => {
        let tr = $("<tr>");
        fila.forEach((celda, indColumna) => {
            let td = $("<td>").text(celda);
            td.on("click", () => {
                let input = $('<input>')
                                .prop("type", "text")
                                .prop("value", matrix[indFila][indColumna])
                                .width(td.width());
                input.on("click", (event) => {
                    event.stopPropagation();
                });
                input.on("blur", () => {
                    let valorIntroducido = input.prop("value");
                    matrix[indFila][indColumna] = valorIntroducido;
                    td.text(valorIntroducido);
                });
                td.text("");
                td.append(input);
                input.focus();
                console.log(matrix[indFila][indColumna]);
            });
            tr.append(td);
        });
        tabla.append(tr);
    });

    tabla.hide();
    $(selector).append(tabla);    
    tabla.fadeIn(1000);
}

let m = [
    [ "Esto", "es" , "una fila" ],
    [ "aquí", "va" , "otra fila" ],
    [ "y" , "aquí", "otra más"]
];

$(() => {
    insertMatrix("div.mia", m);
    m[0][0] = "DASDASDASADS";
});

