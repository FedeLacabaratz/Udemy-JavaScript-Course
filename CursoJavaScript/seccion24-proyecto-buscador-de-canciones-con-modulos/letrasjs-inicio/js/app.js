import * as UI from './interfaz.js';
import { API } from './api.js';

UI.formularioBuscar.addEventListener('submit', (e) => {
    e.preventDefault();

    // Obtener datos del formulario
    const artista = document.querySelector('#artista').value,
        cancion = document.querySelector('#cancion').value;

    if (artista === '' || cancion === '') {
        // Si el usuario deja los campos vacíos, mostrar error
        UI.divMensajes.innerHTML = 'Error... Todos los campos son obligatorios'
        UI.divMensajes.classList.add('error');
        setTimeout(() => {
            UI.divMensajes.innerHTML = ''
            UI.divMensajes.classList.remove('error');
        }, 1500);
    } else {
        // El formulario esta completo, realizar consulta
        const api = new API(artista, cancion);
        api.consultarAPI()
            .then(data => {
                // Si existen letras se imprimen
                if (data.respuesta.lyrics) {
                    const lyrics = data.respuesta.lyrics
                    UI.divResultado.textContent = lyrics;
                } else {
                    // Si no existen letras, se da mensaje de error
                    // Si el usuario deja los campos vacíos, mostrar error
                    UI.divMensajes.innerHTML = 'No existen resultados para esta búsqueda'
                    UI.divMensajes.classList.add('error');
                    setTimeout(() => {
                        UI.divMensajes.innerHTML = ''
                        UI.divMensajes.classList.remove('error');
                        UI.formularioBuscar.reset();
                    }, 1500);

                }
            })
    }
})