class API {

    async obtenerDatos() {

        // Obtener datos desde la API
        const datos = await fetch(`https://www.mapabase.es/arcgis/rest/services/Otros/Gasolineras/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=json`);

        // Retornar datos como JSON
        const respuestaJSON = await datos.json();

        const respuesta = {
            respuestaJSON
        }

        const total = await respuesta.respuestaJSON.features;
        for (let i = total.length - 1; i > 0; i--) {
            let indexAleatorio = Math.floor(Math.random() * (i + 1));
            let temporal = total[i];
            total[i] = total[indexAleatorio];
            total[indexAleatorio] = temporal;
        }
        const newTotal = await total.slice(0, 99);

        return newTotal
    }
}
