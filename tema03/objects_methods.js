"use strict";

/*
    Primeros métodos.
*/

let empleado = {
    nombre: "Manuel",
    
    saludar: function() {
        console.log("¡Hola, " + this.nombre + "!");
    },
    
    cambiarNombre: function(nuevoNombre) {
        this.nombre = nuevoNombre;
    }
};

empleado.saludar();
empleado.cambiarNombre("Irene");
empleado.saludar();



let otro_empleado = {
    nombre: "David"
};

otro_empleado.saludar = empleado.saludar;
otro_empleado.saludar();

// let f = empleado.saludar;
// f();


