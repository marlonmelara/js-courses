// Ejercicio 7:
/** Crear una función que reciba un array de números como argumento. La función debe retornar la suma total de todos los números en el array
 */

const numbers = [1, 2, 3, 4, 5];

// Usando ciclo for
const sumArrayWithFor = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

console.log(sumArrayWithFor(numbers)); // 15

// Usando reduce
const sumArrayWithReduce = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sumArrayWithReduce); // 15
