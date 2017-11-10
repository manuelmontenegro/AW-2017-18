"use strict";

const express = require("express");
const session = require("express-session");

const mysqlSession = require("express-mysql-session");

const MySQLStore = mysqlSession(session);
 
const sessionStore = new MySQLStore({
    host: "localhost",
    user: "root",
    password: "",
    database: "sessions_test"
});


const app = express();

const middlewareSession = session({
    saveUninitialized: false,
    secret: "foobar34",
    resave: false,
    store: sessionStore
});

app.use(middlewareSession);


app.get("/increment.html", (request, response) => {
    if (request.session.contador === undefined) {
        response.redirect("/reset.html");
    } else {
        var contador = Number(request.session.contador) + 1;
        request.session.contador++;
        response.status(200);
        response.type("text/plain");
        response.end(`El valor actual del contador es ${contador}`);
    }
});

app.get("/reset.html", (request, response) => {
    response.status(200);
    request.session.contador = 0;
    response.type("text/plain");
    response.end("Has reiniciado el contador");
});

app.listen(3000, () => {
    console.log("Servidor arrancado en el puerto 3000");
});