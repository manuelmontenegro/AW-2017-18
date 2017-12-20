/* global __dirname */

"use strict";

const currencyRates = {
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


const express = require("express");
const path = require("path");

let app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/currency", (request, response) => {
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

app.get("/currencies", (request, response) => {
    response.json(Object.keys(currencyRates));
});


app.use((request, response, next) => {
    response.status(404);
    response.end("Not found: " + request.url);
});

app.listen(3000, () => {
    console.log("Servidor escuchando en puerto 3000");
});