// Ejemplo de uso de reduce para sumar números en un array
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // 15

// Ejemplo de aplanar un array que tiene arrays anidados
const nestedArrays = [[1, 2], [3, 4], [5], 6, 7, [8, 9, 0]];

const flattened = nestedArrays.reduce(
  (accumulator, currentValue) => accumulator.concat(currentValue),
  []
);

console.log(flattened); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]];
