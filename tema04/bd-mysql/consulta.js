/*
 * Ejemplo de conexión a una BD.
 */

"use strict";

const mysql = require("mysql");

const pool = mysql.createPool({
    host:  "localhost",
    user:  "root",
    password: "",
    database: "Contactos"
});

pool.getConnection((err, conexion) => {
    if (err) {
        console.error(err);
    } else {
        conexion.query("SELECT Nombre, Apellidos, COUNT(t.Numero) AS numTelefonos " + 
                       "FROM contactos c LEFT JOIN tiene_telefono t ON c.Id = t.Id " +
                       "GROUP BY c.Id",
        (err, rows) => {
            if (err) {
                console.error(err);
            } else {
                rows.forEach((row) => {
                    console.log(`${row.Nombre} ${row.Apellidos} tiene ${row.numTelefonos} números de teléfono`);
                });
            }
            conexion.release();
            pool.end();
        });
    }
});


