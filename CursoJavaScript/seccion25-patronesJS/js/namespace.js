// Ejemplo de Name Space Design Pattern
const restaurApp = {};
restaurApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 25
    },
    {
        platillo: 'Hamburguesa',
        precio: 20
    },
    {
        platillo: 'Hotdog',
        precio: 15
    }
];

restaurApp.funciones = {
    ordenar: id => {
        console.log(`Tu platillo: ${restaurApp.platillos[id].platillo} se esta preparando`);
    },
    agregarPlatillo: (platillo, precio) => {
        const nuevo = {
            platillo,
            precio
        }
        restaurApp.platillos.push(nuevo);
    },
    mostrarMenu: platillos => {
        console.log(`Bienvenido a nuestro menú: `);
        platillos.forEach((platillo, index) => {
            console.log(`${index}: ${platillo.platillo} $${platillo.precio}`);
        });
    }
}



console.log(restaurApp);
//restaurApp.funciones.ordenar(2);
const { platillos } = restaurApp;
restaurApp.funciones.mostrarMenu(platillos);
restaurApp.funciones.ordenar(1);
restaurApp.funciones.agregarPlatillo('Pastel', 15);
restaurApp.funciones.mostrarMenu(platillos);
