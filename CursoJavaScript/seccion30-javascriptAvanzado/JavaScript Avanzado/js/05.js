// JavaScript Event Loop
// El event loop le da prioridad al Stack siempre primero y luego comienza a darle prioridad al 'queue'

// console.log entra directo en el stack y por lo tanto se ejecuta primero por orden de entrada
console.log('Yo me mostrare primero');

// Las funciones como setTimeout no entran en el stack y van al 'queue' por eso primero se ejecuta lo que esta en el stack
setTimeout(function () {
    console.log('Yo me mostrare segundo');
}, 0);

console.log('Yo me mostrare tercero');

// Las funciones como setTimeout no entran en el stack y van al 'queue' por eso primero se ejecuta lo que esta en el stack
setTimeout(function () {
    console.log('Yo cuarto');
}, 0);

// Los promises entran en la 'Job Queue' lo que les da mas prioridad que los setTimeout que entran en el 'queue' normal
new Promise(function(res) {
    res('Yo soy un promise')
}).then(console.log)

console.log('Yo quinto');
