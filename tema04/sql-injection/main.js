"use strict";

const readline = require("readline");
const mysql = require("mysql");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "Contactos"
});

rl.question("Introduce un identificador: ", (id) => {
    pool.getConnection((err, connection) => {
        if (err) { console.error(err);  }
        else {
            connection.query(
                "SELECT Nombre, Apellidos FROM contactos WHERE Id = " + id,
                (err, rows) => {
                    console.log(rows);
                    connection.release();
                    pool.end();
                }
            );
        }
    });
    rl.close();
});

