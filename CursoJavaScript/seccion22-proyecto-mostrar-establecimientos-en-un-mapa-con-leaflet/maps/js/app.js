const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.mostrarEstablecimientos();
})

// Habilitar búsqueda de establecimientos
const buscador = document.querySelector('#buscar input');

buscador.addEventListener('input', () => {
    // Si es mayor a 3 caracteres, busca sugerencias
    if(buscador.value.length > 3) {
        // buscar en API
        ui.obtenerSugerencias(buscador.value);
    } 
    
    if(buscador.value.length === 0){
        // Mostrar los pines
        ui.mostrarEstablecimientos();
    }
})