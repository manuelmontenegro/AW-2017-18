$(document).ready(function() {
    var user = "manuel";
    var pass = "123456";
    
    var cadenaBase64 = btoa(user + ":" + pass);
    
    $.ajax({
       method: "GET",
       url: "/protegido",
       beforeSend: function(req) {
           req.setRequestHeader("Authorization", "Basic " + cadenaBase64);
       },
       success: function(data, state, jqXHR) {
           if (data.permitido) {
               console.log("¡Acceso permitido!");
           } 
       },
       error: function (jqXHR, textStatus, errorThrown) {
           console.log(errorThrown);
       }
    });
});