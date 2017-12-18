/* global __dirname */

"use strict";

var currencyRates = {
    "USD": 1.00000,
    "EUR": 0.94466,
    "GBP": 0.82314,
    "INR": 68.1762,
    "AUD": 1.35989,
    "CAD": 1.32303,
    "ZAR": 13.6627,
    "NZD": 1.42890,
    "JPY": 115.933
};


var express = require("express");
var path = require("path");

var app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/currency", function(request, response) {
    var from = request.query.from;
    var to = request.query.to;
    var quantity = request.query.quantity;
    if (currencyRates[from] === undefined || currencyRates[to] === undefined) {
        response.status(400);
        response.end("Cannot convert from " + from + " to " + to);
    } else {
        var result = quantity * (1/currencyRates[from]) * currencyRates[to];
        response.json({"currency": to, "result": result });
    }
});

app.get("/currencies", function(request, response) {
    response.json(Object.keys(currencyRates));
});


app.use(function(request, response, next) {
    response.status(404);
    response.end("Not found: " + request.url);
});

app.listen(3000, function() {
    console.log("Servidor escuchando en puerto 3000");
});