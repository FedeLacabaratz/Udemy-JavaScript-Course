// this con explicit binding

function persona(elemento1, elemento2) {
    console.log(`Hola, soy ${this.nombre} y me gusta el ${elemento1} y el ${elemento2}`)
}

const informacion = {
    nombre: 'Federico',
    trabajo: 'Programador'
};

const generosMusicales = [ 'Heavy Metal', 'Rock']

// El call es un metodo que explicita en que contexto se aplica el binding
// Si se pasa un array hay que pasarle el array y la posición por cada elemento
persona.call(informacion, generosMusicales[0], generosMusicales[1]);

// Explicit binding con apply (si toma el array completo)
persona.apply(informacion, generosMusicales);

// Explicit binding .bind (es igual a call, la unica diferencia es que crea una función, la que hay que mandar a llamar)
const nuevaFn = persona.bind(informacion, generosMusicales[0], generosMusicales[1]);
nuevaFn();