import '../css/style.scss';

const clientes = ['Cliente 1', 'Cliente 2', 'Cliente 3', 'Cliente 4'];

let html = '';

clientes.forEach(cliente => {
    html += `
        <li>${cliente}</li>
    `;
});

document.querySelector('#clientes').innerHTML = html;