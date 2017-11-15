const http = require("http");
const path = require("path");
const fs = require("fs");

let servidor = http.createServer((request, response) => {
    console.log("Petición recibida!");
    console.log(request.method);
    console.log(request.url);
    console.log(request.headers);

    if (request.url === "/" && request.method === "GET") {
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/html");
        response.write("<!DOCTYPE html>");
        response.write("<html>");
        response.write("<body><ul>");
        for (let i = 0; i < 10; i++) {
            response.write(`<li>Elemento numero ${i}</li>`);
        }
        response.write("</ul><img src='/imagen'></body>");
        response.write("</html>");
        response.end();    
    } else if (request.url === "/imagen" && request.method === "GET") {
        let ruta = path.join(__dirname, "images", "everywhere.jpg");
        fs.readFile(ruta, (err, contenido) => {
            response.statusCode = 200;
            response.setHeader("Content-Type", "image/jpeg");
            response.write(contenido);
            response.end();
        });
    } else {
        response.statusCode = 404;
        response.end();
    }
});

servidor.listen(3000);

