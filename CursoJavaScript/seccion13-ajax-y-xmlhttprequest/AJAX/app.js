document.getElementById('cargar').addEventListener('click', cargarDatos);

function cargarDatos() {
    // Crear el objeto XMLHTTPRequest
    const xhr = new XMLHttpRequest();

    // Abrir una conexión
    xhr.open('GET', 'datos.txt', true);

    // Una vez que carga
    xhr.onload = function() {
        // Verifico los estados... 200: Ok | 403: Forbbiden | 404: Not Found
        if(this.status === 200) {
            document.getElementById('listado').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

    // Enviar la request
    xhr.send();
};