// Sintaxis tradicional de funciones en ECMAScript 5 y anteriores.
// Aquí se utiliza la palabra clave "function" para declarar una función.
// Esta es la manera clásica de definir funciones en JavaScript.
function square(num) {
  return num * num;
}

// Arrow Functions en ECMAScript 6 (ES6) o ES2015.
// Las funciones flecha proporcionan una sintaxis más concisa para escribir funciones.
// Utilizan la "fat arrow" (=>) y no requieren la palabra clave "function".
// Esta sintaxis es especialmente útil para funciones que contienen una sola expresión.
const square = (num) => {
  return num * num;
};

// Arrow Functions refactorizado en ES6.
// Para una función flecha con un solo argumento y una sola expresión,
// podemos omitir los paréntesis alrededor del argumento y las llaves alrededor del cuerpo de la función.
// También podemos omitir la palabra clave "return", ya que se infiere automáticamente.
// Esta es la forma más concisa de escribir una función en ES6.
const square = (num) => num * num;
