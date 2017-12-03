function actualizarEtiqueta(elem) {
    let ancho = Math.round(elem.width());
    let alto = Math.round(elem.height());
    $("div.tamaño").text(`${ancho} x ${alto}`);
}


$(document).ready(() => {
    let parrafo = $("div.parrafo");
    actualizarEtiqueta(parrafo);
    
    $("#aumentarAnchura").on("click", () => {
        let current = parrafo.width();
        parrafo.width(current + 20);
        actualizarEtiqueta(parrafo);
    });
});
