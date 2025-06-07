// Vaciando arrays en JavaScript
// Existen varias formas de vaciar un array en JavaScript, algunas más eficientes que otras. Estás son las más comunes:

let arr1 = [1, 2];
let arr2 = arr1; // arr2 es una referencia a arr1
arr1 = []; // Vaciamos arr1
console.log(arr1, arr2); // [] [1, 2] (arr2 sigue siendo una referencia a los valores originales de arr1)

// Para vaciar un array sin perder la referencia
let arr3 = [1, 2];
arr3.length = 0; // Vaciamos arr3
console.log(arr3); // [] (arr3 ahora está vacío)

// Otra forma de vaciar un array sin perder la referencia más explicita
let arr4 = [1, 2];
arr4.splice(0, arr4.length); // Vaciamos arr4 usando splice
console.log(arr4); // [] (arr4 ahora está vacío)

// Menos eficientes / Menos recomendables (especialmente para arrays grandes):

// Usando el método pop para vaciar un array
let arr5 = [1, 2];
while (arr5.pop()); // Vaciamos arr5 usando pop
console.log(arr5); // []// (arr5 ahora está vacío)

// Usando el método shift para vaciar un array
let arr6 = [1, 2];
while (arr6.shift()); // Vaciamos arr6 usando shift
console.log(arr6); // []
