const productos = [
    { nombre: 'Producto 1', precio: 20},
    { nombre: 'Producto 2', precio: 30},
    { nombre: 'Producto 3', precio: 40}
];

/*
// El equivalente antigüo a como se hacia antes
const resultado = productos.map(producto => {
    return [producto.nombre, producto.precio]
});

console.log(resultado.flat(1));
*/

// Ahora con el flatMap
const resultado = productos.flatMap(producto => {
    return [producto.nombre, producto.precio]
});

console.log(resultado);