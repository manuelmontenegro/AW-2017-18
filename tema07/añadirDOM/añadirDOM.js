
$(() => {
    $("#anyadirElemento").on("click", () => {
        var nuevoElemento = $("<li>Nuevo elemento</li>");
        $("#listaNumerada").append(nuevoElemento);
    });
});
