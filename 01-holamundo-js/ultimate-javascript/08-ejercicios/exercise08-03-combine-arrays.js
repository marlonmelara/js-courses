// Combinaremos dos arrays de números para posteriormente ordenarlos

const array1 = [10, 5, 8];
const array2 = [2, 7, 3];

// Combinar los arrays
const combinatedArray = [...array1, ...array2];

// Ordenar de menor a mayor
const sortedArray = combinatedArray.sort((a, b) => a - b);

console.log(sortedArray); // [2, 3, 5, 7, 8, 10]
