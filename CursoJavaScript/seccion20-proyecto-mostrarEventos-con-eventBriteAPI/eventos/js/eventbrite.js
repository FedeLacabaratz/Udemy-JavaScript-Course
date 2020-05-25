class EventBrite {
    constructor() {
        this.token_auth = 'XXXXXXXXXXXXX'; // Necesitaras obtener tu propia api key para poder utilizarlo aqui.
        this.ordenar = 'date';
    }

    // Obtener los eventos de la REST API
    async obtenerEventos(evento, categoria) {
        const respuestaEvento = await fetch(`https://www.eventbriteapi.com/v3/events/search/?=q${evento}&sort_by=${this.ordenar}&categories=${categoria}&token=${this.token_auth}`);

        // Esperar la respuesta del evento y devolverlo como JSON
        const eventos = await respuestaEvento.json();
        return {
            eventos
        }
    }

    // Obtiene las categorias en init()
    async obtenerCategorias() {
        // Consultar las categorias a la REST API de event brite
        let url = `https://www.eventbriteapi.com/v3/categories/?token=`;

        const respuestaCategorias = await fetch(`${url}${this.token_auth}`)

        // Esperar la respuesta de las categorias y devolver una respuesta
        const categorias = await respuestaCategorias.json();

        // devolvemos el resultado
        return {
            categorias
        }
    }
}