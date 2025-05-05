// Curso JavaScript: 15. Ciclos (Loops)
// https://youtu.be/AapgtR0Rwk0

//

let contador = 0;

while (contador < 10) {
  console.log(`while ${contador}`);
  contador++;
}

do {
  console.log(`do while ${contador}`);
  contador++;
} while (contador < 10);

/* for (let index = 0; index < array.length; index++) {
  const element = array[index];
} */

/*
for (inicialización de variable; condición;
  decremento o incremento) {
    sentencias que ejecuta el for
    sentencias que ejecuta el for
    sentencias que ejecuta el for
  }
*/

for (let i = 0; i < 10; i++) {
  console.log(`for ${i}`);
}

let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

const JON = {
  nombre: "Jon",
  apellido: "Dodley",
  edad: 35,
};

/* for...in: Este bucle se utiliza para iterar sobre las propiedades enumerables de un objeto. Itera sobre los nombres de las propiedades y permite acceder tanto a las claves como a los valores de cada propiedad. Es útil cuando necesitas recorrer las propiedades de un objeto y realizar operaciones basadas en ellas. */
for (const propiedad in JON) {
  console.log(propiedad);
}

for (const propiedad in JON) {
  console.log(`Key: ${propiedad}, Value: ${JON[propiedad]}`);
}

/* for...of: Este bucle se utiliza para iterar sobre elementos de una colección iterable, como un array o un objeto iterable. Itera directamente sobre los valores de la colección y no proporciona acceso a los índices o claves. Es especialmente útil cuando solo necesitas recorrer los elementos de una colección sin preocuparte por los detalles de los índices o claves.  */
for (const elemento of numeros) {
  console.log(elemento);
}

let cadena = "Hola mundo";
for (const caracter of cadena) {
  console.log(caracter);
}
