const correo = '    correo@correo.com    ';

// Imprimo para ver los espacios en blanco al inicio y al final
console.log(correo);

// Elimina espacios en blanco al inicio
console.log(correo.trimStart());

// Elimina espacios en blanco al final
console.log(correo.trimEnd());

// Elimina espacios en blanco al inicio y al final (se puede hacer chain). Esto es equivalente al trim()
console.log(correo.trimStart().trimEnd());
console.log(correo.trim());
