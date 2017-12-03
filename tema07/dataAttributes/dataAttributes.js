
$(document).ready(() => {
    // Descomentar si no se incluye el atributo
    // data-number dentro del código HTML
    
    // $("#elem").data("number", 1 );

    $("#incrementar").on("click", () => {
        var elemento = $("#elem");
        var num = elemento.data("number");
        elemento.data("number", num + 1);
    });
    
    $("#obtener").on("click", () => {
        alert($("#elem").data("number"));
    });
});
