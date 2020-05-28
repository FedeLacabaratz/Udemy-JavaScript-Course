const map = new Map([ 
    ['nombre', 'Producto 1'], 
    ['precio', 20] 
]);

/*
// La forma antigüa de borrar una key/value en un map
map.delete('precio');
console.log(map);
*/

// Permite crear un objeto de una serie de llaves y valores
const objeto = Object.fromEntries(map);
console.log(objeto);

// Si se quiere borrar una key/value
delete objeto.precio;
console.log(objeto);
