/*
 * Local Scope o Variables Locales:
 * - Son las variables declaradas dentro de una función.
 * - Solo podemos acceder a ellas desde dentro de la función o funciones anidadas.
 */

// Declaración de una variable global 'numero' usando 'var'.
var numero = 1;

/**
 * Función 'obtenerNumeroLetras' que declara y utiliza una variable local 'numero'.
 *
 * @param {string} nombre - El nombre del cual se determinará el número de letras.
 */
var obtenerNumeroLetras = (nombre) => {
  // Declaración de una variable local 'numero' usando 'var', que sobrescribe la variable global 'numero' dentro del ámbito de esta función.
  var numero = nombre.length;

  // Acceso a la variable local 'numero' y se imprime un mensaje en la consola indicando el número de letras en 'nombre'.
  console.log(`${nombre} tiene ${numero} números de letras`);

  /**
   * Función anidada 'funcionAnidada' que accede a la variable local 'numero' de la función 'obtenerNumeroLetras'.
   */
  var funcionAnidada = () => {
    // Acceso a la variable local 'numero' de la función 'obtenerNumeroLetras' y se imprime su valor en la consola.
    console.log(numero);
  };

  // Llamada a la función anidada 'funcionAnidada', que accede a la variable local 'numero' de la función 'obtenerNumeroLetras'.
  funcionAnidada();
};

// Llamada a la función 'obtenerNumeroLetras' con el argumento "Snoopy".
// Output: "Snoopy tiene 6 números de letras" y "6"
obtenerNumeroLetras("Snoopy");

// Acceso a la variable global 'numero' y se imprime su valor en la consola.
// Output: "1"
console.log(numero);
