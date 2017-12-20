$(() => {
    $("#provincias").hide();
    
    $.ajax({
        type: "GET",
        url: "/comunidades",
        success: (data, textStatus, jqXHR) => {
            data.forEach(function(elem, index) {
                let newElem = $("<option>").prop("value", index).text(elem);
                $("#comunidad").append(newElem);
            });
        },
        error: (jqXHR, textStatus, errorThrown) => {
            alert("Error al recuperar las comunidades" + errorThrown);
        }
    });
    
    $("#comunidad").on("change", (evt) => {
        let seleccionado = $("#comunidad option:selected").val();
        console.log(seleccionado);
        if (seleccionado !== "none") {
            $.ajax({
                type: "GET",
                url: "/comunidades/" + seleccionado,
                success: (data, textStatus, jqXHR) => {
                    if (data.length === 0) {
                        $("#provincias").hide();
                    } else {
                        $("#prov option[value!='none']").remove();
                        data.forEach( elem => {
                            let newElem = $("<option>").text(elem);
                            $("#prov").append(newElem);
                        });
                        $("#provincias").show();
                    }
                },
                error: (jqXHR, textStatus, errorThrown) => {
                    alert("Error al recuperar las provincias: " + errorThrown);
                }
            });
        } else {
            $("#provincias").hide();
        }
    });
    
});