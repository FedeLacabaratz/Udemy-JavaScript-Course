document.getElementById('txtBtn').addEventListener('click', cargarTXT);
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);
document.getElementById('apiBTN').addEventListener('click', cargarREST);



function cargarTXT() {
    fetch('datos.txt')
        .then(function(res) {
            return res.text();
        })
        .then(function(empleados) {
            console.log(empleados);
            document.getElementById('resultado').innerHTML = empleados
        })
        .catch(function(error) {
            console.log(error);
        })
};

function cargarJSON() {
    fetch('empleados.json')
        .then(function(res) {
            return res.json();
        })
        .then(function(empleados) {
            let html= '';
            empleados.forEach(function(empleado) {
                html += `
                    <li>Nombre: ${empleado.nombre}, Puesto: ${empleado.puesto}</li>
                `;
            })
            document.getElementById('resultado').innerHTML = html;
        })
        .catch(function(error) {
            console.log(error);
        })
};

function cargarREST() {
    fetch('https://picsum.photos/list')
        .then(function(res) {
            return res.json();
        })
        .then(function(photos) {
            let html= '';
            photos.forEach(function(photo) {
                html += `
                    <li>
                        <a target="_blank" href="${photo.post_url}">Ver Imagen</a>
                        Author: ${photo.author}
                    </li>
                `;
            })
            document.getElementById('resultado').innerHTML = html;
        })
        .catch(function(error) {
            console.log(error);
        })
}