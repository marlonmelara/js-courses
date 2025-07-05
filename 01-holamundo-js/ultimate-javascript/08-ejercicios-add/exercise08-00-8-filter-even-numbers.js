// Ejercicio 8:
/** Crear una función llamada filterEvenNumbers que reciba un array de números como argumento. La función debe retornar un nuevo array que contenga solo los números pares del array original
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const anotherArray = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

// Usando ciclo for
const filterEvenNumbersWithFor = (arr) => {
  let evenNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    }
  }
  return evenNumbers;
};

let evenNumbersWithFor = filterEvenNumbersWithFor(numbers);
console.log(evenNumbersWithFor); // [2, 4, 6, 8, 10]

evenNumbersWithFor = filterEvenNumbersWithFor(anotherArray);
console.log(evenNumbersWithFor); // [ 10, 20, 30, 40, 50]

// Usando filter
const filterEvenNumbers = (arr) => {
  return arr.filter((num) => num % 2 === 0);
};

let evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers); // [2, 4, 6, 8, 10]

evenNumbers = filterEvenNumbers(anotherArray);
console.log(evenNumbers); // [ 10, 20, 30, 40, 50]
