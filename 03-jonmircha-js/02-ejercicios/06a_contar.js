/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2 */

const textoEnCadena = (cadena = "", texto = "") => {
  if (typeof cadena !== "string" || cadena.length === 0) {
    console.warn("No ingresaste el texto");
    return;
  }
  if (typeof texto !== "string" || texto.length === 0) {
    console.warn("No ingresaste un texto válido");
    return;
  }

  let indice = 0;
  let contador = 0; // Esta variable es la que permite ir registrando cuántas veces se repite una palabra

  while ((indice = cadena.indexOf(texto, indice)) != -1) {
    contador++;
    indice += texto.length;
  }

  console.log(`El texto "${texto}" se repite ${contador} veces en la cadena.`);
};

textoEnCadena("hola mundo adios mundo", "mundo");
textoEnCadena("abcabcabc", "abc");

/**
En este código, se usa el método indexOf() para buscar la primera aparición de texto en cadena a partir del índice actual indice. Si se encuentra texto, indexOf() devuelve el índice de inicio de la coincidencia y se incrementa contador. Luego se actualiza indice para que apunte justo después del final de la coincidencia actual, para que la próxima búsqueda con indexOf() continúe a partir de ahí. Si indexOf() no encuentra texto, devuelve -1, y el bucle while termina.

Al final del bucle, contador contiene el número de veces que se encontró texto en cadena, y se imprime este número.
*/

console.log("***** Solución JonMircha *****");

const textoEnCadena2 = (cadena = "", texto = "") => {
  if (typeof cadena !== "string" || cadena.length === 0) {
    console.warn("No ingresaste el texto");
    return;
  }
  if (typeof texto !== "string" || texto.length === 0) {
    console.warn("No ingresaste un texto válido");
    return;
  }

  let indice = 0;
  let contador = 0; // Esta variable es la que permite ir registrando cuántas veces se repite una palabra

  while (indice !== -1) {
    // Cuando indexOf no dectacta la palabra va a devolver -1
    indice = cadena.indexOf(texto, indice);
    if (indice !== -1) {
      indice++;
      contador++;
    }
  }

  console.log(`El texto "${texto}" se repite ${contador} veces en la cadena.`);
};

textoEnCadena2("Hello world bye world", "world");
textoEnCadena2("abcabcabc", "abc");
