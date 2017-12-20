$(() => {
    $.ajax({
        type: 'GET',
        url: '/currencies',
        success: (data, textStatus, jqXHR) => {
            data.forEach(elem => {
                $("#from").append(
                        $("<option>").prop("value", elem).text(elem)
                 );                
                $("#to").append(
                        $("<option>").prop("value", elem).text(elem)
                 );                
            });
        }
    });
    
    $("#convertir").on("click", () => {
        let cantidad = $("#cantidad").val();
        let monedaFrom = $("#from").find("option:selected").val();
        let monedaTo = $("#to").find("option:selected").val();
        $.ajax({
            type: 'GET',
            url: '/currency',
            data: {
                from: monedaFrom,
                to: monedaTo,
                quantity: cantidad
            },
            success: (data, textStatus, jqXHR) => {
                $("#resultadoFrom").text(monedaFrom + " " + cantidad);
                $("#resultadoTo").text(monedaTo + " " + 
                        Math.round(Number(data.result) * 100) / 100);
            }
        });
    });
});
















