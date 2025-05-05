//* Scope de variables

// Variables globales
// Aquí se están declarando tres variables en el ámbito global
let nombre = "Sally"; // 'nombre' es una variable que puede ser reasignada y está inicializada con el valor "Sally"

var edad = 6; // 'edad' es otra variable que puede ser reasignada y está inicializada con el valor 6

const AMIGO = "Woodstock"; // 'AMIGO' es una constante y no puede ser reasignada, está inicializada con el valor "Woodstock"

// Variables en una función (en un bloque)
// Esta función demuestra el concepto de ámbito de bloque y cómo las variables declaradas dentro de una función tienen un ámbito local

function saludar() {
  let nombre = "Linus"; // 'nombre' es una variable local que está en el ámbito de la función 'saludar' y está inicializada con el valor "Linus"

  nombre2 = "Charlie"; // 🚩 'nombre2' no está declarada con let, var o const, por lo que se elevará al ámbito global. Generalmente se considera una mala práctica

  var edad = 9; // 'edad' es una variable local que está en el ámbito de la función 'saludar' y está inicializada con el valor 9

  const AMIGO = "Snoopy"; // 'AMIGO' es una constante local que está en el ámbito de la función 'saludar' y está inicializada con el valor "Snoopy"

  console.log(nombre, nombre2, edad, AMIGO); // Se imprimen las variables locales en la consola
}
saludar(); // Se llama a la función 'saludar', lo que resulta en la impresión de las variables locales en la consola

console.log(nombre, edad, AMIGO); // Se imprimen las variables globales en la consola

// En este código, se demuestra cómo el ámbito (scope) afecta la visibilidad y la vida de las variables.
// Las variables globales están disponibles en todo el archivo, mientras que las variables locales solo están disponibles dentro de la función en la que fueron declaradas.
// 🚩 También se muestra cómo una variable no declarada (nombre2) se eleva al ámbito global, lo que generalmente se considera una mala práctica y puede causar errores difíciles de depurar.
