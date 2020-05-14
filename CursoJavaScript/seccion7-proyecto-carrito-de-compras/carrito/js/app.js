// Variables
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody')

// Listeners
cargarEventListeners();

function cargarEventListeners() {
    // Dispara un evento cuando se preciona "Agregar al carrito"
    cursos.addEventListener('click', comprarCurso);

};

// Functions

// Function que añade el curso al carrito
function comprarCurso(e) {
    e.preventDefault();
    // Delegation para agregar-carrito
    if(e.target.classList.contains('agregar-carrito')) {
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
}