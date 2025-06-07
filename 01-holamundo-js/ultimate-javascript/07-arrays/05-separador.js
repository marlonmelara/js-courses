// Separador de arrays con el operador spread
// El operador spread (...) permite separar los elementos de un array y combinarlos con otros arrays o valores.

let arr1 = [1, 2];
let arr2 = [5, 6];

let arr3 = [...arr1, ...arr2]; // Combina los arrays arr1 y arr2
console.log(arr3); // [1, 2, 5, 6]

let arr4 = [0, ...arr1, 3, 4, ...arr2, 7]; // Combina arr1 y arr2 con otros valores
console.log(arr4); // [0, 1, 2, 3, 4, 5, 6, 7]

let arr5 = [...arr4]; // Crea una copia de arr4
arr4.pop(); // Elimina el último elemento de arr4
console.log(arr4, arr5); // [0, 1, 2, 3, 4, 5, 6] [0, 1, 2, 3, 4, 5, 6, 7] (arr5 no se ve afectado)
