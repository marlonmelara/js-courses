// Ejercicio 01: Hacer una función que convertirá los números recibido en un array en el valor absoluto de los mismos

const numbers = [-2, 3, 5, -15];

// Usando ciclo for, push y Math.abs
const forAbsolute = (array) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(Math.abs(array[i]));
  }
  return newArray;
};

const absoluteNumbers = forAbsolute(numbers);
console.log(numbers); // [-2, 3, 5, -15]
console.log(absoluteNumbers); // [2, 3, 5, 15]

// Usando map, push y Math.abs
const forAbsoluteWithMap = (array) => {
  const newArray = array.map((number) => Math.abs(number));
  return newArray;
};

const absoluteNumbersWithMap = forAbsoluteWithMap(numbers);
console.log(numbers); // [-2, 3, 5, -15]
console.log(absoluteNumbersWithMap); // [2, 3, 5, 15]
