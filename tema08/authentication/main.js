"use strict";
/* global __dirname */

const express = require("express");
const passport = require("passport");
const path  = require("path");
const passportHTTP = require('passport-http');

let app = express();

app.use(passport.initialize());

app.use(express.static(path.join(__dirname, "public")));

passport.use(new passportHTTP.BasicStrategy(
        { realm: 'Autenticacion' },
        (user, pass, callback) => {
            if (user === "manuel" && pass === "123456") {
                callback(null, { userId: "Manuel" });
            } else {
                callback(null, false);
            }
        }
));

app.get("/protegido", 
    passport.authenticate('basic', {session: false}),
    (request, response) => {
        response.json({permitido: true});
    });


app.listen(3000, (err) => {
    console.log("Servidor arrancado en el puerto 3000");
});