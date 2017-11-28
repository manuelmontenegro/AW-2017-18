const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
let app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: false }));
    


let usuarios = ["Javier Montoro", "Dolores Vega", "Beatriz Nito"];

app.get("/", (request, response) => {
    response.redirect("/users.html");
});

app.get("/users.html", (request, response) => {
    response.status(200);
    response.render("users", {
        users: usuarios    
    });
});


app.get("/borrar/:num", (request, response) => {
    let num = Number(request.params.num);
    if (isNaN(num)) {
        response.status(400);
        response.end("Petición incorrecta");
    } else {
        usuarios.splice(num, 1);
        response.redirect("/users.html");
    }
});

app.get("/borrar", (request, response) => {
    let num = Number(request.query.id);
    if (isNaN(num)) {
        response.status(400);
        response.end("Petición incorrecta");
    } else {
        usuarios.splice(num, 1);
        response.redirect("/users.html");
    }
});

app.post("/borrar", (request, response) => {
    let num = Number(request.body.id);
    if (isNaN(num)) {
        response.status(400);
        response.end("Petición incorrecta");
    } else {
        usuarios.splice(num, 1);
        response.redirect("/users.html");
    }    
    
});

app.use((request, response, next) => {
    response.status(404);
    response.write(`ERROR! No se ha encontrado la url ${request.url}`);
    response.end();
});

app.listen(3000, (err) => {
    console.log("Servidor escuchando en puerto 3000");
});