
function mostrarInfo() {
    let edad = $("#campoEdad").prop("value");
    let fumador = $("#campoFumador").prop("checked");
    alert(`Tienes ${edad} años y${fumador ? "" : " no"} eres fumador`);
}

$(() => {
    $("#miBoton").on("click", mostrarInfo);
});
