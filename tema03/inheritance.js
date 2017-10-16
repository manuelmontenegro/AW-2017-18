class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this._edad = edad;
    }
    
    get edad() {
        return this._edad;
    }
    
    set edad(newEdad) {
        if (newEdad >= 0) {
            this._edad = newEdad;
        }
    }
}

class Empleado extends Persona {
    constructor(nombre, edad, sueldo) {
        super(nombre, edad);
        this.sueldo = sueldo;
    }
}

let p = new Persona("Elena", 23);
p.edad = -2;
console.log(p.edad);

let e = new Empleado("Elena", 23, 1600);
console.log(e.edad);
console.log(e.sueldo);