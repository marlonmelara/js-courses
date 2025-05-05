/**
Conceptos importantes:

* Procesamiento Single Thread y Multi Thread
* Operaciones de CPU y Operaciones de I/O
* Operaciones Concurrentes y Paralelas
* Operaciones Bloqueantes y No Bloqueantes: se refiere a la fase de espera
* en la que el código se va ejecutando
* Operaciones Síncronas y Asíncronas
*/

/** Código Síncrono Bloqueante */
/** Código Asíncrono No Bloqueante */

// Función síncrona bloqueante
// Inmediatamente se invoca la función anónima, empezando la secuencia síncrona.
(() => {
  console.log("Código síncrono"); // Primero, imprime "Código síncrono".
  console.log("Inicio"); // Segundo, imprime "Inicio".

  // Se define la función 'dos', pero no se ejecuta aún.
  function dos() {
    console.log("Dos"); // Cuando se llame a 'dos', imprimirá "Dos".
  }

  // Se define la función 'uno', pero no se ejecuta aún.
  function uno() {
    console.log("Uno"); // Cuando se llame a 'uno', empezará por imprimir "Uno".
    dos(); // Luego, 'uno' llama a 'dos', que imprime "Dos".
    console.log("Tres"); // Finalmente, después de que 'dos' se ha ejecutado, imprime "Tres".
  }

  uno(); // Se llama a la función 'uno', que inicia su secuencia de ejecución.
  console.log("Fin"); // Después de que 'uno' y 'dos' se han ejecutado, se imprime "Fin".
})();

/** La salida en la consola sería:
Código síncrono
Inicio
Uno
Dos
Tres
Fin
 */

// Función asíncrona no bloqueante
(() => {
  console.log("Código Asíncrono");
  console.log("Inicio");

  function dos() {
    setTimeout(function () {
      console.log("Dos");
    }, 1000);
  }

  function uno() {
    setTimeout(function () {
      console.log("Uno");
    }, 0);

    dos();
    console.log("Tres");
  }

  uno();
  console.log("Fin");
})();

/** La salida en la consola sería:
Código Asíncrono
Inicio
Tres
Fin
Uno
Dos

 */
