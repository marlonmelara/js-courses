/*7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true */

console.log("***** Solución JonMircha *****");
const palindromo = (palabra = "") => {
  if (!palabra) return console.warn("No ingresaste el texto");

  palabra = palabra.toLocaleLowerCase();

  let alReves = palabra.split("").reverse().join("");

  return palabra === alReves
    ? console.info(
        `Sí es palindromo, palabra original ${palabra}, palabra al reves ${alReves}`
      )
    : console.info(
        `No es palindromo, palabra original ${palabra}, palabra al reves ${alReves}`
      );
};

palindromo();
palindromo("Hola mundo");
palindromo("SaLas");

/* if (typeof palabra !== "string" || palabra.length === 0)
console.warn("No ingresaste el texto"); */

console.log("***** Solución Modificada *****");
const palindromo2 = (palabra = "") => {
  if (typeof palabra !== "string" || !palabra)
    return console.warn("No ingresaste el texto válido");

  palabra = palabra.toLocaleLowerCase();

  let alReves = palabra.split("").reverse().join("");

  return palabra === alReves
    ? console.info(
        `Sí es palindromo, palabra original ${palabra}, palabra al reves ${alReves}`
      )
    : console.info(
        `No es palindromo, palabra original ${palabra}, palabra al reves ${alReves}`
      );
};

palindromo2();
palindromo2(7);
palindromo2("Hola mundo");
palindromo2("SaLas");
