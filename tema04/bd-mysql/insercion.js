/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
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
    if (err) return;
    var sql = "INSERT INTO Contactos(Nombre, Apellidos) "
            + "VALUES ('Diana', 'Díaz')"
    conexion.query(sql, (err, resultado) => {
        if (err) {
            console.log(`Error de inserción: ${err}`);
        } else {
            // Imprime el identificador de la nueva fila
            console.log(resultado.insertId);
            
            // Imprime el número de filas insertadas
            console.log(resultado.affectedRows);
        }
        conexion.release();
        pool.end();
    });
});
