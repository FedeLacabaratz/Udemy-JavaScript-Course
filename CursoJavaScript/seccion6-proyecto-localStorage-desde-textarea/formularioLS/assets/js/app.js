// Variables

const listaTweets = document.getElementById('lista-tweets');


// Event Listeners

eventListeners();

function eventListeners () {
    // Cuando se envía el formulario
    document.querySelector('#formulario').addEventListener('submit', agregarTweet)

    // Cuando se borra un tweet
    listaTweets.addEventListener('click', borrarTweet);

};

// Functions

// Añadir tweet del formulario
function agregarTweet(e) {
    e.preventDefault();

    // Leer el valor del textArea
    const tweet = document.getElementById('tweet').value;

    // Crear boton de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';
    
    // Crear elemento
    const li = document.createElement('li');
    li.innerText = tweet;
    // Añade el boton de borrar al tweet
    li.appendChild(botonBorrar);
    // Añade el tweet a la lista
    listaTweets.appendChild(li);
};

function borrarTweet(e) {
    e.preventDefault();

    if(e.target.className === 'borrar-tweet') {
        e.target.parentElement.remove();
    }
};