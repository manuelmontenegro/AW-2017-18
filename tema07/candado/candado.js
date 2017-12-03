let candadoAbierto = true;

function cambiarCandado() {
    candadoAbierto = !candadoAbierto;
    if (candadoAbierto) {
        $("#candado").prop("src", "img/CandadoAbierto.svg");
    } else {
        $("#candado").prop("src", "img/CandadoCerrado.svg");    
    }
}

$(() => {
    $("#miBoton").on("click", cambiarCandado);
});
