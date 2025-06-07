// Combinando arrays con concat y slice
// En JavaScript, puedes combinar arrays utilizando el método `concat` y luego extraer porciones de ellos con `slice`.

let arr1 = [1, 2];
let arr2 = [3, 4];

let joined = arr1.concat(arr2); // Uniendo dos arrays con concat
console.log(joined); // [1, 2, 3, 4]

let sliced = joined.slice(1, 3); // Sacando una porción del array con slice
console.log(sliced); // [2, 3]

let slicedFromStart = joined.slice(1); // Sacando una porción del array desde un índice específico
console.log(slicedFromStart); // [2, 3, 4]
let slicedToEnd = joined.slice(0, -1); // Sacando una porción del array hasta un índice específico desde el final
console.log(slicedToEnd); // [1, 2, 3]

let joinedAndSliced = arr1.concat(arr2).slice(1, 3); // Uniendo y sacando una porción del array
console.log(joinedAndSliced); // [2, 3]

let copy = joined.slice(); // Haciendo una copia del array con slice
console.log(copy); // [1, 2, 3, 4] No es una referencia, es una copia del array original
