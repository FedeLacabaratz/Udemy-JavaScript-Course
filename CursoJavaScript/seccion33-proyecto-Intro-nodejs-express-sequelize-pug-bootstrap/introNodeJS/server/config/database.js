const Sequelize = require('sequelize');

// Creo la base de datos y la traigo desde MAMP. Parametros: 1ro: nombre de la DB, 2do: Username (si no hay pongo 'root'), 3ro: Password(si no hay pongo 'root'), 4to: opciones de configuración
module.exports = new Sequelize('agenciadeviajes', 'root', 'root', {
    host: '127.0.0.1',
    port: '8889',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: '0'
});