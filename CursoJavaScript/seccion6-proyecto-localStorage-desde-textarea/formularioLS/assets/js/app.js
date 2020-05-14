// Variables

const listaTweets = document.getElementById('lista-tweets');


// Event Listeners

eventListeners();

function eventListeners () {
    // Cuando se envía el formulario
    document.querySelector('#formulario').addEventListener('submit', agregarTweet)

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

    

}