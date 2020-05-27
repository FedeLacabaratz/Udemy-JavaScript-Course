// Ejemplo de Observer Design Pattern (AKA Suscriptor publicador)

let observer = {
    obtenerOfertas: function (callback) {
        if (typeof callback === "function") {
            this.subscribers[this.subscribers.length] = callback;
        }
    },
    cancelarOfertas: function (callback) {
        for (let i = 0; i < this.subscribers.length; i++) {
            if (this.subscribers[i] === callback) {
                delete this.subscribers[i];
            }
        }
    },
    publicarOferta: function (oferta) {
        for (let i = 0; i < this.subscribers.length; i++) {
            if (typeof this.subscribers[i] == "function") {
                this.subscribers[i](oferta);
            }
        }
    },
    crear: function (objeto) {
        for (let i in this) {
            if (this.hasOwnProperty(i)) {
                objeto[i] = this[i];
                objeto.subscribers = [];
            }
        }
    }
}

// Vendedores
const udemy = {
    nuevoCurso: function () {
        const curso = 'Un nuevo curso de JavaScript';
        this.publicarOferta(curso);
    }
}

const facebook = {
    nuevoAnuncio: function () {
        const oferta = 'Compra un teléfono móvil';
        this.publicarOferta(oferta);
    }
}

// Crear los publicadores
observer.crear(udemy);
observer.crear(facebook);

// Crear los suscriptores
const federico = {
    compartir: function (oferta) {
        console.log(`Federico dice: Excelente oferta! ${oferta}`);
    }
}

const karen = {
    interesa: function (oferta) {
        console.log(`Karen dice: Me interesa la oferta de ${oferta}`);
    }
}

udemy.obtenerOfertas(federico.compartir);
udemy.obtenerOfertas(karen.interesa);
udemy.nuevoCurso();
udemy.cancelarOfertas(karen.interesa);
udemy.nuevoCurso();

facebook.obtenerOfertas(karen.interesa);
facebook.obtenerOfertas(federico.compartir);
facebook.nuevoAnuncio();
