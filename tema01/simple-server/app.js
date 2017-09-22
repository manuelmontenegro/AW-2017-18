var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer = require('multer');

var upload = multer({dest: 'public/uploads/'});

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*
 * Función que procesa las peticiones provenientes de pagina3.html y pagina4.html
 */
function procesar_peticion_formulario(params, res) {
  var tipo;
  if (params.tipobusqueda === "basica") {
    tipo = "basica"
  } else if (params.tipobusqueda === "avanzada") {
    tipo = "avanzada"
  } else {
    tipo = "de tipo desconocido"
  }
  res.send("Se ha seleccionado una búsqueda " + tipo + " introduciendo la cadena '" + params.termino + "'.");
}

/*
 * Petición GET obtenida a partir del formulario pagina3.html
 */
app.get("/busqueda.html", function(req, res) {
  procesar_peticion_formulario(req.query, res);
})

/*
 * Petición POST obtenida a partir del formulario pagina4.html
 */
app.post("/busqueda.html", function(req, res) {
  procesar_peticion_formulario(req.body, res);
})

/*
 * Petición POST obtenida a partir del formulario pagina5.html
 * (subida de formularios)
 */
app.post("/perfil.html", upload.single("imagen"), function(req, res) {
  var fichero = req.file
  if (req.file) {
    res.send("<p>Has enviado un fichero de " + fichero.size + " bytes</p>" +
             "<p>El tipo MIME es: " + fichero.mimetype + "</p>" +
            "<img src=\"uploads/" + fichero.filename + "\"/>");
  } else {
    res.send("¡No has enviado ningún fichero!");
  }
});

/*
 * Petición GET para la página que establece y maneja una cookie
 */
app.get("/pagina6.html", function(req, res) {
  var contador = parseInt(req.cookies.contador);
  if (!contador) {
    res.cookie('contador', 1);
    res.send("No te conozco. Debe ser la primera vez que vienes por aquí.");
  } else {
    contador = contador + 1;
    res.cookie('contador', contador);
    res.send("Yo a tí te conozco. Has venido más veces. De hecho, es la " + contador + "ª vez que vienes.");
  }
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
