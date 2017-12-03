
$(() => {
    $("#campoNumero").on("change", (event) => {
        // Obtenemos valor actual
        let valor = $(event.target).prop("value").trim();
        
        if (valor === "") {
            $("#mensaje").html("El campo está <em>vacío</em>");
        } else if (isNaN(Number(valor))) {
            $("#mensaje").text("No se ha introducido un número");
        } else {
            $("#mensaje").text("");
        }
    });
});
