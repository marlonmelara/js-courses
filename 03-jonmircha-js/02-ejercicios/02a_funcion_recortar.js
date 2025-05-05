/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFunción("Hola Mundo", 4) devolverá "Hola" */

console.log("***** 👉 Mi solución 👈 *****");
// Mi solución
function showClippedText1(words) {
  console.log(words.substring(0, 4));
}

showClippedText1("Hola mundo!");

console.log("***** Solución JonMircha *****");
// Solución JonMircha
const recortarTexto = (cadena = "", longitud = undefined) =>
  !cadena
    ? console.warn("No ingresaste el texto")
    : longitud === undefined
    ? console.warn("No ingresaste la longitud para recortar el texto")
    : console.info(cadena.slice(0, longitud));

recortarTexto("Hola Mundo", 4);
recortarTexto();
recortarTexto("Hola Hola");
recortarTexto("", 5);
//recortarTexto(true, 5);

console.log("***** Mi Solución Modificada *****");

const showClippedText1 = (words, longitud) =>
  typeof words !== "string" || words.length === 0
    ? console.warn("No ingresaste el texto")
    : typeof longitud !== "number" || longitud <= 0
    ? console.warn("No ingresaste la longitud para recortar el texto")
    : !Number.isInteger(longitud)
    ? console.warn("La longitud debe ser un número entero")
    : console.info(words.substring(0, longitud));

showClippedText1("Hola Mundo", 4);
showClippedText1();
showClippedText1("Hola Hola");
showClippedText1("HELLO HELLO HELLO", 11);
showClippedText1(true, 5);
showClippedText1("CIAO CIAO", true);
showClippedText1(undefined, 5);
showClippedText1("ciao, ciao", 2.5);

console.log("***** Mi Solución Modificada más indicada que la anterior *****");
const showClippedText2 = (words, longitud) => {
  if (typeof words !== "string" || words.length === 0) {
    console.warn("No ingresaste el texto");
  } else if (typeof longitud !== "number" || longitud <= 0) {
    console.warn("No ingresaste la longitud para recortar el texto");
  } else if (!Number.isInteger(longitud)) {
    console.warn("La longitud debe ser un número entero");
  } else {
    console.info(words.substring(0, longitud));
  }
};

showClippedText2("Hola Mundo", 4);
showClippedText2();
showClippedText2("Hola Hola");
showClippedText2("HELLO HELLO HELLO", 11);
showClippedText2(true, 5);
showClippedText2("CIAO CIAO", true);
showClippedText2(undefined, 5);
showClippedText2("ciao, ciao", 2.5);
