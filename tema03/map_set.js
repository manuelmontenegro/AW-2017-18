class Diccionario {
    constructor() {
        this.dict = {};
    }
    
    insertar(clave, valor) {
        this.dict[clave] = valor;
    }
    
    buscar(clave) {
        return this.dict[clave];
    }
    
    contieneClave(clave) {
        return this.dict[clave] !== undefined;
    }
}

let d = new Diccionario();
d.insertar(1, "Pepe");

console.log(d.buscar(1));
console.log(d.contieneClave("toString"));

let d2 = new Map();
d2.set(1, "Pepe");

console.log(d2.get(1));
console.log(d2.has(1));
console.log(d2.has("toString"));