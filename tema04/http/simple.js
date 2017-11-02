const http = require("http");

const servidor = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    response.write('<!DOCTYPE html>');
    response.write('<html>');
    response.write('<head>');
    response.write('<title>Página de prueba</title>');
    response.write('<meta charset="utf-8">');
    response.write('</head>');
    response.write('<body><ul>');
    for (let i = 0; i < 10; i++) {
        response.write(`<li>Item ${i}</li>`);
    }
    response.write('</ul></body>');
    response.end();
});

servidor.listen(3000, (err) => {
    if (err) {
        console.log(`Error al escuchar en el puerto ${err}`);
    } else {
        console.log("Servidor escuchando en el puerto 3000.");
    }
});
