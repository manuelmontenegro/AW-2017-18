const http = require("http");
const path = require("path");
const fs = require("fs");
const url = require("url");


const staticAssets = {
    "/index.html": 
        path.join(__dirname, "public", "index.html"),
    "/index.css": 
        path.join(__dirname, "public", "index.css")
}

const servidor = http.createServer((request, response) => {
    if (request.method === "GET" && request.url in staticAssets) {
        fs.readFile(staticAssets[request.url], { encoding: "utf8" }, (err, content) => {
            if (err) {
                response.statusCode = 404;
                response.end();
            } else {
                response.statusCode = 200;
                response.write(content);
                response.end();
            }
        });
    } else if (request.method === "GET" && request.url.startsWith("/nuevo_usuario")) {
        const urlObj = url.parse(request.url, true);
        console.log("Añadiendo usuario");
        console.log(`  Nombre: ${urlObj.query.nombre}`);
        console.log(`  Correo: ${urlObj.query.correo}`);
        console.log(`Telefono: ${urlObj.query.telefono}`);
        response.statusCode = 200;
        response.end();
    } else {
        response.statusCode = 404;
        response.end();
    }
});

servidor.listen(3000, (err) => {
    if (err) {
        console.log(`No se puede iniciar el servidor: ${err}`);
    } else {
        console.log("Servidor inicializado en el puerto 3000.");
    }
})