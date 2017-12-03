function abrirVentana() {
    $("#ventana").show();
}

function cerrarVentana() {
    $("#ventana").hide();
}


$(() => {
    $("#mostrarVentana").on("click", abrirVentana);
    $("#ventana span.cerrar").on("click", cerrarVentana);
    $("#cerrar").on("click", cerrarVentana);
});

