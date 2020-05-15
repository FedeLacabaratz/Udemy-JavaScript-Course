// Variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn');


// Event Listeners
eventListeners();

function eventListeners() {
    // Inicio de la aplicacion y desabilitar el boton submit
    document.addEventListener('DOMContentLoaded', inicioApp);

    // Campos del formulario
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    // Enviar email con submit en formulario
    formularioEnviar.addEventListener('submit', enviarEmail);

    // Boton de reset
    resetBtn.addEventListener('click', resetFormulario);
};


// Functions
function inicioApp() {
    // Desabilitar el envio
    btnEnviar.disabled = true;
};

// Valida que el campo tenga algo escrito
function validarCampo() {
    
    // Se valida la longitud del texto y que no este vacio
    validarLongitud(this);
    
    // Validar unicamente el email
    if(this.type === 'email') {
        validarEmail(this);
    }
    
    let errores = document.querySelectorAll('.error') 
    // Condicion para no poder habilitar el boton enviar con campos en vacio
    if(email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
        // Condicion para solo poder enviar en caso de que no existan errores
        if(errores.length === 0) {
            btnEnviar.disabled = false;
        }
    }
};

// Resetear el formulario
function resetFormulario(e) {
    e.preventDefault();
   formularioEnviar.reset();
};

function enviarEmail(e) {
    e.preventDefault();
    
    // Spinner al presionar 'Enviar'
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';

    // Gif que muestra cuando el mail fue enviado
    const enviado = document.createElement('img')
    enviado.src = 'img/mail.gif'
    enviado.style.display = 'block';

    // Ocular spinner y mostrar gif de enviado
    setTimeout(function() {
        spinnerGif.style.display = 'none';
        document.querySelector('#loaders').appendChild(enviado);
        setTimeout(function() {
            enviado.remove();
            formularioEnviar.reset();
        }, 5000);
    }, 3000);
};

// Verifica la longitud del texto en los campos
function validarLongitud(campo) {
    // Verifico que la longitud del texto sea mayor a cero, si asi es, cambio el color del border bottom a verde
    if(campo.value.length > 0) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error')
    // De no ser así, el color lo cambiaria a rojo
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error')
    }
};

function validarEmail(campo) {
    // Guardo el valor que se escribe en el campo en una variable
    const mensaje = campo.value;
    // Condicion que busca arroba en el value del email
    if(mensaje.indexOf('@') !== -1) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error')
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error')
    }

}