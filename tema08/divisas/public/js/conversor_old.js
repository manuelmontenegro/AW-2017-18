"use strict";

$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "/currencies",
        success: function (data, textStatus, jqXHR) {
            data.forEach(function(cur) {
                $("#from").append(
                        $("<option>").prop("value", cur).text(cur)
                );
                $("#to").append(
                        $("<option>").prop("value", cur).text(cur)
                );
            });
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
    
    $("#convertir").on("click", function() {
        var from = $("#from").find("option:selected").val();
        var to = $("#to").find("option:selected").val();
        var quantity = $("#cantidad").val();
        if (from === "none" || to === "none" || quantity === "") {
            alert("Parámetros no válidos");
        } else {
            $.ajax({
                type: "GET",
                url: "/currency",
                data: {
                    "from": from,
                    "to": to,
                    "quantity": quantity
                },
                success: function (data, textStatus, jqXHR) {
                    $("#resultadoFrom").text(from + " " + quantity);
                    $("#resultadoTo").text(data.currency + " " + Math.round(data.result * 100) / 100);
                }
            });
        }
    });
});