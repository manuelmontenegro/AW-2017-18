
function botonPulsado() {
    $("li").css("background-color", "#FFFFD0");
    $("p.entradilla").addClass("seleccionado");
    
}

$(() => {
    $("#miBoton").on("click", botonPulsado);
});
