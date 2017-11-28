const express = require("express");
const path = require("path");
const session = require("express-session");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

/*
 * Middleware para la inclusión de recursos estáticos
 */
app.use(express.static(path.join(__dirname, "public")));

/*
 * Middleware para la carga de argumentos en peticiones POST
 */
app.use(bodyParser.urlencoded({ extended: false }));


/*
 * Middleware para la carga del atributo request.session 
 */
app.use(session({
    secret: "miclavesecreta",
    resave: false,
    saveUninitialized: false
}));

/*
 * Middleware que comprueba si existe un atributo 'listaCompra'
 * entre los atributos de la sesión. En caso de no existir, crea
 * un nuevo atributo vacío. 
 */
app.use((request, response, next) => {
    if (request.session.listaCompra === undefined) {
        request.session.listaCompra = [];
    }
    next();
});

/*
 * Middleware para gestionar los mensajes flash
 */
app.use((request, response, next) => {
    response.setFlash = (str) => {
        request.session.flashMessage = str;
    }
    response.locals.getFlash = () => {
        let mensaje = request.session.flashMessage;
        delete request.session.flashMessage;
        return mensaje;
    }
    next();
});

app.get("/", (request, response) => {
    response.render("listaCompra",
        { listaCompra: request.session.listaCompra }
    );
});

app.post("/newEntry", (request, response) => {
    let elem = request.body.elemento;
    if (elem === "") {
        response.setFlash("No se ha especificado elemento");
    } else if (request.session.listaCompra.length >= 5) {
        response.setFlash("Capacidad máxima superada");
    } else {
        request.session.listaCompra.push(elem);
        response.setFlash("Elemento añadido correctamente");
    }
    response.redirect("/");
});


app.listen(3000, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Servidor escuchando en puerto 3000");
    }
});