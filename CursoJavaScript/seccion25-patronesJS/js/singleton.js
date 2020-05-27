// Ejemplo de Singleton Design Pattern
const alumnos = {
    // Todos los alumnos
    listaAlumnos: [],

    // Obtener un alumno
    get: function(id) {
        return this.listaAlumnos[id];
    },

    // Crear un alumno
    crear: function(datos) {
        this.listaAlumnos.push(datos);
    },

    // Listar todos los alumnos
    listado: function() {
        return this.listaAlumnos;
    }
};

const infoAlumno = {
    nombre: 'Juan',
    edad: 20
}

const infoAlumno2 = {
    nombre: 'Federico',
    edad: 38
}

alumnos.crear(infoAlumno);
alumnos.crear(infoAlumno2);

const listado = alumnos.listado();
//console.log(listado)

const alumno = alumnos.get(1);
//console.log(alumno)
