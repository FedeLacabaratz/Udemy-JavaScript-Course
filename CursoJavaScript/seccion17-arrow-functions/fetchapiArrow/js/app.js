document.getElementById('txtBtn').addEventListener('click', cargarTXT);
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);
document.getElementById('apiBTN').addEventListener('click', cargarREST);



function cargarTXT() {
    fetch('datos.txt')
        .then(res => res.text())
        .then(empleados => document.getElementById('resultado').innerHTML = empleados)
        .catch(error => console.log(error))
};

function cargarJSON() {
    fetch('empleados.json')
        .then(res => res.json())
        .then(empleados => {
            let html = '';
            empleados.forEach(empleado => {
                html += `
                    <li>Nombre: ${empleado.nombre}, Puesto: ${empleado.puesto}</li>
                `;
            })
            document.getElementById('resultado').innerHTML = html;
        })
        .catch(error => console.log(error))
};

function cargarREST() {
    fetch('https://picsum.photos/list')
        .then(res => res.json())
        .then(photos => {
            let html = '';
            photos.forEach(photo => {
                html += `
                    <li>
                        <a target="_blank" href="${photo.post_url}">Ver Imagen</a>
                        Author: ${photo.author}
                    </li>
                `;
            })
            document.getElementById('resultado').innerHTML = html;
        })
        .catch(error => console.log(error))
};