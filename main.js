// var edad = 30;
// var nombre = 'Adrian';
const PI = 3.1416;
// let edad = 30;
// const edad = 30;

let edad = 10; // Number
let nombre = ''; // String
let eresHombre = true; // Boolean
let eres; // Undefined
let inicialmente = null; // null;

let edadLet = PI;
edadLet = 3.16;

let persona = {
  nombre: 'Adrian',
  edad: 30,
  esHombre: true,
  hermanos: {
    cantidad: 5,
    nombres: ['Juan', 'Pedro', 'Maria', 'Jose', 'Ana'],
    dinero: {
      efectivo: 100,
      tarjeta: 'VISA'
    }
  }
};

// {...} => objetos
// [...] => arreglos
// ...params => funciones

// let copiaPersona = structuredClone(persona);

// // console.log('111', persona, copiaPersona);

// copiaPersona.nombre = 'Vicente';

// // console.log('222', persona, copiaPersona);

// console.log('Nombre del primer objeto', persona.nombre);
// console.log('Nombre del segundo objeto', copiaPersona.nombre);

// copiaPersona.hermanos.cantidad = 10;

// console.log('Cantidad del primer objeto', persona.hermanos.cantidad);
// console.log('Cantidad del segundo objeto', copiaPersona.hermanos.cantidad);
// edad = 20;
// let copiaEdadAnterior = edad;

// console.log('111', edad, copiaEdadAnterior);
// edad = 50;

// copiaEdadAnterior = edad + 50;
// console.log('222', edad, copiaEdadAnterior);

// edad = 100;
// console.log('333', edad, copiaEdadAnterior);


const estudiantes = [{
    nombre: 'Adrian',
    edad: 30,
    casado: true
  },
  {
    nombre: 'Wendy',
    edad: 20,
    casado: true
  },
  {
    nombre: 'Vicente',
    edad: 40,
    casado: true
  },
  {
    nombre: 'Adriel',
    edad: 19,
    casado: false
  },
];

let aNombres = [];

const edades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Output: [4, 8, 12, 16, 20]

// const resultado = edades
//   .filter(num => num % 2 === 0)
//   .map(num => num * 2);

// const resultado = edades.flatMap(num => num % 2 === 0 ? num * 2 : []);
// console.log(resultado);

// const estudiantes2 = [10, 20, 30, [70], 40, [80], 50, [100, 200, 300, [400, [500]]]];
// aNombres = estudiantes2.flat(Infinity);
// const nombre2 = 'adrian';
// console.log(nombre2.indexOf('a'));
// const nombre2 = 'adrian';
// console.log(nombre2.includes('p'));

// aNombres = estudiantes.some(elem => elem.casado);
// aNombres = estudiantes.every(elem => elem.casado);
// aNombres = estudiantes.filter(elem => elem.edad);
// aNombres = estudiantes.findIndexOf(elem => elem.edad === 40);

// const sumaEdades = estudiantes.reduce((acc, elem) => {
//   acc.nombre = elem.nombre;
//   acc.edad = elem.edad;
//   acc.casado = elem.casado;
//   acc.nuevoAtributo = `Nuevo Atributo ${elem.nombre}`;
//   return acc;
// }, {});

// console.log(sumaEdades);

// let edades = [20, 30, 40, 50, 60, 70, 80, 40, 90, 30, 100];

// const edadesSinRepeticion = [...new Set(edades)];
// console.log(edadesSinRepeticion);

// console.time('for');
// for (let i = 0; i < estudiantes.length; i++) {
// const newEstudiante = {
//   ...estudiantes[i],
//   correo: `${estudiantes[i].nombre}@gmail.com`
// };
//   aNombres.push(newEstudiante);
// }
// console.timeEnd('for');
// trabajando con map

// console.time('map');
// aNombres = estudiantes.map(elemEstudiante => ({
//   ...elemEstudiante,
//   correo: `${elemEstudiante.nombre}@gmail.com`
// }));

// aNombres = estudiantes.map(elemEstudiante => {
//   const newEstudiante = {
//       ...elemEstudiante,
//       correo: `${elemEstudiante.nombre}@gmail.com`
//   };
//   return newEstudiante;
// });


// // console.timeEnd('map');

// console.log(aNombres);