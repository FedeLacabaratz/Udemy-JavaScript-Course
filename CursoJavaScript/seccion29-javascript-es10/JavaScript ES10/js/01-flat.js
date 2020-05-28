const edades = [8,10,9, 11, [13,18, 20, [18,20,21]]];

// Aplana el primer nivel
console.log(edades.flat(1))

// Aplana el primer y segundo nivel
console.log(edades.flat(2))

// Aplana TODOS los niveles
console.log(edades.flat(Infinity))
