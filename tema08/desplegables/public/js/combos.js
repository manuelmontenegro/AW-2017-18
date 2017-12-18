$(document).ready(function() {
    $("#provincias").hide();
    
    $.ajax({
        type: "GET",
        url: "/comunidades",
        success: function (data, textStatus, jqXHR) {
            data.forEach(function(elem, index) {
                var newElem = $("<option>").prop("value", index).text(elem);
                $("#comunidad").append(newElem);
            });
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Error al recuperar las comunidades" + errorThrown);
        }
    });
    
    $("#comunidad").on("change", function(evt) {
        var seleccionado = $("#comunidad option:selected").val();
        console.log(seleccionado);
        if (seleccionado !== "none") {
            $.ajax({
                type: "GET",
                url: "/comunidades/" + seleccionado,
                success: function (data, textStatus, jqXHR) {
                    if (data.length === 0) {
                        $("#provincias").hide();
                    } else {
                        $("#prov option[value!='none']").remove();
                        data.forEach(function (elem) {
                            var newElem = $("<option>").text(elem);
                            $("#prov").append(newElem);
                        });
                        $("#provincias").show();
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert("Error al recuperar las provincias: " + errorThrown);
                }
            });
        } else {
            $("#provincias").hide();
        }
    });
    
});