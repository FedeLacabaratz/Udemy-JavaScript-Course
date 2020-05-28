// Antes esta era la forma del try/catch y me detectaba el error que imprimia por default segun lo que sucedia en el try
try {
    throw new Error('Algo salio mal');
} catch (error){
    console.log(error); // Esto generalmente me imprimia el new Error creado en try
}

// Sirve para crear mis errores personalizados en vez de tomar el default
try {
    throw new Error('Algo salio mal');
} catch {
    console.log('Hubo un error bastante grave...'); // Esto me imprimirá el nuevo error creado en catch (personalizado)
}