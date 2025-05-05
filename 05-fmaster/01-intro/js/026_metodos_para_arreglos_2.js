/* 📌.indexOf()
 * - Obtener el primer index de un elemento
 * - Si no hau elemento nos retorna -1
 */

const nombres = [
  "Charlie",
  "Snoppy",
  "Woodstock",
  "Lucy",
  "Sally",
  "Linus",
  "Patty",
  "Marcie",
  "Snoppy",
  "Schroeder",
  "Franklin",
];

console.log(`Su número de indice es ${nombres.indexOf("Snoppy")}`);

/* 📌.lastIndexOf()
 * - Obtenemos el último index de un elemento
 */

const obtenerIndice = (nombre) => {
  const indice = nombres.lastIndexOf(nombre);
  // Si el índice es -1, significa que el nombre no se encontró en el array
  if (indice !== -1) {
    console.log(`El número de índice de ${nombre} es ${indice}`);
  } else {
    console.log(`${nombre} no se encontró en el array.`);
  }
};

// Llamada a la función obtenerIndice con "Snoppy" como argumento
obtenerIndice("Snoppy");

/* 📌.forEach()
 * - Nos permite ejecutar una funcion por cada elemento
 */

nombres.forEach((nombre, index) => {
  console.log(`Hola ${nombre} (${index})`);
});

/* 📌.find()
 * - Nos permite recorrer un arreglo y devuelve el PRIMER elemento que retornemos
 */
// Obtener solo el nombre
const resultado = nombres.find((nombre) => {
  if (nombre[0] === "L") {
    return nombre;
  }
});

console.log(resultado);

// Obtener el indice y el nombre
const obtenerNombreIndice = (inicial) => {
  // Encuentra el primer nombre que comienza con la letra especificada.
  const nombreEncontrado = nombres.find((nombre) => nombre[0] === inicial);
  if (nombreEncontrado) {
    // Encuentra el índice del nombre encontrado.
    const indice = nombres.indexOf(nombreEncontrado);
    console.log(
      `El número de índice del nombre que inicia con la letra ${inicial} es ${indice}, y el nombre es ${nombreEncontrado}`
    );
  } else {
    console.log(
      `No se encontró ningún nombre que inicie con la letra ${inicial}.`
    );
  }
};

// Llamada a la función obtenerNombreIndice con "S" como argumento.
obtenerNombreIndice("L");

// const obtenerIndice2 = (inicial) => {
//   const indice = nombres.find(nombres);
//   if (nombres[0] === inicial) {
//     console.log(
//       `El número de índice del nombre que inicia con la letra ${inicial} es ${indice}`
//     );
//   }
// };

/* 📌.map()
 * - Nos permite ejecutar una función por cada elemento y crear un nuevo arreglo en base a los resultados de esa función
 */

const nombresMayusculas = nombres.map((nombre) => nombre.toUpperCase());

console.log(nombresMayusculas);
