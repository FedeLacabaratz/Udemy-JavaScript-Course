async function leerTodos() {
    // esperar respuesta
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts')

    //Procede cuando la respuesta ha traido todo de la api
    const datos = await respuesta.json();

    return datos;
}

leerTodos()
    .then( usuarios => console.log(usuarios));