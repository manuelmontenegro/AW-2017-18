"use strict";
/* global __dirname */

var express = require("express");
var passport = require("passport");
var path  = require("path");
var passportHTTP = require('passport-http');

var app = express();

app.use(passport.initialize());

app.use(express.static(path.join(__dirname, "public")));

passport.use(new passportHTTP.BasicStrategy(
        { realm: 'Autenticacion' },
        function(user, pass, callback) {
            if (user === "manuel" && pass === "123456") {
                callback(null, { userId: "Manuel" });
            } else {
                callback(null, false);
            }
        }
));

app.get("/protegido", 
    passport.authenticate('basic', {session: false}),
    function(request, response) {
        response.json({permitido: true});
    });


app.listen(3000, function(err) {
    console.log("Servidor arrancado en el puerto 3000");
});