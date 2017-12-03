$(() => {
    let contador = 3;

    $("#anyadir").on("click", () => {
        contador++;
        let newElem = $(`<li>Elemento ${contador}</li>`);
        $("#listaElementos").append(newElem);
    })

    // $("#listaElementos li").on("click", (event) => {
    $("#listaElementos").on("click", "li", (event) => {
        let elementoPulsado = $(event.target);
        alert(`Has hecho clic en ${elementoPulsado.text()}`);
    });
    
});