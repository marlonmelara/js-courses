/* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5 */

const contarLetras = (cadena = "") => {
  if (!cadena) return console.warn("No ingresaste una cadena de texto");
  if (typeof cadena !== "string")
    return console.error(
      `El valor ingresado ${cadena}, no es una cadena de texto valida`
    );

  let vocales = 0;
  let consonantes = 0;

  cadena = cadena.toLocaleLowerCase();

  for (let letra of cadena) {
    if (/[aeiouáéíóúü]/.test(letra)) {
      vocales++;
    }
    if (/[bcdfghjklnñpqrstvwxyz]/.test(letra)) {
      consonantes++;
    }
  }

  return console.info({
    cadena,
    vocales,
    consonantes,
  });
};

contarLetras();
contarLetras(3);
contarLetras("Hola mundo");
