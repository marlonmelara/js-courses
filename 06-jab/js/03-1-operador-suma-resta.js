// Seleccionando un elemento del DOM con la clase 'contenedor' y asignándolo a la variable 'caja'
let caja = document.querySelector(".contenedor");

/***
 * Este código demuestra cómo usar el operador + y el operador de asignación compuesta += para realizar
 * operaciones de suma y asignación en JavaScript. También muestra cómo cambiar el contenido de un elemento del DOM.
 */

// Inicialización de dos variables con valores numéricos
let numero1 = 2;
let numero2 = 3;

// Forma antigua de usar el operador + para sumar
// Esta sección de código está comentada, pero si se descomenta, sumaría 10 al valor actual de numero1 y luego reasignaría el resultado a numero1
// numero1 = numero1 + 10;
// console.log(numero1); // Output: 12

// Buenas prácticas al usar el operador + para sumar en lugar de la forma antigua
// Utilizando el operador de asignación compuesta += que suma y asigna el resultado en una sola operación
numero1 += 10;
console.log(numero1); // Output: 12
dibujar(numero1); // Llamando a la función dibujar y pasando numero1 como argumento

// Cambio del valor de la variable a 10 usando el operador de asignación =
// Nota: El signo + antes del 10 no afecta el valor, simplemente indica que es un número positivo
numero1 = +10;
console.log(numero1); // Output: 10

// Utilizando el operador de asignación compuesta -= que resta y asigna el resultado en una sola operación
numero2 -= 2;
dibujar(numero2); // Llamando a la función dibujar y pasando numero2 como argumento

// Definición de la función dibujar, que acepta un argumento 'valor'
// Esta función actualiza el contenido HTML del elemento 'caja', añadiendo un nuevo div con el valor proporcionado
function dibujar(valor) {
  caja.innerHTML += `<div> ${valor}</div>`; // Utilizando template literals para crear una cadena de HTML y añadirla al contenido existente de 'caja'
}
