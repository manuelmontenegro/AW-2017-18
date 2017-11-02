var path = require("path");

var infoFichero = path.parse(__filename);

console.log(infoFichero);

var nuevoFichero = path.join(infoFichero.dir, "nuevo", infoFichero.base);
console.log(nuevoFichero);