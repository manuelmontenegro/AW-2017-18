"use strict";

var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var expressValidator = require("express-validator");

var app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(expressValidator({
    customValidators: {
        empiezaPorA: function(param) {
            return param.startsWith("a");
        }
    }
}));


app.get("/index.html", (request, response) => {
    response.render("index", {errores: [], usuario: {}}); 
});

app.post("/procesar_formulario", (request, response) => {
    request.checkBody("login", "Nombre de usuario no válido").matches(/^[A-Z0-9]*$/i);
    request.checkBody("login", "Nombre de usuario vacío").notEmpty();
    request.checkBody("login", "Nombre de usuario no empieza por a").empiezaPorA();
    request.checkBody("pass", "La contraseña no tiene entre 6 y 10 caracteres").isLength({ min: 6, max: 10 });
    request.checkBody("email", "Dirección de correo no válida").isEmail();
    request.checkBody("fechaNacimiento", "Fecha de nacimiento no válida").isBefore();
    request.getValidationResult().then((result) => {
        if (result.isEmpty()) {
            response.redirect("/correcto.html");
        } else {
            console.log(result.array());
            console.log(result.mapped());
            var usuarioIncorrecto = {
                login: request.body.login,
                pass: request.body.pass,
                email: request.body.email,
                fechaNacimiento: request.body.fechaNacimiento
            };
            response.render("index", {errores: result.mapped(), usuario: usuarioIncorrecto });
        }
    });
});

app.use((req, res, next) => {
    res.status(404);
    res.end("Not found: " + req.url);
});

app.listen(3000, (err) => {
    console.log("Escuchando en el puerto 3000");
});