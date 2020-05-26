/* Forma 1 de import nativo
import { nombreCliente, ahorro, mostrarInformacion } from './cliente.js';

console.log(nombreCliente);
console.log(ahorro);

const info = mostrarInformacion(nombreCliente, ahorro);
console.log(info);

const mostrarNombreCliente = mostrarNombre(nombreCliente);
console.log(mostrarNombreCliente);
*/

// Forma 2 de import nativo
import * as clientes from './cliente.js';
import { nombreEmpresa, ahorro as ahorroEmpresa, categoria, mostrarInformacion as informacionEmpresa, Empresa } from './empresa.js';
// Destructuring del objeto cliente que creo para traer todo desde "./cliente.js"
const { nombreCliente, ahorro, mostrarInformacion, Cliente } = clientes;

// Imprimo variables de clientes
console.log(nombreCliente);
console.log(ahorro);

// Imprimo variables de empresa
console.log(nombreEmpresa);
console.log(ahorroEmpresa);
console.log(categoria);

// Utilizo e imprimo funciones de clientes
const info = mostrarInformacion(nombreCliente, ahorro);
console.log(info);

// Utilizo e imprimo funciones de empresa
const infoEmpresa = informacionEmpresa(nombreEmpresa, ahorroEmpresa, categoria);
console.log(infoEmpresa);

// Utilizar la clase clientes
let cliente = new Cliente(nombreCliente, ahorro)
console.log(cliente);
console.log(cliente.mostrarInformacion());

// Utilizar la clase empresa
let empresa = new Empresa(nombreEmpresa, ahorroEmpresa, categoria)
console.log(empresa);
console.log(empresa.mostrarInformacion());


