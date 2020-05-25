class UI {
    constructor() {

        // Instanciar la API
        this.api = new API();

        // Crear los markers con LayerGroup(de Leaflet)
        this.markers = new L.LayerGroup();

        // Iniciar el mapa
        this.mapa = this.inicializarMapa();

    }

    inicializarMapa() {
        // Inicializar y obtener la propiedad del mapa
        const map = L.map('mapa').setView([40.006820, -3.703578], 5.5);
        const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
        L.tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; ' + enlaceMapa + ' Contributors',
            maxZoom: 18,
        }).addTo(map);
        return map;

    }

    mostrarEstablecimientos() {
        this.api.obtenerDatos()
            .then(newTotal => {
                const resultado = newTotal;
                
                // ejecutar la funcion para mostrar los pines
                this.mostrarPines(resultado);
            })
    }

    // Muestra los pines
    mostrarPines(datos) {
        // Limpiar los markers
        this.markers.clearLayers();

        // Recorrer los establecimientos
        datos.forEach(dato => {
            //destructuring
            const { attributes: { latitud, longitud, rótulo, dirección, municipio, localidad, provincia, horario, precio_gasolina_95, precio_gasóleo_a } } = dato;

            // Crear pop-up
            const opcionesPopup = L.popup()
                .setContent(`<p>Nombre de la Estacion: ${rótulo}</p>
                         <p>Dirección: ${dirección}</p>
                         <p>Municipio: ${municipio}</p>
                         <p>Localidad: ${localidad}</p>
                         <p>Provincia: ${provincia}</p>
                         <p>Horario: ${horario}</p>
                         <p><b>Precio Gasolina 95: € ${precio_gasolina_95}</b></p>
                         <p><b>Precio Gasóleo A: € ${precio_gasóleo_a}</b></p>
            `);

            // Agregar el pin
            const marker = new L.marker([
                parseFloat(latitud),
                parseFloat(longitud)
            ]).bindPopup(opcionesPopup)

            this.markers.addLayer(marker);
        });
        this.markers.addTo(this.mapa)
    }

    // Obtiene las sugerencias de la REST API
    obtenerSugerencias(busqueda) {
        this.api.obtenerDatos()
            .then(newTotal => {
                // Obtener los resultados
                const resultados = newTotal;
                
                // Enviar el JSON y la busqueda para el filtrado
                this.filtrarSugerencias(resultados, busqueda);
            })
    }

    // Filtra las sugerencias en base al input
    filtrarSugerencias(resultados, busqueda) {
        // Filtrar con filter
        const filtro = resultados.filter(filtro => filtro.attributes.provincia.indexOf(busqueda.toUpperCase()) !== -1);
        console.log(filtro)

        // mostrar los pines
        this.mostrarPines(filtro);
    }
}