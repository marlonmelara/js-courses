/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFunción("Hola Mundo") devolverá 10 */

console.log("***** 👉 Mi solución 👈 *****");
// Mi solución
function countCharacters1(
  words = ""
) /* Tiene que llevar un valor por defecto como una cadena vacía ("") si no se pasa ningún argumento a la función
 */ {
  console.log(words.length);
}

countCharacters1();
/* 0  Como no se pasó ningún argumento a countCharacters1, words toma su valor por defecto, que es una cadena vacía. La propiedad .length de una cadena vacía es 0, por lo que console.log(words.length) imprime 0 en la consola.*/

countCharacters1("Hello world!"); // 12

// Esta es un Función Declarada
/**
La función se llama countCharacters y el parámetro es (word)
*/

console.log("***** Función declarada - Solución Jon Mircha *****");
function countCharacters(words = "") {
  if (!words) {
    console.warn("No ingresaste ninguna cadena");
  } else {
    console.info(`La cadena "${words}" tiene ${words.length} caracteres`);
  } // La función realiza el conteo de caracteres utilizando la propiedad length de la cadena de texto y muestra el resultado que en este caso es 12
}

countCharacters();
countCharacters("Hello world!"); //Al llamar a la función se le pasa el string como argumento

console.log("***** Función expresada - Solución Jon Mircha *****");

// Esta es un Función expresada
/**
La conversión a operador ternario simplifica aún más la función, ya que se puede expresar en una sola línea sin la necesidad de utilizar las llaves {} (aunque pueden usarse) ni las palabras clave if y else.
*/

const contarCaracteres1 = (cadena = "") =>
  !cadena
    ? console.warn("No ingresaste ninguna cadena")
    : console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);

contarCaracteres1();
contarCaracteres1(7);
contarCaracteres1(true);
contarCaracteres1("Hola mundo!");

console.log("***** Mi Solución Modificada con operadores ternarios *****");

const contarCaracteres2 = (cadena = "") =>
  typeof cadena !== "string" // Valida que el valor ingresado sea un string
    ? console.warn("No ingresaste un valor de tipo string")
    : !cadena
    ? console.warn("No ingresaste ninguna cadena")
    : console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);

contarCaracteres2();
contarCaracteres2(7);
contarCaracteres2(true);
contarCaracteres2("Hola mundo!");

console.log("***** Mi Solución Modificada utilizando estructura if/else *****");

const contarCaracteres3 = (cadena = "") => {
  if (typeof cadena !== "string") {
    console.warn("No ingresaste un valor de tipo string");
  } else if (!cadena) {
    console.warn("No ingresaste ninguna cadena");
  } else {
    console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);
  }
};

contarCaracteres3();
contarCaracteres3(7);
contarCaracteres3(true);
contarCaracteres3("Hola mundo!");
