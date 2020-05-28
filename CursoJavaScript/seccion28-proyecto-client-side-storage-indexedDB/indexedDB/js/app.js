let DB;

// Selectores de la Interfaz
const form = document.querySelector('form'),
    nombreMascota = document.querySelector('#mascota'),
    nombreCliente = document.querySelector('#cliente'),
    telefono = document.querySelector('#telefono'),
    fecha = document.querySelector('#fecha'),
    hora = document.querySelector('#hora'),
    sintomas = document.querySelector('#sintomas'),
    citas = document.querySelector('#citas'),
    headingAdministra = document.querySelector('#administra');

// Esperar por el DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    // Crear la base de datos, toma dos parametros. El primero el nombre de la base de datos y el segundo el numero de version (usar numero entero o redondea automaticamente a entero post error)
    let crearDB = window.indexedDB.open('citas', 1);

    // Si hay un error enviarlo a la consola
    crearDB.onerror = function () {
        console.log('Hubo un error');
    }

    // Si todo esta bien entonces muestra en consola y asignar la base de datos
    crearDB.onsuccess = function () {
        // Asignar a la base de datos
        DB = crearDB.result;

        mostrarCitas();
    }

    // Este metodo solo corre una vez y es ideal para crear el schema de la base de datos
    crearDB.onupgradeneeded = function (e) {
        // El evento es la misma base de datos
        let db = e.target.result;

        // definir el objectstore, toma dos parametros. El nombre de la base de datos y el segundo las opciones
        // keyPath es el indice de la base de datos.
        let objectStore = db.createObjectStore('citas', { keyPath: 'key', autoIncrement: true })

        // Crear los indices y campos de la base de datos, createIndex : 3 parametros: nombre, keypath y opciones
        objectStore.createIndex('mascota', 'mascota', { unique: false });
        objectStore.createIndex('cliente', 'cliente', { unique: false });
        objectStore.createIndex('telefono', 'telefono', { unique: false });
        objectStore.createIndex('fecha', 'fecha', { unique: false });
        objectStore.createIndex('hora', 'hora', { unique: false });
        objectStore.createIndex('sintomas', 'sintomas', { unique: false });

    }
    // Cuando el formulario se envía
    form.addEventListener('submit', agregarDatos);

    function agregarDatos(e) {
        e.preventDefault();

        const nuevaCita = {
            mascota: nombreMascota.value,
            cliente: nombreCliente.value,
            telefono: telefono.value,
            fecha: fecha.value,
            hora: hora.value,
            sintomas: sintomas.value
        }
        // En indexDB se utilizan las transacciones, lleva dos parametros: el nombre de la base de datos y el modo (readonly o readwrite)
        let transaction = DB.transaction('citas', 'readwrite');
        let objectStore = transaction.objectStore('citas');

        let peticion = objectStore.add(nuevaCita);

        peticion.onsuccess = () => {
            form.reset();
        }

        transaction.oncomplete = () => {
            mostrarCitas();
        }

        transaction.onerror = () => {
            console.log('hubo un error');
        }

    }

    function mostrarCitas() {
        // Limpiar las citas anteriores
        while (citas.firstChild) {
            citas.removeChild(citas.firstChild);
        };

        // Creamos un objecStore
        let objectStore = DB.transaction('citas').objectStore('citas');

        // Esto retorna una peticion
        objectStore.openCursor().onsuccess = function (e) {
            // Cursor se va a ubicar en el registro indicado para acceder a los datos
            let cursor = e.target.result;

            if (cursor) {
                let citaHTML = document.createElement('li');
                citaHTML.setAttribute('data-cita-id', cursor.value.key);
                citaHTML.classList.add('list-group-item');

                citaHTML.innerHTML = `
                    <p class="font-weight-bold">Mascota: ${cursor.value.mascota}<span class="font-weight-normal"></span></p>
                    <p class="font-weight-bold">Cliente: ${cursor.value.cliente}<span class="font-weight-normal"></span></p>
                    <p class="font-weight-bold">Teléfono: ${cursor.value.telefono}<span class="font-weight-normal"></span></p>
                    <p class="font-weight-bold">Fecha: ${cursor.value.fecha}<span class="font-weight-normal"></span></p>
                    <p class="font-weight-bold">Hora: ${cursor.value.hora}<span class="font-weight-normal"></span></p>
                    <p class="font-weight-bold">Síntomas: ${cursor.value.sintomas}<span class="font-weight-normal"></span></p>
                `;
                // Boton de borrar
                const botonBorrar = document.createElement('button');
                botonBorrar.classList.add('borrar', 'btn', 'btn-danger');
                botonBorrar.innerHTML = '<span aria-hidden="true">x</span> Borrar';
                botonBorrar.onclick = borrarCita;
                citaHTML.appendChild(botonBorrar);

                // Append en el padre
                citas.appendChild(citaHTML);

                // Consultar los proximos registros
                cursor.continue();
            } else {
                if (!citas.firstChild) {
                    // Cuando no hay registros
                    headingAdministra.textContent = 'Agrega citas para comenzar';
                    let listado = document.createElement('p');
                    listado.classList.add('text-center');
                    listado.textContent = 'No hay registros';
                    citas.appendChild(listado);
                } else {
                    headingAdministra.textContent = 'Administra tus citas';
                }
            }
        }
    }

    function borrarCita(e) {
        let citaID = Number(e.target.parentElement.getAttribute('data-cita-id'));

        // En indexDB se utilizan las transacciones, lleva dos parametros: el nombre de la base de datos y el modo (readonly o readwrite)
        let transaction = DB.transaction('citas', 'readwrite');
        let objectStore = transaction.objectStore('citas');
        objectStore.delete(citaID);
        
        transaction.oncomplete = () => {
            e.target.parentElement.parentElement.removeChild(e.target.parentElement);

            if (!citas.firstChild) {
                // Cuando no hay registros
                headingAdministra.textContent = 'Agrega citas para comenzar';
                let listado = document.createElement('p');
                listado.classList.add('text-center');
                listado.textContent = 'No hay registros';
                citas.appendChild(listado);
            } else {
                headingAdministra.textContent = 'Administra tus citas';
            }
        }
    }

});