
$(() => {
    $(document).on("keydown", (event) => {
        event.preventDefault();
        $(".indicador").removeClass("activo");
        $("#codigoTecla").text(event.which);
        if (event.ctrlKey) {
            $("#ctrl").addClass("activo");
        }
        if (event.metaKey) {
            $("#meta").addClass("activo");
        }
        if (event.altKey) {
            $("#alt").addClass("activo");
        }
        if (event.shiftKey) {
            $("#shift").addClass("activo");
        }
        // Para evitar que la pulsación sea capturada
        // por el navegador
    });
});
