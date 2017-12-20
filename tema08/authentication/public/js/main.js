$(() => {
    let user = "manuel";
    let pass = "123456";
    
    let cadenaBase64 = btoa(user + ":" + pass);
    
    $.ajax({
       method: "GET",
       url: "/protegido",
       beforeSend: (req) => {
           req.setRequestHeader("Authorization", "Basic " + cadenaBase64);
       },
       success: (data, state, jqXHR) => {
           if (data.permitido) {
               console.log("¡Acceso permitido!");
           } 
       },
       error: (jqXHR, textStatus, errorThrown) => {
           console.log(errorThrown);
       }
    });
});