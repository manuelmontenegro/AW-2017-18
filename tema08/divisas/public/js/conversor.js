$(document).ready(function() {
    $.ajax({
        type: 'GET',
        url: '/currencies',
        success: function (data, textStatus, jqXHR) {
            data.forEach(function(elem) {
                $("#from").append(
                        $("<option>").prop("value", elem).text(elem)
                 );                
                $("#to").append(
                        $("<option>").prop("value", elem).text(elem)
                 );                
            });
        }
    });
    
    $("#convertir").on("click", function() {
        var cantidad = $("#cantidad").val();
        var monedaFrom = $("#from").find("option:selected").val();
        var monedaTo = $("#to").find("option:selected").val();
        $.ajax({
            type: 'GET',
            url: '/currency',
            data: {
                from: monedaFrom,
                to: monedaTo,
                quantity: cantidad
            },
            success: function (data, textStatus, jqXHR) {
                $("#resultadoFrom").text(monedaFrom + " " + cantidad);
                $("#resultadoTo").text(monedaTo + " " + 
                        Math.round(Number(data.result) * 100) / 100);
            }
        });
    });
});
















