
const mysql = require("mysql");

class DAO {
    constructor(host, user, password, database) {
        this.pool = mysql.createPool({
            "host": host,
            "user": user,
            "password": password,
            "database": database
        });
    }

    insertarUsuario(usuario, callback) {
        this.pool.getConnection((err, conexion) => {
            if (err) { callback (err); return; }
            conexion.query(
                "INSERT INTO usuarios(nombre, correo, telefono) VALUES (?, ?, ?)",
                [usuario.nombre, usuario.correo, usuario.telefono],
                (err, insertResult) => {
                    if (err) { callback(err); return; }
                    usuario.id = insertResult.insertId;
                    conexion.release();
                    callback(null);
                }
            );    
        });
    }

    enviarMensaje(usuarioOrigen, usuarioDestino, mensaje, callback) {
        this.pool.getConnection((err, conexion) => {
            if (err) { callback (err); return; }
            conexion.query(
                "INSERT INTO mensajes(idOrigen, idDestino, mensaje, leido) " + 
                "VALUES (?, ?, ?, 0)",
                [usuarioOrigen.id, usuarioDestino.id, mensaje],
                (err, insertResult) => {
                    if (err) { callback(err); return; }
                    conexion.release();
                    callback(null);
                }
            );    
        });
    }

    bandejaEntrada(usuario, callback) {
        this.pool.getConnection((err, conexion) => {
            if (err) { callback (err); return; }
            conexion.query(
                "SELECT u.nombre AS nombre, m.mensaje AS mensaje, m.hora AS hora" +
                " FROM mensajes m JOIN usuarios u ON m.idOrigen = u.id" +
                " WHERE m.idDestino = ? AND m.leido = 0", 
                [usuario.id],
                (err, rows) => {
                    if (err) { callback(err); return; }
                    callback(
                        null,
                        rows.map(row => { return {
                            nombre: row.nombre,
                            mensaje: row.mensaje,
                            hora: row.hora
                        }; })
                    );
                }
            );    
        });        
    }

    buscarUsuario(str, callback) {
        this.pool.getConnection((err, conexion) => {
            if (err) { callback (err); return; }
            conexion.query(
                "SELECT id, nombre, correo, telefono" +
                " FROM usuarios" +
                " WHERE nombre LIKE ?", 
                ["%" + str + "%"],
                (err, rows) => {
                    if (err) { callback(err); return; }
                    callback(
                        null,
                        rows.map(row => { return {
                            id: row.id,
                            nombre: row.nombre,
                            correo: row.correo,
                            telefono: row.telefono
                        }; })
                    );
                }
            );    
        });                
    }

    close() {
        this.pool.end();
    }

}

module.exports = DAO;