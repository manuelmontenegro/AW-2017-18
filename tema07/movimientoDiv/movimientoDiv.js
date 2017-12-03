"use strict";

const IZQUIERDA = 37;
const DERECHA = 39;
const ARRIBA = 38;
const ABAJO = 40;

$(document).ready(function() {
    var parrafo = $("div.parrafo");
    
    $("body").on("keydown", function(evt) {
        var incremento = { x: 0, y: 0 };
        
        switch (evt.which) {
            case IZQUIERDA:
                incremento.x = -10;
                break;
            case DERECHA:
                incremento.x = 10;
                break;
            case ARRIBA:
                incremento.y = -10;
                break;
            case ABAJO:
                incremento.y = 10;
                break;
        }
        
        parrafo.offset(function(index, current) {
            return { top: Math.max(current.top + incremento.y, 0),
                     left: Math.max(current.left + incremento.x, 0) };
        });
        
        evt.preventDefault();
    });
});
