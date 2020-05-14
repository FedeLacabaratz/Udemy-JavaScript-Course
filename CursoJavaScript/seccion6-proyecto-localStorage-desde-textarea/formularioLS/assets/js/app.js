// Variables
const listaTweets = document.getElementById('lista-tweets');


// Event Listeners
eventListeners();

function eventListeners() {
    // Cuando se envía el formulario
    document.querySelector('#formulario').addEventListener('submit', agregarTweet)

    // Cuando se borra un tweet
    listaTweets.addEventListener('click', borrarTweet);

    // Contenido cargado
    document.addEventListener('DOMContentLoaded', localStorageListo);
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

    // Agrega tweet al local storage
    agregarTweetLocalStorage(tweet);
};

// Elimina el tweet del DOM
function borrarTweet(e) {
    e.preventDefault();

    // Comprueba la className para el elemento "X" que borrara nuestro tweet
    if (e.target.className === 'borrar-tweet') {
        // Remueve el elemento del DOM
        e.target.parentElement.remove();
        //Remueve el elemento del local storage
        borrarTweetLocalStorage(e.target.parentElement.innerText)
    }
};

// Mostrar datos de local storage en lista
function localStorageListo() {
    let tweets;

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function (tweet) {
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
    });
};

// Agrega el tweet al local storage
function agregarTweetLocalStorage(tweet) {
    let tweets;
    // Añadir el nuevo tweet
    tweets = obtenerTweetsLocalStorage();
    tweets.push(tweet);

    // Convertir de string a arreglo para local storage
    localStorage.setItem('tweets', JSON.stringify(tweets));
};

// Comprobar que haya elementos en local storage, retorna un array
function obtenerTweetsLocalStorage() {
    let tweets;

    // Revisamos los valores del local storage
    if (localStorage.getItem('tweets') === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
};

// Elminar tweet del local storage
function borrarTweetLocalStorage(tweet) {
    let tweets,
        tweetBorrar;
    // Elimina la X del tweet
    tweetBorrar = tweet.substring(0, tweet.length - 1);

    // Obtengo la lista de tweets del local storage
    tweets = obtenerTweetsLocalStorage();

    // Itero uno a uno y borro el que coincide con el string tweetBorrar (mi tweet a borrar)
    tweets.forEach(function (tweet, index) {
        if (tweetBorrar === tweet) {
            tweets.splice(index, 1);
        }
    });

    // Seteo la nueva lista de tweets con sin los tweets borrados si los hubiera quitado
    localStorage.setItem('tweets', JSON.stringify(tweets));
};
