document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

// Llamado a AJAX e imprimir resultados
function cargarNombres(e) {
    e.preventDefault();

    // Leer las variables
    const origen = document.getElementById('origen');
    const origenSeleccioado = origen.options[origen.selectedIndex].value;
    
    const genero = document.getElementById('genero');
    const generoSeleccioado = genero.options[genero.selectedIndex].value;
    
    const cantidad = document.getElementById('numero').value;
    
    let url = '';
    url += 'https://randomuser.me/api/?';
    // Si hay origen le agrego la URL
    if(origenSeleccioado !== '') {
        url += `nat=${origenSeleccioado}&`;
    }
    // Si hay un genero le agrego la URL
    if(generoSeleccioado !== '') {
        url += `gender=${generoSeleccioado}&`;
    }
    // Si hay una cantidad le agrego la URL
    if(cantidad !== '') {
        url += `results=${cantidad}`;
    }
    // Conectar con AjAX
    // Iniciar XMLHHTPRequest
    const xhr = new XMLHttpRequest();
    // Abrimos la conexión
    xhr.open('GET', url, true);
    // Datos e impresion del template
    xhr.onload = function () {
        if(this.status === 200) {
            let nombres = JSON.parse(this.responseText);
            nombres = nombres.results
            // Generar HTML
            let htmlNombres = '<h2>Nombres Generados</h2>';

            htmlNombres += '<ul class="lista">';

            // Imprimir cada nombre
            nombres.forEach(function(nombre) {
                htmlNombres += `
                            <li>${nombre.name.first}</li>
                `;
            })

            htmlNombres += '</ul>';

            document.getElementById('resultado').innerHTML = htmlNombres;
        }
    };
    // Enviando la request
    xhr.send();
};