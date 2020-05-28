function sumar(a, b) {
    // sumar 2 numeros
    return a + b;
}
// Imprime una representacion de la funcion

console.log(sumar.toString());

// Ejemplo con objetos
function Automovil(modelo, color) {
    this.modelo = modelo;
    this.color = color;
};

Automovil.prototype.toString = function autoString() {
    const datos = `Auto: ${this.modelo} y color ${this.color}`;
    return datos;
}

const auto = new Automovil('Camaro', 'Negro');
console.log(auto.toString());