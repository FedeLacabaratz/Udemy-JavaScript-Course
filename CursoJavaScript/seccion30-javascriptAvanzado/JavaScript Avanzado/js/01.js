// This con implicit binding

const usuario = {
    nombre: 'Federico',
    edad: 38,
    presentacion() {
        console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    },
    mascota: {
        nombre: 'Hook',
        edad: 1,
        presentacion() {
            console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años`);
        }
    }

};

usuario.presentacion();
usuario.mascota.presentacion();