const autos = [
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2012,
		precio: 30000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Audi',
		modelo: 'A4',
		year: 2018,
		precio: 40000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Ford',
		modelo: 'Mustang',
		year: 2015,
		precio: 20000,
		puertas: 2,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Audi',
		modelo: 'A6',
		year: 2010,
		precio: 35000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2016,
		precio: 70000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2015,
		precio: 25000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Camaro',
		year: 2018,
		precio: 60000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Ford',
		modelo: 'Mustang',
		year: 2019,
		precio: 80000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2017,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Audi',
		modelo: 'A3',
		year: 2017,
		precio: 55000,
		puertas: 2,
		color: 'Negro',
		transmision: 'manual'
	},
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2012,
		precio: 25000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 45000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2019,
		precio: 90000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Ford',
		modelo: 'Mustang',
		year: 2017,
		recio: 60000,
		puertas: 2,
		color: 'Negro',
		transmision: 'manual'
	},
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2015,
		precio: 35000,
		puertas: 2,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2018,
		precio: 50000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2017,
		precio: 80000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Audi',
		modelo: 'A4',
		year: 2016,
		precio: 30000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	}
];

/* 
// Antes se utilizaba el "for" para todo

for(let i=0; i<autos.length; i++) {
	if(autos[i].puertas === 4) {
		console.log(autos[i])
	}
};
*/

/*
// forEach
autos.forEach(auto => {
	const { marca, modelo, year, precio, puertas, color, transmision } = auto;
	console.log(auto);
	
	//console.log(marca);
	//console.log(modelo);
	//console.log(year);
	//console.log(precio);
	//console.log(puertas);
	//console.log(color);
	//console.log(transmision);
	
});
*/

/*
// map (La mayor y única diferencia con el forEach es que map permite crear un nuevo Array y guardar el retorno de valores en ese mismo nuevo Array)
let resultado = autos.map(auto => {
	return auto;
});
console.log(resultado);
*/

/*
// filter (Crea un nuevo arreglo basado en una prueba que es evaluada)
let resultado = autos.filter(auto => {
	const { marca, color, year, precio, transmision } = auto;
	//return marca !== 'BMW';
	//return color === 'Rojo';
	//return year === 2018;
	//return year > 2015;
	//return precio > 50000;
	//return puertas === 2;
	//return transmision === 'automatico';
	//return year >= 2015 && year <= 2017;
	return year >= 2015 && year <= 2017 && marca === 'BMW';
});
console.log(resultado);
*/

/*
// find (Solo retornara el PRIMER elemento que encuentre bajo la condicion a evaluar)
let resultado = autos.find(auto => {
	const { marca, modelo }= auto;
	//return marca === 'BMW';
	return modelo === 'Mustang';
});
console.log(resultado)
*/

/*
// reduce (Toma todos los valores y devuelve un valor único)
//let resultado = autos.reduce((total, auto) => total + auto.precio, 0);

const numeros = [1,2,3];
let resultado = numeros.reduce((total, numero) => total + numero, 0)

console.log(resultado);
*/


// some (Evalúa una condicion y retorna "true" o "false" según se cumpla o no)
//let resultado = autos.some(auto => auto.marca === 'BMW');
//let resultado = autos.some(auto => auto.marca === 'Ferrari');
let resultado = autos.some(auto => auto.precio > 1000000);

console.log(resultado)


