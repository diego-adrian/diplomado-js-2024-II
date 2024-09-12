// Funciones

// function saludar(persona) {
//   const { nombre, edad, casado } = persona;
//   console.log(`Hola ${nombre}, tengo ${edad} años y estoy ${casado ? 'casado' : 'soltero'}`);
// }

// saludar('Pedro', 15, true);
// saludar('Cecilia', 45, false);

// saludar('Cinthia', true, 30);

// const saludar = (persona) => {
//   const { nombre, edad, casado } = persona;
//   console.log(`Hola ${nombre}, tengo ${edad} años y estoy ${casado ? 'casado' : 'soltero'}`);
// }

// const personaAdrian = {
//   nombre: 'Adrian',
//   edad: 20,
//   casado: true
// };

// saludar(personaAdrian);

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

// console.log(sumar(2, 3));

const calculadora = (a, b, cb) => cb(a, b);
// console.log(calculadora(10, 3, sumar));
// console.log(calculadora(10, 3, restar));
// console.log(calculadora(10, 3, multiplicar));
// console.log(Math.round(calculadora(10, 3, dividir), 2));



