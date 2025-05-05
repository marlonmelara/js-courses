/*
 * 📌 Break
 * La sentencia break nos permite salir de bloques de código como Switch o ciclos (loops) como for, while, etc.
 * En este caso, se utiliza para salir del ciclo for cuando se cumple una condición.
 *
 */

const nombres = [
  "Arturo",
  "Andres",
  "Alejandro",
  "Adrian",
  "Antonio",
  "Ana",
  "Roberto",
  "Angela",
  "Alejandra",
];

for (let i = 0; i < nombres.length; i++) {
  // Si la primera letra del nombre actual no es 'A', se ejecutarán las siguientes instrucciones
  if (nombres[i][0] !== "A") {
    console.log("Alto! Hay un nombre que no empieza por la letra A");
    console.log(`${nombres[i]} no empieza por la letra A`);
    break; // Se sale del ciclo for, no se ejecutarán más iteraciones
  }

  // Si la primera letra del nombre actual es 'A', se imprimirá el nombre en la consola
  console.log(nombres[i]);
}

/*
 * 📌 Continue
 * La sentencia continue nos permite saltar al inicio de la siguiente iteración del ciclo,
 * sin ejecutar las siguientes instrucciones del ciclo.
 *
 */

const jugadores = [
  "Charlie",
  "Snoppy",
  "Woodstock",
  "Lucy",
  "Sally",
  "Linus",
  "Patty",
  "Marcie",
  "Schroeder",
  "Franklin",
];

console.log("Lista de integrantes del equipo de baseball:");

for (let i = 0; i < jugadores.length; i++) {
  // Si el nombre del jugador actual es 'Marcie', se saltará al inicio de la siguiente iteración,
  // sin ejecutar la instrucción console.log(jugadores[i]);
  if (jugadores[i] === "Marcie") {
    continue;
  }

  // Si el nombre del jugador actual no es 'Marcie', se imprimirá el nombre en la consola
  console.log(jugadores[i]);
}

/*
 * En este código, se demuestra cómo utilizar las sentencias break y continue para controlar el flujo de ejecución dentro de un ciclo.
 * 'break' se utiliza para salir del ciclo completamente cuando se cumple una condición,
 * mientras que 'continue' se utiliza para saltar al inicio de la siguiente iteración del ciclo cuando se cumple una condición.
 */
