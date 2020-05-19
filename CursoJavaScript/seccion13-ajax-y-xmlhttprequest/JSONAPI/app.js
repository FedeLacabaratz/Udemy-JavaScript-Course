const cargarPost = document.querySelector('#cargar').addEventListener('click', cargarAPI);


function cargarAPI() {
    // Crea el objeto
    const xhr = new XMLHttpRequest();

    // Abre la conexión
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    // Carga y lee datos
    xhr.onload = function () {
        if (this.status === 200) {
            const respuesta = JSON.parse(this.responseText);

            let contenido = '';
            respuesta.forEach(function (post) {
                contenido += `
                    <h4> Title: ${post.title}</h4>
                    <p> Body: ${post.body}</p>
                `;
            });
            document.getElementById('listado').innerHTML = contenido;
        }
    }
    // Envia la petición
    xhr.send();
};