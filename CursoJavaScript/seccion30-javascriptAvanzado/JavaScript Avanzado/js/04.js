// Window binding
function obtenerAuto(){
    console.log(`Mi auto es color ${this.color}`);
};

const color = 'Negro'; // Esto sera igual a 'undefined'
window.color = 'Negro'; // Esto sera igual a 'Negro'

obtenerAuto();