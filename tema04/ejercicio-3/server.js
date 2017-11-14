const http = require("http");
const path = require("path");
const fs = require("fs");
const url = require("url");
const DAO = require("./dao");

/*
    Inicializamos DAO
*/
const daoMensajes = new DAO("localhost", "root", "", "mensajeria_instantanea");

/*
    El siguiente objeto relaciona URLs de recursos estáticos
    con ficheros físicos dentro del sistema de archivos
*/
const staticAssets = new Map();

staticAssets.set(
    "/form.html",
    path.join(__dirname, "public", "form.html")
);

staticAssets.set(
    "/form.css",
    path.join(__dirname, "public", "form.css")
);


const servidor = http.createServer((request, response) => {
    /* 
       Si la URL se corresponde con un recurso estático, leemos
       el fichero correspondiente y devolvemos su contenido
    */
    if (request.method === "GET" && staticAssets.has(request.url)) {
        fs.readFile(staticAssets.get(request.url), { encoding: "utf8" },
            (err, content) => {
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
        let usuario = {
            nombre: urlObj.query.nombre,
            correo: urlObj.query.correo,
            telefono: urlObj.query.telefono
        };
        daoMensajes.insertarUsuario(usuario, (err) => {
            if (err) {
                response.statusCode = 500;
                response.write(err.message);
                response.end();
            } else {
                response.statusCode = 200;
                response.write(`Inserted user with id: ${usuario.id}`);
                response.end();
            }
        });
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