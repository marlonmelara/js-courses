//Curso JavaScript: 18. Destructuración
//https://youtu.be/YTtZ9TUQ48E

/** La destructuración es una característica de JavaScript que nos permite extraer valores de arrays o propiedades de objetos de una manera más concisa. En lugar de acceder a los elementos o propiedades uno por uno utilizando la notación de corchetes o puntos, la destructuración nos permite asignar esos valores a variables individuales. */

const NUMEROS = [1, 2, 3];

// Sin destructuración
let uno = NUMEROS[0],
  dos = NUMEROS[1],
  tres = NUMEROS[2];

console.log(uno, dos, tres);

// Con destructuración
const [one, two, three] = NUMEROS;
console.log(one, two, three);

const PERSONA = {
  nombre: "Jon",
  apellido: "Dodley",
  edad: 35,
};

let { nombre, apellido, edad } = PERSONA;
console.log(nombre, apellido, edad);
