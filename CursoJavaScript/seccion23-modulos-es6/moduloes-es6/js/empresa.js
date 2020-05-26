// Importar clase de cliente para usar extend
import { Cliente } from './cliente.js';

// Exportar variables
export const nombreEmpresa = 'Federico';
export let ahorro = 2000000000;
export const categoria = 'Aprendizaje';

// Exportar funciones
export function mostrarInformacion(nombre, ahorro, categoria) {
    return `Empresa: ${nombre} - Ahorro: ${ahorro} - Categoría: ${categoria}`;
}

// Exportar una clase
export class Empresa extends Cliente {
    constructor(nombre, ahorro, categoria) {
        super(nombre, ahorro);
        this.categoria = categoria
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro} - Categoria: ${this.categoria}`;
    }
}



