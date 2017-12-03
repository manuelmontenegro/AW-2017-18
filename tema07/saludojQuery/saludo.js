
function botonPulsado() {
    alert("¡Me has pulsado!");
}

$(() => {
    $("#miBoton").on("click", botonPulsado);
});
