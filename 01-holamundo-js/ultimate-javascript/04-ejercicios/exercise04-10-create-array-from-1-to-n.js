/**
Crear array de longitud N y que contenga los números del 1 al N.
 */

let longitud = 7; // Cambia este valor para crear un array de diferente longitud

function createArray(n) {
  if (n <= 0) {
    return []; // Si la longitud es menor o igual a 0, devuelve el array vacío
  }
  let arr = []; // Inicializa un array vacío
  for (let i = 0; i < n; i++) {
    arr[i] = i + 1; // Asigna el valor i + 1 a la posición i del array
  }
  return arr; // Devuelve el array creado
}

let result = createArray(longitud);
console.log(result); // El resultado sera: // [1, 2, 3, 4, 5, 6, 7]
