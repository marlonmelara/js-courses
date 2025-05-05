// Funciones puras

// Side Effects
// 1. Modificar variables globales
// 2. Modificar parámetros
// 3. Solicitudes HTTP
// 4. Imprimir mensajes en pantalla o consola
// 5. Manipulación del DOM
// 6. Obtener la hora actual

// Función pura
function sum(a, b) {
  return a + b;
}

const sumarAyB = sum(5, 1);
console.log(sumarAyB);

// Función impura
function sum(a, b) {
  console.log("A: ", a);
  return a + b;
}

// Función impura
let total = 0;
function sumWithSideEffect(a) {
  total += a;
  return total;
}

sumWithSideEffect(10);
console.log(total);

// Función pura
function square(x) {
  return x * x;
}

// Función pura
function addTen(y) {
  return y + 10;
}
const sumTem = addTen(5);
console.log(sumTem);

const number = 5;

// Función pura
const finalResult = addTen(square(number));
console.log(finalResult);
