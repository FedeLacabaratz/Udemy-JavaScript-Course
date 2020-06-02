// Importar express
const express = require('express');
const path = require('path');
const routes = require('./routes');

const configs = require('./config');

// db.authenticate()
//     .then(() => console.log('DB Connected'))
//     .catch(error => console.log(error));

// Configurar express
const app = express();

// Habilitar pug
app.set('view engine', 'pug');

// Añadir las vistas
app.set('views', path.join(__dirname, './views'));

// Cargar una carpeta estática llamada public
app.use(express.static('public'));

// Validar si estamos en desarrollo o en produccion
const config = configs[app.get('env')];

// Creamos la variable para el sitio web
app.locals.titulo = config.nombreSitio;

// Muestra el año actual
app.use((req, res, next) => {
    // Crear una nueva fecha
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear();
    return next();
})

// Cargar las rutas
app.use('/', routes());

app.listen(3000);
