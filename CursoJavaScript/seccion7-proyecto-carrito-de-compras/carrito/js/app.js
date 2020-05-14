// Variables
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBTN = document.getElementById('vaciar-carrito');

// Listeners
cargarEventListeners();

function cargarEventListeners() {
    // Dispara un evento cuando se preciona "Agregar al carrito"
    cursos.addEventListener('click', comprarCurso);

    // Cuando se elimina un curso del carrito
    carrito.addEventListener('click', eliminarCurso);

    // Cuando se quiere vaciar el carrito
    vaciarCarritoBTN.addEventListener('click', vaciarCarrito);

    // Al cargar el documento, mostrar el local storage
    document.addEventListener('DOMContentLoaded', leerLocalStorage);
};

// Functions

// Function que añade el curso al carrito
function comprarCurso(e) {
    e.preventDefault();
    // Delegation para agregar-carrito
    if (e.target.classList.contains('agregar-carrito')) {
        const curso = e.target.parentElement.parentElement;
        // Enviamos el curso seleccionado para tomar sus datos
        leerDatosCurso(curso);
    }
};

// Lee los datos del curso
function leerDatosCurso(curso) {
    // Creo un objeto al que le asigno los valores del curso que selecciono para agregar al carrito
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').innerText,
        precio: curso.querySelector('.precio span').innerText,
        id: curso.querySelector('a').getAttribute('data-id')
    };
    // Envío el curso seleccionado al carrito
    insertarCarrito(infoCurso);
};

// Muestra el curso seleccionado en el carrito
function insertarCarrito(curso) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${curso.imagen}" width=100>
        </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
        </td>
    `;
    listaCursos.appendChild(row);
    guardarCursoLocalStorage(curso);
};

// Elimina el curso del carrito en el DOM
function eliminarCurso(e) {
    e.preventDefault();
    //Verifico que el elemento contenga la clase 'borrar-curso' antes de proceder
    let curso,
        cursoId;
    if (e.target.classList.contains('borrar-curso')) {
        e.target.parentElement.parentElement.remove();
        curso = e.target.parentElement.parentElement;
        cursoId = curso.querySelector('a').getAttribute('data-id');
    }
    // Elimina el curso en el local storage
    eliminaCursoLocalStorage(cursoId);
};

// Elimina los cursos del carrito en el DOM
function vaciarCarrito() {
    // Forma lenta
    //listaCursos.innerHTML = '';
    // Forma rápida y recomendada
    while (listaCursos.firstChild) {
        listaCursos.removeChild(listaCursos.firstChild);
    }
    //Vaciar el carrito en local storage
    vaciarLocalStorage();
    return false;
};

// Guarda el curso agregado al carrito al local storage
function guardarCursoLocalStorage(curso) {
    let cursos;
    // Toma el valor de un array de local storage o vacio
    cursos = obtenerCursosLocalStorage();
    // El curso seleccionado se agrega al array
    cursos.push(curso);
    // Lo agreagamos al local storage
    localStorage.setItem('cursos', JSON.stringify(cursos));
};

// Comprobamos que haya elementos en el local storage
function obtenerCursosLocalStorage() {
    let cursosLS;

    // Comprobacion: Si no ha nada, devuelve array vacio, caso contrario lo devuelve dentro de un array
    if (localStorage.getItem('cursos') === null) {
        cursosLS = [];
    } else {
        cursosLS = JSON.parse(localStorage.getItem('cursos'));
    }
    return cursosLS;
};

// Imprime los cursos de local storage en el carrito
function leerLocalStorage() {
    let cursosLS;
    // Obtengo los cursos existentes
    cursosLS = obtenerCursosLocalStorage();
    // Construyo templates para visualizarlos tal cual antes de refrescar página
    cursosLS.forEach(function (curso) {
        // Construir el template
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src="${curso.imagen}" width=100>
        </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
        </td>
        `;
        // Añado las row a la lista de cursos
        listaCursos.appendChild(row);
    });
};

// Function para eliminar el curso en el local storage
function eliminaCursoLocalStorage(curso) {
    let cursosLS;
    // Obtengo la lista de cursos de local storage
    cursosLS = obtenerCursosLocalStorage();
    // Itero uno a uno y borro el que coincide con el id del curso)
    cursosLS.forEach(function(cursoLS, index) {
        if(cursoLS.id === curso) {
            cursosLS.splice(index, 1)
        }
    });
    // Asigno el nuevo array de cursos a local storage
    localStorage.setItem('cursos', JSON.stringify(cursosLS));
};

// Function para eliminar todos los cursos mediante el boton "vaciar carrito"
function vaciarLocalStorage() {
    // Borro todo lo que este en local storage
    localStorage.clear()
};