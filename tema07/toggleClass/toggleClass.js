
$(() => {
    let cabecera = $("h1").eq(0);
    cabecera.on("click", () => {
        cabecera.toggleClass("rojo");
    });
    
    $("#botonVerde").on("click", () => {
        cabecera.css("color", "green");
    });
    
    $("#tamanyoActual").on("click", () => {
        alert("Tamaño actual: " + cabecera.css("font-size"));
    });
    
    $("#aumentarTamanyo").on("click", () => {
        let actual = cabecera.css("font-size");
        let numPixels = /([0-9]+)px/.exec(actual)[1];
        cabecera.css("font-size", Number(numPixels) + 5 + "px");
    });
});
