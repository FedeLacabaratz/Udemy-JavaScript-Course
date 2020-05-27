// IFEE (Ejemplo de Module Design Pattern)
const comprarBoleto = (function() {

    // Privado
    let evento = 'Conferencia JS 2020';
    const adquirirBoleto = () => {
        const elemento = document.createElement('p');
        elemento.textContent = `Comprando boleto para: ${evento}`;
        document.querySelector('#app').appendChild(elemento)
    }
    // Publico
    return {
        mostrarBoleto : function() {
            adquirirBoleto()
        }
    }
})();

comprarBoleto.mostrarBoleto();