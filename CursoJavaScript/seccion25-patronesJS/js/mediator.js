// Ejemplo de Mediator Design Pattern (Intermediario que se comunica con muchos objetos)

const Vendedor = function(nombre) {
    this.nombre = nombre;
    this.sala = null;
}
const Comprador = function(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {
    oferta: function(articulo, precio) {
        console.log(`Tenemos el siguientre ${articulo}, iniciamos en ${precio}`)
    },
    vendido: function(comprador) {
        console.log(`Vendido a ${comprador} (Sonido de mazo)`)
    }
}

Comprador.prototype = {
    oferta: function(mensaje, comprador) {
        console.log(`${comprador.nombre} : ${mensaje}`)
    }
}

const Subasta = function() {
    let compradores = {};

    return {
        registrar: function(usuario) {
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
            console.log(compradores)
        }
    }
}

// Instanciar las clases
const federico = new Comprador('Federico');
const juan = new Comprador('Juan');
const karen = new Comprador('Karen');

const vendedor = new Vendedor('Vendedor');

const subasta = new Subasta();
subasta.registrar(federico)
subasta.registrar(juan)
subasta.registrar(karen)

vendedor.oferta('Mustang 1966', 3000);
federico.oferta(3500, federico);
juan.oferta(4000, juan);
karen.oferta(10000, karen);
vendedor.vendido(karen.nombre);